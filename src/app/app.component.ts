import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';

import { PORTAL_MEMBERSHIPS, PORTAL_PLAYERS, PortalPlayer } from './portal-data';

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

  /** Index of the highlighted suggestion; -1 means none. */
  activeIndex = -1;

  readonly memberships = PORTAL_MEMBERSHIPS;
  readonly currentYear = new Date().getFullYear();

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

  /** Points assistive tech at the highlighted option. */
  get activeOptionId(): string | null {
    return this.showSuggestions && this.activeIndex >= 0
      ? `player-option-${this.activeIndex}`
      : null;
  }

  /**
   * Full keyboard support for the combobox. Without this the listbox roles
   * announce a widget that cannot actually be operated.
   */
  onSearchKeydown(event: KeyboardEvent): void {
    const count = this.suggestions.length;

    switch (event.key) {
      case 'ArrowDown':
        if (!count) return;
        event.preventDefault();
        this.activeIndex = (this.activeIndex + 1) % count;
        break;

      case 'ArrowUp':
        if (!count) return;
        event.preventDefault();
        this.activeIndex = this.activeIndex <= 0 ? count - 1 : this.activeIndex - 1;
        break;

      case 'Home':
        if (!count) return;
        event.preventDefault();
        this.activeIndex = 0;
        break;

      case 'End':
        if (!count) return;
        event.preventDefault();
        this.activeIndex = count - 1;
        break;

      case 'Enter':
        // Let the form submit when nothing is highlighted.
        if (this.activeIndex >= 0 && this.suggestions[this.activeIndex]) {
          event.preventDefault();
          this.selectPlayer(this.suggestions[this.activeIndex]);
        }
        break;

      case 'Escape':
        if (this.showSuggestions) {
          event.stopPropagation();
          this.searchFocused = false;
          this.activeIndex = -1;
        }
        break;

      case 'Tab':
        this.searchFocused = false;
        this.activeIndex = -1;
        break;

      default:
        // Any other key edits the query, so the old highlight is stale.
        this.activeIndex = -1;
    }
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

    void this.router.navigate(['/search'], { queryParams: { q: query } });
    this.searchFocused = false;
    this.activeIndex = -1;
  }

  selectPlayer(player: PortalPlayer): void {
    this.searchTerm = player.name;
    this.searchFocused = false;
    this.activeIndex = -1;
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
    this.activeIndex = -1;
  }

  /**
   * Closes the suggestion list on a genuine focus loss. Replaces a 120ms
   * setTimeout that raced with clicks on the suggestions themselves.
   */
  @HostListener('focusout', ['$event'])
  handleFocusOut(event: FocusEvent): void {
    const form = (event.currentTarget as HTMLElement | null)?.querySelector('.sh-search');
    const next = event.relatedTarget as Node | null;
    if (form && next && form.contains(next)) {
      return;
    }
    if (form && !next) {
      // Focus left the document entirely (e.g. window blur); keep state.
      return;
    }
    this.searchFocused = false;
    this.activeIndex = -1;
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeMobilePanels();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
