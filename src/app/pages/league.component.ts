import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

type LeagueTab = 'standings' | 'results' | 'scorers' | 'goalies' | 'playoff';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './league.component.html'
})
export class LeagueComponent implements OnInit, OnDestroy {
  activeTab: LeagueTab = 'standings';
  readonly tabs: LeagueTab[] = ['standings', 'results', 'scorers', 'goalies', 'playoff'];
  private readonly subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.route.queryParamMap.subscribe((params) => {
      const requested = params.get('view') as LeagueTab | null;
      this.activeTab = requested && this.tabs.includes(requested) ? requested : 'standings';
    }));
  }

  setTab(tab: LeagueTab): void {
    this.activeTab = tab;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { view: tab === 'standings' ? null : tab },
      queryParamsHandling: 'merge'
    });
  }

  handleTabKeydown(event: KeyboardEvent, current: LeagueTab): void {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const currentIndex = this.tabs.indexOf(current);
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? this.tabs.length - 1
        : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + this.tabs.length) % this.tabs.length;
    this.setTab(this.tabs[nextIndex]);
    const buttons = (event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLElement>('[role="tab"]');
    buttons?.[nextIndex]?.focus();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
