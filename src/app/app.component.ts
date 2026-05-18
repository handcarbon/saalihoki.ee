import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';

import { PORTAL_PLAYERS, PortalPlayer } from './portal-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  searchTerm = '';
  searchFocused = false;
  mobileMenuOpen = false;
  mobileSearchOpen = false;
  private readonly subscription = new Subscription();

  constructor(private readonly router: Router) {
    this.subscription.add(this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => this.closeMobilePanels()));
  }

  get suggestions(): PortalPlayer[] {
    const normalized = this.searchTerm.trim().toLocaleLowerCase('et');
    if (!normalized) {
      return [];
    }
    return PORTAL_PLAYERS
      .filter((player) => `${player.name} ${player.team}`.toLocaleLowerCase('et').includes(normalized))
      .slice(0, 5);
  }

  get showSuggestions(): boolean {
    return this.searchFocused && this.searchTerm.trim().length > 0;
  }

  searchPlayer(): void {
    const query = this.searchTerm.trim();

    if (!query) {
      return;
    }

    const exactMatch = PORTAL_PLAYERS.find(
      (player) => player.name.toLocaleLowerCase('et') === query.toLocaleLowerCase('et')
    );

    if (exactMatch) {
      this.selectPlayer(exactMatch);
      return;
    }

    void this.router.navigate(['/search'], {
      queryParams: { q: query }
    });
    this.searchFocused = false;
  }

  selectPlayer(player: PortalPlayer): void {
    this.searchTerm = player.name;
    this.searchFocused = false;
    void this.router.navigate(['/player'], { queryParams: { name: player.name } });
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.mobileSearchOpen = false;
  }

  toggleMobileSearch(): void {
    this.mobileSearchOpen = !this.mobileSearchOpen;
    this.mobileMenuOpen = false;
  }

  closeMobilePanels(): void {
    this.mobileMenuOpen = false;
    this.mobileSearchOpen = false;
    this.searchFocused = false;
  }

  deferSearchBlur(): void {
    window.setTimeout(() => { this.searchFocused = false; }, 120);
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeMobilePanels();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
