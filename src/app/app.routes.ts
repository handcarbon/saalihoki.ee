import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home.component';
import { LeagueComponent } from './pages/league.component';
import { MatchComponent } from './pages/match.component';
import { PlayerComponent } from './pages/player.component';
import { TeamComponent } from './pages/team.component';

export const routes: Routes = [
  { path: '', title: 'Avaleht · Saalihoki.ee', component: HomeComponent },
  { path: 'league', title: 'M35+ Meistrivõistlused · Saalihoki.ee', component: LeagueComponent },
  { path: 'match', title: 'Lauka Kolhoos vs Drinkgeld · Saalihoki.ee', component: MatchComponent },
  { path: 'player', title: 'John Smith · Saalihoki.ee', component: PlayerComponent },
  { path: 'team', title: 'Sparta Team Automaailm · Saalihoki.ee', component: TeamComponent },
  { path: '**', redirectTo: '' }
];
