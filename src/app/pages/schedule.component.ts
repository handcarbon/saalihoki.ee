import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  MatchState,
  PORTAL_MATCHES,
  PORTAL_PENDING_MATCHES,
  PortalMatch,
  PortalPendingMatch,
  hasScore,
  matchState
} from '../portal-data';

interface ScheduleDay {
  date: Date;
  key: string;
  weekday: string;
  dayNumber: string;
  month: string;
  count: number;
}

interface MatchGroup {
  key: string;
  label: string;
  matches: PortalMatch[];
}

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './schedule.component.html'
})
export class ScheduleComponent implements OnInit, OnDestroy {
  readonly allMatches = PORTAL_MATCHES;
  readonly allPendingMatches = PORTAL_PENDING_MATCHES;
  readonly leagues = this.uniqueValues([
    ...PORTAL_MATCHES.map((match) => match.league),
    ...PORTAL_PENDING_MATCHES.map((match) => match.league)
  ]);
  readonly teams = this.uniqueValues([
    ...PORTAL_MATCHES.flatMap((match) => [match.home, match.away]),
    ...PORTAL_PENDING_MATCHES.flatMap((match) => [match.home, match.away])
  ]);
  readonly venues = this.uniqueValues([
    ...PORTAL_MATCHES.map((match) => match.venue),
    ...PORTAL_PENDING_MATCHES.map((match) => match.venue).filter((venue): venue is string => Boolean(venue))
  ]);

  weekStart = this.startOfWeek(new Date());
  selectedDay = 'all';
  selectedLeague = 'all';
  selectedTeam = 'all';
  selectedVenue = 'all';

  private readonly subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => this.applyQueryParams(params)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get weekDays(): ScheduleDay[] {
    const matches = this.matchesInWeekWithFilters;
    return Array.from({ length: 7 }, (_, index) => {
      const date = this.addDays(this.weekStart, index);
      const key = this.dateKey(date);
      return {
        date,
        key,
        weekday: date.toLocaleDateString('et-EE', { weekday: 'short' }).replace('.', '').toUpperCase(),
        dayNumber: date.toLocaleDateString('et-EE', { day: '2-digit' }),
        month: date.toLocaleDateString('et-EE', { month: 'short' }).replace('.', '').toUpperCase(),
        count: matches.filter((match) => this.dateKey(new Date(match.startsAt)) === key).length
      };
    });
  }

  get weekRangeLabel(): string {
    const end = this.addDays(this.weekStart, 6);
    const startMonth = this.weekStart.toLocaleDateString('et-EE', { month: 'short' }).replace('.', '');
    const endMonth = end.toLocaleDateString('et-EE', { month: 'short' }).replace('.', '');
    const year = end.getFullYear();
    if (this.weekStart.getMonth() === end.getMonth()) {
      return `${this.weekStart.getDate()}.–${end.getDate()}. ${endMonth} ${year}`;
    }
    return `${this.weekStart.getDate()}. ${startMonth} – ${end.getDate()}. ${endMonth} ${year}`;
  }

  get matchesInWeekWithFilters(): PortalMatch[] {
    const start = this.weekStart.getTime();
    const end = this.addDays(this.weekStart, 7).getTime();
    return this.allMatches
      .filter((match) => {
        const kickoff = new Date(match.startsAt).getTime();
        return kickoff >= start && kickoff < end;
      })
      .filter((match) => this.matchesFilters(match))
      .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
  }

  get visibleMatches(): PortalMatch[] {
    if (this.selectedDay === 'all') {
      return this.matchesInWeekWithFilters;
    }
    return this.matchesInWeekWithFilters.filter(
      (match) => this.dateKey(new Date(match.startsAt)) === this.selectedDay
    );
  }

  get matchGroups(): MatchGroup[] {
    const groups = new Map<string, PortalMatch[]>();
    for (const match of this.visibleMatches) {
      const key = this.dateKey(new Date(match.startsAt));
      const existing = groups.get(key) ?? [];
      existing.push(match);
      groups.set(key, existing);
    }
    return Array.from(groups, ([key, matches]) => ({
      key,
      label: this.groupLabel(new Date(matches[0].startsAt)),
      matches
    }));
  }

  get pendingMatches(): PortalPendingMatch[] {
    return this.allPendingMatches.filter((match) => this.matchesFilters(match));
  }

  get filtersActive(): boolean {
    return this.selectedLeague !== 'all' || this.selectedTeam !== 'all' || this.selectedVenue !== 'all';
  }

  get isCurrentWeek(): boolean {
    return this.dateKey(this.weekStart) === this.dateKey(this.startOfWeek(new Date()));
  }

