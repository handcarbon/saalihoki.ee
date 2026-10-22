import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  MatchState,
  PORTAL_DATA_NOTICE,
  PORTAL_MATCHES,
  PORTAL_PENDING_MATCHES,
  PORTAL_SEASON,
  PortalMatch,
  PortalPendingMatch,
  hasScore,
  matchState
} from '../portal-data';

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
  readonly season = PORTAL_SEASON;
  readonly dataNotice = PORTAL_DATA_NOTICE;
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

  readonly latestDataDate = new Date(Math.max(...PORTAL_MATCHES.map((match) => new Date(match.startsAt).getTime())));
  currentMonth = this.startOfMonth(this.latestDataDate);
  selectedLeague = 'all';
  selectedTeam = 'all';

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

  get monthLabel(): string {
    const label = this.currentMonth.toLocaleDateString('et-EE', { month: 'long', year: 'numeric' });
    return label.charAt(0).toLocaleUpperCase('et') + label.slice(1);
  }

  get visibleMatches(): PortalMatch[] {
    const start = this.currentMonth.getTime();
    const end = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1).getTime();
    return this.allMatches
      .filter((match) => {
        const kickoff = new Date(match.startsAt).getTime();
        return kickoff >= start && kickoff < end;
      })
      .filter((match) => this.matchesFilters(match))
      .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime());
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
    return this.selectedLeague !== 'all' || this.selectedTeam !== 'all';
  }

  get isLatestMonth(): boolean {
    return this.monthKey(this.currentMonth) === this.monthKey(this.latestDataDate);
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

  changeMonth(offset: number): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + offset, 1);
    this.syncQuery();
  }

  goToLatestMonth(): void {
    this.currentMonth = this.startOfMonth(this.latestDataDate);
    this.syncQuery();
  }

  filtersChanged(): void {
    this.syncQuery();
  }

  clearFilters(): void {
    this.selectedLeague = 'all';
    this.selectedTeam = 'all';
    this.syncQuery();
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

  competitionRoute(match: PortalMatch): string {
    return match.competitionId === 'm35' ? '/league/m35' : '/league';
  }

  private applyQueryParams(params: ParamMap): void {
    const requestedDay = params.get('day');
    const requestedWeek = params.get('week');
    const requestedMonth = params.get('month');
    const dayDate = requestedDay ? this.parseDateKey(requestedDay) : null;
    const weekDate = requestedWeek ? this.parseDateKey(requestedWeek) : null;
    const monthDate = requestedMonth ? this.parseMonthKey(requestedMonth) : null;

    this.currentMonth = this.startOfMonth(monthDate ?? dayDate ?? weekDate ?? this.latestDataDate);
    this.selectedLeague = this.validOption(params.get('league'), this.leagues);
    this.selectedTeam = this.validOption(params.get('team'), this.teams);
  }

  private syncQuery(): void {
    const queryParams = {
      month: this.isLatestMonth ? null : this.monthKey(this.currentMonth),
      view: null,
      week: null,
      day: null,
      league: this.selectedLeague === 'all' ? null : this.selectedLeague,
      team: this.selectedTeam === 'all' ? null : this.selectedTeam,
      venue: null
    };
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      replaceUrl: true
    });
  }

  private matchesFilters(match: { league: string; home: string; away: string }): boolean {
    const leagueMatches = this.selectedLeague === 'all' || match.league === this.selectedLeague;
    const teamMatches = this.selectedTeam === 'all' || match.home === this.selectedTeam || match.away === this.selectedTeam;
    return leagueMatches && teamMatches;
  }

  private groupLabel(date: Date): string {
    const label = date.toLocaleDateString('et-EE', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
    return label.charAt(0).toLocaleUpperCase('et') + label.slice(1);
  }

  private startOfMonth(value: Date): Date {
    return new Date(value.getFullYear(), value.getMonth(), 1);
  }

  private dateKey(value: Date): string {
    const year = value.getFullYear();
    const month = `${value.getMonth() + 1}`.padStart(2, '0');
    const day = `${value.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private monthKey(value: Date): string {
    const month = `${value.getMonth() + 1}`.padStart(2, '0');
    return `${value.getFullYear()}-${month}`;
  }

  private parseDateKey(value: string): Date | null {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return null;
    }
    const date = new Date(`${value}T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  private parseMonthKey(value: string): Date | null {
    if (!/^\d{4}-\d{2}$/.test(value)) {
      return null;
    }
    const date = new Date(`${value}-01T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  private validOption(value: string | null, options: string[]): string {
    return value && options.includes(value) ? value : 'all';
  }

  private uniqueValues(values: string[]): string[] {
    return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'et'));
  }
}
