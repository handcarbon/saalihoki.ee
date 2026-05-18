import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { findTeam, PORTAL_PLAYERS, PortalPlayer, PortalTeam } from '../portal-data';

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
  selectedSeason = 'Meeste MV 2025 / 2026';
  team: PortalTeam = findTeam('Sparta Team Automaailm');
  roster: PortalPlayer[] = [];
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
      this.selectedSeason = `${this.team.leagues[0]} 2025 / 2026`;
      this.title.setTitle(`${this.team.name} · Saalihoki.ee`);
    }));
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
