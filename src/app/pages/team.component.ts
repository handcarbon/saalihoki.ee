import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

type TeamTab = 'roster' | 'info' | 'history';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './team.component.html'
})
export class TeamComponent {
  activeTab: TeamTab = 'roster';
  selectedSeason = 'Meeste MV 2025 / 2026';

  setTab(tab: TeamTab): void {
    this.activeTab = tab;
  }
}
