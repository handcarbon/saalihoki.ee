import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { findPlayer, playerInitials, PortalPlayer } from '../portal-data';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './player.component.html'
})
export class PlayerComponent implements OnInit, OnDestroy {
  player: PortalPlayer = findPlayer('Siim Romanov');
  initials = playerInitials(this.player.name);
  private readonly subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly title: Title
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      this.player = findPlayer(params.get('name') ?? params.get('q'));
      this.initials = playerInitials(this.player.name);
      this.title.setTitle(`${this.player.name} · Saalihoki.ee`);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
