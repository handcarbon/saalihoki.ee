import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  MatchState,
  PORTAL_MATCHES,
  PORTAL_MEMBERSHIPS,
  PORTAL_NEWS,
  PORTAL_PARTNERS,
  PORTAL_STANDINGS,
  PortalMatch,
  PortalNewsItem,
  PortalStandingsTable,
  hasScore,
  matchState
} from '../portal-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly featuredPartners = PORTAL_PARTNERS.filter((partner) => partner.tier === 'Peapartner');
  readonly officialPartners = PORTAL_PARTNERS.filter((partner) => partner.tier === 'Ametlik partner');
  readonly memberships = PORTAL_MEMBERSHIPS;

  /** Selected league in the standings snapshot. */
  standingsTableId = PORTAL_STANDINGS[0].id;

  readonly standingsTables = PORTAL_STANDINGS;

  /* ── Match strip ───────────────────────────────────────────
     Live first, then upcoming by soonest, then recent results.
     Everything derives from startsAt, so nothing can go stale. */

  private readonly byKickoff = (a: PortalMatch, b: PortalMatch) =>
    new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime();

  get liveMatches(): PortalMatch[] {
    return PORTAL_MATCHES.filter((m) => matchState(m) === 'live').sort(this.byKickoff);
  }

  get upcomingMatches(): PortalMatch[] {
    return PORTAL_MATCHES.filter((m) => matchState(m) === 'upcoming').sort(this.byKickoff);
  }

  get finishedMatches(): PortalMatch[] {
    return PORTAL_MATCHES.filter((m) => matchState(m) === 'finished')
      .sort(this.byKickoff)
      .reverse();
  }

  /** The strip: live, then the next four fixtures, then recent results. */
  get matchStrip(): PortalMatch[] {
    return [
      ...this.liveMatches,
      ...this.upcomingMatches.slice(0, 4),
      ...this.finishedMatches.slice(0, 3)
    ];
  }

  get nextFixtures(): PortalMatch[] {
    return this.upcomingMatches.slice(0, 4);
  }

  get latestResults(): PortalMatch[] {
    return this.finishedMatches.slice(0, 4);
  }

  stateOf(match: PortalMatch): MatchState {
    return matchState(match);
  }

  showsScore(match: PortalMatch): boolean {
    return hasScore(match);
  }

  /** "Otse · 3. periood", "Täna 18:30", "Reede 12.09", "Lõppenud". */
  statusLabel(match: PortalMatch): string {
    const state = matchState(match);
    if (state === 'live') {
      return match.period ? `Otse · ${match.period}` : 'Otse eetris';
    }
    if (state === 'finished') {
      return 'Lõppenud';
    }
    const start = new Date(match.startsAt);
    const time = start.toLocaleTimeString('et-EE', { hour: '2-digit', minute: '2-digit' });
    if (this.isToday(start)) {
      return `Täna ${time}`;
    }
    if (this.isTomorrow(start)) {
      return `Homme ${time}`;
    }
    return `${start.toLocaleDateString('et-EE', { day: '2-digit', month: '2-digit' })} ${time}`;
  }

  kickoffTime(match: PortalMatch): string {
    return new Date(match.startsAt).toLocaleTimeString('et-EE', { hour: '2-digit', minute: '2-digit' });
  }

  kickoffDay(match: PortalMatch): string {
    return new Date(match.startsAt).toLocaleDateString('et-EE', { day: '2-digit', month: '2-digit' });
  }

  dayNumber(value: string): string {
    return new Date(value).toLocaleDateString('et-EE', { day: '2-digit' });
  }

  monthShort(value: string): string {
    return new Date(value)
      .toLocaleDateString('et-EE', { month: 'short' })
      .replace('.', '')
      .toUpperCase();
  }

  fullDate(value: string): string {
    return new Date(value).toLocaleDateString('et-EE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  /** ISO date for the <time datetime> attribute. */
  isoDate(value: string): string {
    return new Date(value).toISOString();
  }

  private isToday(date: Date): boolean {
    const now = new Date();
    return date.toDateString() === now.toDateString();
  }

  private isTomorrow(date: Date): boolean {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    return date.toDateString() === t.toDateString();
  }

  /* ── Featured story + news ─────────────────────────────── */

  get featuredStory(): PortalNewsItem {
    return PORTAL_NEWS[0];
  }

  get secondaryNews(): PortalNewsItem[] {
    return PORTAL_NEWS.slice(1, 5);
  }

  /* ── Standings snapshot ────────────────────────────────── */

  get activeStandings(): PortalStandingsTable {
    return this.standingsTables.find((t) => t.id === this.standingsTableId) ?? this.standingsTables[0];
  }

  selectStandings(id: string): void {
    this.standingsTableId = id;
  }

  goalDiff(row: { goalsFor: number; goalsAgainst: number }): string {
    const diff = row.goalsFor - row.goalsAgainst;
    return diff > 0 ? `+${diff}` : `${diff}`;
  }
}
