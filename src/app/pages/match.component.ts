import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { findMatch, findTeam, PORTAL_DATA_NOTICE, PortalMatch, PortalTeam } from '../portal-data';

@Component({
  selector: 'app-match',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './match.component.html'
})
export class MatchComponent implements OnInit, OnDestroy {
  match: PortalMatch = findMatch(null);
  homeTeam: PortalTeam = findTeam(this.match.home);
  awayTeam: PortalTeam = findTeam(this.match.away);
  readonly dataNotice = PORTAL_DATA_NOTICE;
  private readonly subscription = new Subscription();

  constructor(private readonly route: ActivatedRoute, private readonly title: Title) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      this.match = findMatch(params.get('id'));
      this.homeTeam = findTeam(this.match.home);
      this.awayTeam = findTeam(this.match.away);
      this.title.setTitle(`${this.match.home} – ${this.match.away} · Saalihoki.ee`);
    }));
  }

  formattedDate(value: string): string {
    return new Date(value).toLocaleDateString('et-EE', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  formattedTime(value: string): string {
    return new Date(value).toLocaleTimeString('et-EE', { hour: '2-digit', minute: '2-digit' });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
