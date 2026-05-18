import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { PORTAL_PLAYERS, PortalPlayer, playerInitials } from '../portal-data';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
  query = '';
  results: PortalPlayer[] = [];
  private readonly subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('q')?.trim() ?? '';
      const normalized = this.query.toLocaleLowerCase('et');
      this.results = normalized
        ? PORTAL_PLAYERS.filter((player) =>
            `${player.name} ${player.team}`.toLocaleLowerCase('et').includes(normalized)
          )
        : [];
      this.title.setTitle(this.query ? `Otsing: ${this.query} · Saalihoki.ee` : 'Mängija otsing · Saalihoki.ee');
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initials(name: string): string {
    return playerInitials(name);
  }
}
