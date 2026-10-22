import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { PORTAL_PLAYERS, PORTAL_PLAYER_SEASON, PortalPlayer, playerInitials } from '../portal-data';

type PlayerSort = 'points' | 'goals' | 'assists' | 'games' | 'name';

interface PlayerLeader {
  label: string;
  player: PortalPlayer;
  value: number;
  suffix: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  readonly season = PORTAL_PLAYER_SEASON;
  readonly totalPlayers = PORTAL_PLAYERS.length;
  readonly activePlayers = PORTAL_PLAYERS.filter((player) => player.games > 0).length;
  readonly teamCount = new Set(PORTAL_PLAYERS.map((player) => player.team)).size;
  readonly totalGoals = PORTAL_PLAYERS.reduce((sum, player) => sum + player.goals, 0);
  readonly teams = [...new Set(PORTAL_PLAYERS.map((player) => player.team))]
    .sort((a, b) => a.localeCompare(b, 'et'));
  readonly positions = [...new Set(PORTAL_PLAYERS.map((player) => player.position))]
    .sort((a, b) => a.localeCompare(b, 'et'));
  readonly leaders: PlayerLeader[] = this.buildLeaders();

  query = '';
  selectedTeam = 'all';
  selectedPosition = 'all';
  selectedSort: PlayerSort = 'points';
  results: PortalPlayer[] = [];
  visibleCount = 20;

  private readonly subscription = new Subscription();
  private readonly validSorts: PlayerSort[] = ['points', 'goals', 'assists', 'games', 'name'];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('q')?.trim() ?? '';
      this.selectedTeam = this.readFilter(params.get('team'), this.teams);
      this.selectedPosition = this.readFilter(params.get('position'), this.positions);

      const sort = params.get('sort') as PlayerSort | null;
      this.selectedSort = sort && this.validSorts.includes(sort) ? sort : 'points';

      this.applyFilters();
      this.title.setTitle(this.query
        ? `${this.query} · Mängijate andmebaas · Saalihoki.ee`
        : 'Mängijate andmebaas · Saalihoki.ee');
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  submitSearch(): void {
    this.updateUrl();
  }

  updateFilters(): void {
    this.updateUrl();
  }

  resetFilters(): void {
    this.query = '';
    this.selectedTeam = 'all';
    this.selectedPosition = 'all';
    this.selectedSort = 'points';
    this.updateUrl();
  }

  get hasFilters(): boolean {
    return Boolean(
      this.query ||
      this.selectedTeam !== 'all' ||
      this.selectedPosition !== 'all' ||
      this.selectedSort !== 'points'
    );
  }

  get visibleResults(): PortalPlayer[] {
    return this.results.slice(0, this.visibleCount);
  }

  get hasMoreResults(): boolean {
    return this.visibleCount < this.results.length;
  }

  loadMore(): void {
    this.visibleCount += 20;
  }

  get resultHeading(): string {
    if (this.query) {
      return `Tulemused otsingule „${this.query}”`;
    }

    if (this.selectedTeam !== 'all' || this.selectedPosition !== 'all') {
      return 'Filtreeritud mängijad';
    }

    return 'Kõik mängijad';
  }

  points(player: PortalPlayer): number {
    return player.goals + player.assists;
  }

  initials(name: string): string {
    return playerInitials(name);
  }

  trackPlayer(_index: number, player: PortalPlayer): string {
    return `${player.name}-${player.team}-${player.league}`;
  }

  private applyFilters(): void {
    const normalized = this.query.toLocaleLowerCase('et');
    const filtered = PORTAL_PLAYERS.filter((player) => {
      const matchesQuery = !normalized || `${player.name} ${player.team} ${player.position} ${player.league}`
        .toLocaleLowerCase('et')
        .includes(normalized);
      const matchesTeam = this.selectedTeam === 'all' || player.team === this.selectedTeam;
      const matchesPosition = this.selectedPosition === 'all' || player.position === this.selectedPosition;
      return matchesQuery && matchesTeam && matchesPosition;
    });

    this.results = this.sortPlayers(filtered, this.selectedSort);
    this.visibleCount = 20;
  }

  private sortPlayers(players: PortalPlayer[], sort: PlayerSort): PortalPlayer[] {
    return [...players].sort((a, b) => {
      if (sort === 'name') {
        return a.name.localeCompare(b.name, 'et');
      }

      const values: Record<Exclude<PlayerSort, 'name'>, (player: PortalPlayer) => number> = {
        points: (player) => this.points(player),
        goals: (player) => player.goals,
        assists: (player) => player.assists,
        games: (player) => player.games
      };

      const difference = values[sort](b) - values[sort](a);
      return difference || a.name.localeCompare(b.name, 'et');
    });
  }

  private updateUrl(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: this.query.trim() || null,
        team: this.selectedTeam === 'all' ? null : this.selectedTeam,
        position: this.selectedPosition === 'all' ? null : this.selectedPosition,
        sort: this.selectedSort === 'points' ? null : this.selectedSort
      },
      replaceUrl: true
    });
  }

  private readFilter(value: string | null, options: string[]): string {
    return value && options.includes(value) ? value : 'all';
  }

  private buildLeaders(): PlayerLeader[] {
    const pointsLeader = this.sortPlayers(PORTAL_PLAYERS, 'points')[0];
    const goalsLeader = this.sortPlayers(PORTAL_PLAYERS, 'goals')[0];
    const assistsLeader = this.sortPlayers(PORTAL_PLAYERS, 'assists')[0];

    return [
      { label: 'Punktid', player: pointsLeader, value: this.points(pointsLeader), suffix: 'P' },
      { label: 'Väravad', player: goalsLeader, value: goalsLeader.goals, suffix: 'V' },
      { label: 'Söödud', player: assistsLeader, value: assistsLeader.assists, suffix: 'S' }
    ];
  }
}
