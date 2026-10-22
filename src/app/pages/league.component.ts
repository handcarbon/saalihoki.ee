import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { PORTAL_DATA_NOTICE, PORTAL_MATCHES, PORTAL_SEASON, PORTAL_STANDINGS, PortalMatch } from '../portal-data';

type LeagueTab = 'standings' | 'results' | 'scorers' | 'goalies' | 'playoff';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './league.component.html'
})
export class LeagueComponent implements OnInit, OnDestroy {
  activeTab: LeagueTab = 'standings';
  readonly tabs: LeagueTab[] = ['standings', 'results', 'scorers', 'goalies', 'playoff'];
  readonly season = PORTAL_SEASON;
  readonly dataNotice = PORTAL_DATA_NOTICE;
  readonly standings = PORTAL_STANDINGS.find((table) => table.id === 'm35')!;
  readonly latestResult = PORTAL_MATCHES
    .filter((match) => match.competitionId === 'm35' && match.status === 'finished')
    .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime())[0];
  private readonly subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      const requested = params.get('view') as LeagueTab | null;
      this.activeTab = requested && this.tabs.includes(requested) ? requested : 'standings';
    }));
  }

  setTab(tab: LeagueTab): void {
    this.activeTab = tab;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { view: tab === 'standings' ? null : tab },
      queryParamsHandling: 'merge'
    });
  }

  handleTabKeydown(event: KeyboardEvent, current: LeagueTab): void {
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

  matchTime(match: PortalMatch): string {
    return new Date(match.startsAt).toLocaleTimeString('et-EE', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  matchDay(match: PortalMatch): string {
    const kickoff = new Date(match.startsAt);
    const today = new Date();
    if (kickoff.toDateString() === today.toDateString()) {
      return 'Täna';
    }
    const label = kickoff.toLocaleDateString('et-EE', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    }).replaceAll('.', '');
    return label.charAt(0).toLocaleUpperCase('et') + label.slice(1);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