  get liveCount(): number {
    return this.visibleMatches.filter((match) => matchState(match) === 'live').length;
  }

  get upcomingCount(): number {
    return this.visibleMatches.filter((match) => matchState(match) === 'upcoming').length;
  }

  get finishedCount(): number {
    return this.visibleMatches.filter((match) => matchState(match) === 'finished').length;
  }

  changeWeek(offset: number): void {
    this.weekStart = this.addDays(this.weekStart, offset * 7);
    this.selectedDay = 'all';
    this.syncQuery();
  }

  goToCurrentWeek(): void {
    this.weekStart = this.startOfWeek(new Date());
    this.selectedDay = 'all';
    this.syncQuery();
  }

  selectDay(day: string): void {
    this.selectedDay = day;
    this.syncQuery();
  }

  filtersChanged(): void {
    this.syncQuery();
  }

  clearFilters(): void {
    this.selectedLeague = 'all';
    this.selectedTeam = 'all';
    this.selectedVenue = 'all';
    this.selectedDay = 'all';
    this.syncQuery();
  }

  isToday(date: Date): boolean {
    return this.dateKey(date) === this.dateKey(new Date());
  }

  stateOf(match: PortalMatch): MatchState {
    return matchState(match);
  }

  showsScore(match: PortalMatch): boolean {
    return hasScore(match);
  }

  statusLabel(match: PortalMatch): string {
    const state = matchState(match);
    if (state === 'live') {
      return match.period ? `Otse · ${match.period}` : 'Otse eetris';
    }
    if (state === 'finished') {
      return 'Lõppenud';
    }
    return 'Tulekul';
  }

  kickoffTime(match: PortalMatch): string {
    return new Date(match.startsAt).toLocaleTimeString('et-EE', { hour: '2-digit', minute: '2-digit' });
  }

  private applyQueryParams(params: ParamMap): void {
    const requestedDay = params.get('day');
    const requestedWeek = params.get('week');
    const dayDate = requestedDay ? this.parseDateKey(requestedDay) : null;
    const weekDate = requestedWeek ? this.parseDateKey(requestedWeek) : null;

    this.weekStart = weekDate
      ? this.startOfWeek(weekDate)
      : dayDate
        ? this.startOfWeek(dayDate)
        : this.startOfWeek(new Date());
    this.selectedDay = dayDate ? this.dateKey(dayDate) : 'all';
    this.selectedLeague = this.validOption(params.get('league'), this.leagues);
    this.selectedTeam = this.validOption(params.get('team'), this.teams);
    this.selectedVenue = this.validOption(params.get('venue'), this.venues);
  }

  private syncQuery(): void {
    const queryParams = {
      week: this.isCurrentWeek ? null : this.dateKey(this.weekStart),
      day: this.selectedDay === 'all' ? null : this.selectedDay,
      league: this.selectedLeague === 'all' ? null : this.selectedLeague,
      team: this.selectedTeam === 'all' ? null : this.selectedTeam,
      venue: this.selectedVenue === 'all' ? null : this.selectedVenue
    };
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      replaceUrl: true
    });
  }

  private matchesFilters(match: { league: string; home: string; away: string; venue?: string }): boolean {
    const leagueMatches = this.selectedLeague === 'all' || match.league === this.selectedLeague;
    const teamMatches = this.selectedTeam === 'all' || match.home === this.selectedTeam || match.away === this.selectedTeam;
    const venueMatches = this.selectedVenue === 'all' || match.venue === this.selectedVenue;
    return leagueMatches && teamMatches && venueMatches;
  }

  private groupLabel(date: Date): string {
    const label = date.toLocaleDateString('et-EE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
    return label.charAt(0).toLocaleUpperCase('et') + label.slice(1);
  }

  private startOfWeek(value: Date): Date {
    const date = new Date(value);
    date.setHours(0, 0, 0, 0);
    const daysSinceMonday = (date.getDay() + 6) % 7;
    date.setDate(date.getDate() - daysSinceMonday);
    return date;
  }

  private addDays(value: Date, days: number): Date {
    const date = new Date(value);
    date.setDate(date.getDate() + days);
    return date;
  }

  private dateKey(value: Date): string {
    const year = value.getFullYear();
    const month = `${value.getMonth() + 1}`.padStart(2, '0');
    const day = `${value.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private parseDateKey(value: string): Date | null {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return null;
    }
    const date = new Date(`${value}T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  private validOption(value: string | null, options: string[]): string {
    return value && options.includes(value) ? value : 'all';
  }

  private uniqueValues(values: string[]): string[] {
    return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'et'));
  }
}
