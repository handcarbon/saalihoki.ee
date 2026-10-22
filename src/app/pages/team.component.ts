import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  findTeam,
  PORTAL_MATCHES,
  PORTAL_PLAYERS,
  PORTAL_SEASON,
  PORTAL_STANDINGS,
  PORTAL_TEAMS,
  PortalMatch,
  PortalPlayer,
  PortalStandingsRow,
  PortalTeam
} from '../portal-data';

type TeamTab = 'roster' | 'info' | 'history';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit, OnDestroy {
  activeTab: TeamTab = 'roster';
  readonly tabs: TeamTab[] = ['roster', 'info', 'history'];
  readonly season = PORTAL_SEASON;
  selectedSeason = '';
  team: PortalTeam = findTeam('Sparta Team Automaailm');
  roster: PortalPlayer[] = [];
  matches: PortalMatch[] = [];
  recentMatches: PortalMatch[] = [];
  standingsRow?: PortalStandingsRow;
  isKnownTeam = true;
  private readonly subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      const requested = params.get('view') as TeamTab | null;
      this.activeTab = requested && this.tabs.includes(requested) ? requested : 'roster';
      this.team = findTeam(params.get('name'));
      this.roster = PORTAL_PLAYERS.filter((player) => player.team === this.team.name);
      this.matches = PORTAL_MATCHES.filter((match) => match.home === this.team.name || match.away === this.team.name)
        .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime());
      this.recentMatches = this.matches.filter((match) => match.status === 'finished').slice(0, 5);
      this.standingsRow = PORTAL_STANDINGS.flatMap((table) => table.rows).find((row) => row.team === this.team.name);
      this.isKnownTeam = PORTAL_TEAMS.some((team) => team.name === this.team.name);
      this.selectedSeason = `${this.team.leagues[0] || 'Võistlus'} ${this.season}`;
      this.title.setTitle(`${this.team.name} · Saalihoki.ee`);
    }));
  }

  resultFor(match: PortalMatch): 'V' | 'Vi' | 'K' {
    const own = match.home === this.team.name ? match.homeScore : match.awayScore;
    const opponent = match.home === this.team.name ? match.awayScore : match.homeScore;
    if (own === opponent) return 'Vi';
    return (own ?? 0) > (opponent ?? 0) ? 'V' : 'K';
  }

  opponentFor(match: PortalMatch): string {
    return match.home === this.team.name ? match.away : match.home;
  }

  scoreFor(match: PortalMatch): string {
    return `${match.homeScore ?? '–'}:${match.awayScore ?? '–'}`;
  }

  formattedDate(value: string): string {
    return new Date(value).toLocaleDateString('et-EE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  setTab(tab: TeamTab): void {
    this.activeTab = tab;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { view: tab === 'roster' ? null : tab },
      queryParamsHandling: 'merge'
    });
  }

  handleTabKeydown(event: KeyboardEvent, current: TeamTab): void {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const currentIndex = this.tabs.indexOf(current);
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? this.tabs.length - 1
        : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + this.tabs.length) % this.tabs.length;
    this.setTab(this.tabs[nextIndex]);
    const buttons = (event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLElement>('[role="tab"]');
    buttons?.[nextIndex]?.focus();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
