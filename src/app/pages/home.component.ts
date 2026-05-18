import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PORTAL_MEMBERSHIPS, PORTAL_PARTNERS } from '../portal-data';

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

  private readonly featuredMatchDate = new Date('2026-09-06T13:00:00+03:00');

  get featuredMatchStatus(): string {
    const now = Date.now();
    const start = this.featuredMatchDate.getTime();
    const end = start + 2 * 60 * 60 * 1000;
    if (now < start) {
      return 'Järgmine otseülekanne';
    }
    if (now <= end) {
      return 'Otse eetris';
    }
    return 'Mäng on lõppenud';
  }

  get featuredMatchDateLabel(): string {
    return `${this.featuredMatchDate.toLocaleDateString('et-EE')} kell ${this.featuredMatchDate.toLocaleTimeString('et-EE', { hour: '2-digit', minute: '2-digit' })}`;
  }

  get featuredMatchLink(): string {
    return Date.now() > this.featuredMatchDate.getTime() + 2 * 60 * 60 * 1000 ? '/match' : '/schedule';
  }

  get featuredMatchCta(): string {
    return Date.now() > this.featuredMatchDate.getTime() + 2 * 60 * 60 * 1000 ? 'Vaata protokolli' : 'Vaata mänguinfot';
  }
}
