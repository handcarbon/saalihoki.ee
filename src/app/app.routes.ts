import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', title: 'Avaleht · Saalihoki.ee',
    data: { description: 'Eesti saalihoki uudised, tulemused, liigad ja mängijate statistika.' },
    loadComponent: () => import('./pages/home.component').then((module) => module.HomeComponent)
  },
  {
    path: 'news', title: 'Uudised · Saalihoki.ee',
    data: { section: 'news', description: 'Eesti saalihoki uudised, teated ja võistluslood.' },
    loadComponent: () => import('./pages/section.component').then((module) => module.SectionComponent)
  },
  {
    path: 'news/:id', title: 'Uudis · Saalihoki.ee',
    data: { description: 'Eesti Saalihoki Liidu uudis.' },
    loadComponent: () => import('./pages/news-detail.component').then((module) => module.NewsDetailComponent)
  },
  {
    path: 'schedule', title: 'Tulemuskeskus · Saalihoki.ee',
    data: { description: 'Saalihoki ajakavad, tulemused, saalid ja mänguprotokollid.' },
    loadComponent: () => import('./pages/schedule.component').then((module) => module.ScheduleComponent)
  },
  {
    path: 'national-team', title: 'Koondis · Saalihoki.ee',
    data: { section: 'national', description: 'Eesti saalihokikoondiste info ja kalender.' },
    loadComponent: () => import('./pages/section.component').then((module) => module.SectionComponent)
  },
  {
    path: 'association', title: 'Liit · Saalihoki.ee',
    data: { section: 'association', description: 'Eesti Saalihoki Liidu kontaktid, juhtimine, liikmed ja dokumendid.' },
    loadComponent: () => import('./pages/section.component').then((module) => module.SectionComponent)
  },
  {
    path: 'gallery', title: 'Galerii · Saalihoki.ee',
    data: { section: 'gallery', description: 'Eesti saalihoki fotogaleriid.' },
    loadComponent: () => import('./pages/section.component').then((module) => module.SectionComponent)
  },
  {
    path: 'training', title: 'Koolitused · Saalihoki.ee',
    data: { section: 'training', description: 'Treenerite, kohtunike ja korraldajate koolitused.' },
    loadComponent: () => import('./pages/section.component').then((module) => module.SectionComponent)
  },
  {
    path: 'partners', title: 'Partnerid · Saalihoki.ee',
    data: { section: 'partners', description: 'Eesti Saalihoki Liidu koostööpartnerid.' },
    loadComponent: () => import('./pages/section.component').then((module) => module.SectionComponent)
  },
  {
    path: 'search', title: 'Mängijate andmebaas · Saalihoki.ee',
    data: { description: 'Otsi Eesti saalihoki mängijaid ja võrdle statistikat.' },
    loadComponent: () => import('./pages/search.component').then((module) => module.SearchComponent)
  },
  {
    path: 'league', title: 'Liigad · Saalihoki.ee',
    data: { description: 'Eesti saalihoki võistlused, liigad ja vanuseklassid.' },
    loadComponent: () => import('./pages/competitions.component').then((module) => module.CompetitionsComponent)
  },
  {
    path: 'league/m35', title: 'M35+ meistrivõistlused · Saalihoki.ee',
    data: { description: 'M35+ meistrivõistluste tabel, tulemused ja statistika.' },
    loadComponent: () => import('./pages/league.component').then((module) => module.LeagueComponent)
  },
  {
    path: 'match', title: 'Mänguprotokoll · Saalihoki.ee',
    data: { description: 'Saalihoki mängu tulemus, sündmused ja koosseisud.' },
    loadComponent: () => import('./pages/match.component').then((module) => module.MatchComponent)
  },
  {
    path: 'player', title: 'Mängija profiil · Saalihoki.ee',
    data: { description: 'Saalihokimängija profiil ja hooaja statistika.' },
    loadComponent: () => import('./pages/player.component').then((module) => module.PlayerComponent)
  },
  {
    path: 'team', title: 'Meeskonna profiil · Saalihoki.ee',
    data: { description: 'Saalihokimeeskonna koosseis, vorm ja mängud.' },
    loadComponent: () => import('./pages/team.component').then((module) => module.TeamComponent)
  },
  { path: '**', redirectTo: '' }
];
