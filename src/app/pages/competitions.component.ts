import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PORTAL_COMPETITIONS, PORTAL_SEASON, PortalCompetition } from '../portal-data';

@Component({
  selector: 'app-competitions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './competitions.component.html'
})
export class CompetitionsComponent {
  readonly season = PORTAL_SEASON;
  readonly groups: PortalCompetition['group'][] = ['Täiskasvanud', 'Naised', 'Noored', 'Veteranid'];
  readonly competitions = PORTAL_COMPETITIONS;

  competitionsFor(group: PortalCompetition['group']): PortalCompetition[] {
    return this.competitions.filter((competition) => competition.group === group);
  }
}
