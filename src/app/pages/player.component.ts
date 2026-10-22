import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { findPlayer, playerInitials, PORTAL_MATCHES, PORTAL_PLAYERS, PortalMatch, PortalPlayer } from '../portal-data';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit, OnDestroy {
  player: PortalPlayer = findPlayer('Siim Romanov');
  initials = playerInitials(this.player.name);
  isKnownPlayer = true;
  recentMatches: PortalMatch[] = [];
  private readonly subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      const requestedName = params.get('name') ?? params.get('q');
      this.player = findPlayer(requestedName);
      this.isKnownPlayer = requestedName
        ? PORTAL_PLAYERS.some((player) => player.name.toLocaleLowerCase('et-EE') === requestedName.toLocaleLowerCase('et-EE'))
        : true;
      this.initials = playerInitials(this.player.name);
      this.recentMatches = PORTAL_MATCHES
        .filter((match) => match.home === this.player.team || match.away === this.player.team)
        .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime())
        .slice(0, 5);
      this.title.setTitle(`${this.player.name} · Saalihoki.ee`);
    }));
  }

  get points(): number {
    return this.player.goals + this.player.assists;
  }

  get pointsPerGame(): string {
    return this.player.games ? (this.points / this.player.games).toFixed(2) : '0.00';
  }

  formattedDate(value: string): string {
    return new Date(value).toLocaleDateString('et-EE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
