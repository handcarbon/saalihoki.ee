import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type LeagueTab = 'standings' | 'results' | 'scorers' | 'goalies' | 'playoff';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './league.component.html'
})
export class LeagueComponent {
  activeTab: LeagueTab = 'standings';

  setTab(tab: LeagueTab): void {
    this.activeTab = tab;
  }
}
