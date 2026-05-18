import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  searchTerm = '';

  constructor(private readonly router: Router) {}

  searchPlayer(): void {
    const query = this.searchTerm.trim();

    if (!query) {
      return;
    }

    void this.router.navigate(['/player'], {
      queryParams: { q: query }
    });
  }
}
