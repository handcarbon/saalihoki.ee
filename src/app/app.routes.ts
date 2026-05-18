import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { LeagueComponent } from './pages/league.component';
import { MatchComponent } from './pages/match.component';
import { PlayerComponent } from './pages/player.component';
import { TeamComponent } from './pages/team.component';
import { SearchComponent } from './pages/search.component';
import { SectionComponent } from './pages/section.component';

export const routes: Routes = [
  { path: '', title: 'Avaleht · Saalihoki.ee', component: HomeComponent },
  { path: 'news', title: 'Uudised · Saalihoki.ee', component: SectionComponent, data: { section: 'news' } },
  { path: 'schedule', title: 'Ajakavad ja tulemused · Saalihoki.ee', component: SectionComponent, data: { section: 'schedule' } },
  { path: 'national-team', title: 'Koondis · Saalihoki.ee', component: SectionComponent, data: { section: 'national' } },
  { path: 'association', title: 'Liit · Saalihoki.ee', component: SectionComponent, data: { section: 'association' } },
  { path: 'gallery', title: 'Galerii · Saalihoki.ee', component: SectionComponent, data: { section: 'gallery' } },
  { path: 'training', title: 'Koolitused · Saalihoki.ee', component: SectionComponent, data: { section: 'training' } },
  { path: 'partners', title: 'Partnerid · Saalihoki.ee', component: SectionComponent, data: { section: 'partners' } },
  { path: 'search', title: 'Mängija otsing · Saalihoki.ee', component: SearchComponent },
  { path: 'league', title: 'M35+ Meistrivõistlused · Saalihoki.ee', component: LeagueComponent },
  { path: 'match', title: 'Lauka Kolhoos vs Drinkgeld · Saalihoki.ee', component: MatchComponent },
  { path: 'player', title: 'John Smith · Saalihoki.ee', component: PlayerComponent },
  { path: 'team', title: 'Sparta Team Automaailm · Saalihoki.ee', component: TeamComponent },
  { path: '**', redirectTo: '' }
];
