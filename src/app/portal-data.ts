export interface PortalPlayer {
  name: string;
  team: string;
  position: string;
  games: number;
  goals: number;
  assists: number;
}

export interface PortalTeam {
  name: string;
  short: string;
  location: string;
  leagues: string[];
  venue: string;
  venueAddress: string;
}

export interface PortalPartner {
  name: string;
  tier: 'Peapartner' | 'Ametlik partner';
  description: string;
  image: string;
  url: string;
}

export interface PortalMembership {
  name: string;
  shortName: string;
  image: string;
  url: string;
}

export const PORTAL_PARTNERS: PortalPartner[] = [
  {
    name: 'Oxdog',
    tier: 'Peapartner',
    description: 'Eesti Saalihoki Liidu ametlik varustuspartner.',
    image: '/sponsors/oxdog.png',
    url: 'https://www.oxdog.net/'
  },
  {
    name: 'Paf',
    tier: 'Peapartner',
    description: 'Eesti saalihoki pikaajaline toetaja.',
    image: '/sponsors/paf.gif',
    url: 'https://www.paf.ee/et?utm_medium=display&utm_source=saalihoki&utm_campaign=ongoing&utm_content=saalihoki_120x120'
  },
  {
    name: 'GO',
    tier: 'Ametlik partner',
    description: 'Eesti Saalihoki Liidu koostööpartner.',
    image: '/sponsors/go.jpg',
    url: 'https://www.go.ee/'
  },
  {
    name: 'Automaailm / Fat Pipe',
    tier: 'Ametlik partner',
    description: 'Saalihokivarustuse partner Eestis.',
    image: '/sponsors/automaailm-fat-pipe.png',
    url: 'https://automaailm.ee/vaba-aeg/saalihoki'
  },
  {
    name: 'Tallink Floorball',
    tier: 'Ametlik partner',
    description: 'Rahvusvaheline saalihoki koostööpartner.',
    image: '/sponsors/tallink-floorball.png',
    url: 'https://www.tallinkfloorball.ee/'
  },
  {
    name: 'iDent',
    tier: 'Ametlik partner',
    description: 'Eesti Saalihoki Liidu koostööpartner.',
    image: '/sponsors/ident.jpg',
    url: 'https://ident.ee/'
  },
  {
    name: 'Sport Television',
    tier: 'Ametlik partner',
    description: 'Saalihoki otseülekannete partner.',
    image: '/sponsors/sport-television.jpg',
    url: 'https://sport.television.ee/Upcoming/floorball'
  }
];

export const PORTAL_MEMBERSHIPS: PortalMembership[] = [
  {
    name: 'Eesti Olümpiakomitee',
    shortName: 'EOK',
    image: '/sponsors/eok.png',
    url: 'https://www.eok.ee/'
  },
  {
    name: 'International Floorball Federation',
    shortName: 'IFF',
    image: '/sponsors/iff.png',
    url: 'https://www.floorball.sport/'
  }
];

export const PORTAL_PLAYERS: PortalPlayer[] = [
  { name: 'Taavi Sau', team: 'Rapla Kepiklubi', position: 'Ründaja', games: 8, goals: 20, assists: 4 },
  { name: 'Sergei Burov', team: 'Tallinn United', position: 'Ründaja', games: 7, goals: 10, assists: 8 },
  { name: 'Tauno Sau', team: 'Rapla Kepiklubi', position: 'Ründaja', games: 8, goals: 4, assists: 12 },
  { name: 'Ilmar Niitov', team: 'Drinkgeld', position: 'Ründaja', games: 7, goals: 7, assists: 8 },
  { name: 'Tanel Soidla', team: 'SH Mehed Metsast', position: 'Ründaja', games: 6, goals: 12, assists: 2 },
  { name: 'Tiit Tammeveski', team: 'Lauka Kolhoos', position: 'Ründaja', games: 6, goals: 3, assists: 11 },
  { name: 'Siim Romanov', team: 'Lauka Kolhoos', position: 'Ründaja', games: 6, goals: 10, assists: 3 },
  { name: 'Uno Kraam', team: 'Prosura', position: 'Ründaja', games: 7, goals: 7, assists: 5 },
  { name: 'Ivan Dubkov', team: 'Tallinn United', position: 'Ründaja', games: 6, goals: 6, assists: 5 },
  { name: 'Margus Guss', team: 'Drinkgeld', position: 'Ründaja', games: 7, goals: 9, assists: 2 },
  { name: 'Raido Moor', team: 'Drinkgeld', position: 'Ründaja', games: 7, goals: 5, assists: 6 },
  { name: 'Kaspar Jõgar', team: 'Drinkgeld', position: 'Ründaja', games: 5, goals: 7, assists: 3 },
  { name: 'Karel Loik', team: 'Lauka Kolhoos', position: 'Ründaja', games: 5, goals: 5, assists: 5 },
  { name: 'Rannar Malk', team: 'Lauka Kolhoos', position: 'Kaitsja', games: 5, goals: 5, assists: 5 },
  { name: 'Aleksandr Ponomarjov', team: 'Tallinn United', position: 'Ründaja', games: 7, goals: 7, assists: 3 },
  { name: 'Alo Mäesalu', team: 'Lauka Kolhoos', position: 'Kaitsja', games: 8, goals: 5, assists: 5 },
  { name: 'Andres Aamisepp', team: 'SH Mehed Metsast', position: 'Ründaja', games: 3, goals: 4, assists: 5 },
  { name: 'Toomas Peterson', team: 'Drinkgeld', position: 'Kaitsja', games: 6, goals: 3, assists: 6 },
  { name: 'Künter Põldmaa', team: 'Tabajad', position: 'Ründaja', games: 7, goals: 7, assists: 2 },
  { name: 'Jaanus Läätsim', team: 'Rapla Kepiklubi', position: 'Kaitsja', games: 8, goals: 6, assists: 3 },
  { name: 'Ivo Lepik', team: 'Drinkgeld', position: 'Väravavaht', games: 1, goals: 0, assists: 0 },
  { name: 'Erki Kärblane', team: 'Lauka Kolhoos', position: 'Väravavaht', games: 1, goals: 0, assists: 0 },
  { name: 'Kaupo Kaur', team: 'Lauka Kolhoos', position: 'Väravavaht', games: 1, goals: 0, assists: 0 },
  { name: 'Anre Vooremaa', team: 'Lauka Kolhoos', position: 'Mängija', games: 1, goals: 0, assists: 1 },
  { name: 'Ilmar Põhjala', team: 'Lauka Kolhoos', position: 'Mängija', games: 1, goals: 0, assists: 1 },
  { name: 'Andres Tammeveski', team: 'Lauka Kolhoos', position: 'Mängija', games: 1, goals: 0, assists: 0 },
  { name: 'Mario Paulus', team: 'Drinkgeld', position: 'Mängija', games: 1, goals: 0, assists: 1 },
  { name: 'Targo Treial', team: 'Drinkgeld', position: 'Mängija', games: 1, goals: 0, assists: 1 },
  { name: 'Raul Eesmäe', team: 'Drinkgeld', position: 'Mängija', games: 1, goals: 0, assists: 1 },
  { name: 'Tarmo Pütsep', team: 'Drinkgeld', position: 'Mängija', games: 1, goals: 0, assists: 1 },
  { name: 'Siim Stokkeby', team: 'Lauka Kolhoos', position: 'Väravavaht', games: 2, goals: 0, assists: 0 },
  { name: 'Sergei Kirillov', team: 'Tallinn United', position: 'Väravavaht', games: 2, goals: 0, assists: 0 },
  { name: 'Taavi Lepik', team: 'Drinkgeld', position: 'Väravavaht', games: 1, goals: 0, assists: 0 },
  { name: 'Elari Vool', team: 'Kadrina', position: 'Väravavaht', games: 1, goals: 0, assists: 0 },
  { name: 'Mihhail Jakovlev', team: 'Prosura', position: 'Väravavaht', games: 2, goals: 0, assists: 0 },
  { name: 'Erti Suurtalu', team: 'Rapla Kepiklubi', position: 'Väravavaht', games: 1, goals: 0, assists: 0 },
  { name: 'Tiivo Vaigurand', team: 'SH Mehed Metsast', position: 'Väravavaht', games: 1, goals: 0, assists: 0 },
  { name: 'Toomas Joonas', team: 'Tabajad', position: 'Väravavaht', games: 1, goals: 0, assists: 0 },
  { name: 'Henry-Haidor Hõrak', team: 'Sparta Team Automaailm', position: 'Ründaja', games: 0, goals: 0, assists: 0 },
  { name: 'Mihkel Tasa', team: 'Sparta Team Automaailm', position: 'Kaitsja', games: 0, goals: 0, assists: 0 },
  { name: 'Sander Savi', team: 'Sparta Team Automaailm', position: 'Ründaja', games: 0, goals: 0, assists: 0 },
  ...[
    'Sander Suurtalu', 'Anton Fjodorov', 'Joosep Perandi', 'Remo Merimaa', 'Rene Kärner',
    'Artjom Kuznetsov', 'Mats Tamme', 'Kennet Vaha', 'Kristian Tikerpäe', 'Kermo Uue',
    'Martin Tikerpäe', 'Stenver Savi', 'Niko Tauno Petteri Impiö', 'Risto Heapost',
    'Oliver Savi', 'Morten Talviste', 'Jarl Gustsin', 'Rasmus Rannula', 'Gustav Salm',
    'Kaspar Kallion', 'Gerdo Unga', 'Tanel Kasenurm', 'Arseni Suhharnikov',
    'Karl Oskar Vikk', 'Kristen Kurval'
  ].map((name) => ({ name, team: 'Sparta Team Automaailm', position: 'Mängija', games: 0, goals: 0, assists: 0 }))
];

export const PORTAL_TEAMS: PortalTeam[] = [
  { name: 'Sparta Team Automaailm', short: 'SPA', location: 'Tallinn, Eesti', leagues: ['Meeste MV', 'EST-LAT M'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'Drinkgeld', short: 'DRK', location: 'Eesti', leagues: ['M35+'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'Lauka Kolhoos', short: 'LK', location: 'Hiiumaa, Eesti', leagues: ['M35+'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'Rapla Kepiklubi', short: 'RK', location: 'Rapla, Eesti', leagues: ['M35+'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'Kadrina', short: 'KAD', location: 'Kadrina, Eesti', leagues: ['M35+'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'Prosura', short: 'PRO', location: 'Eesti', leagues: ['M35+'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'Tabajad', short: 'TAB', location: 'Eesti', leagues: ['M35+'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'Tallinn United', short: 'TU', location: 'Tallinn, Eesti', leagues: ['M35+'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'SH Mehed Metsast', short: 'SHM', location: 'Eesti', leagues: ['M35+'], venue: 'Andmed täiendamisel', venueAddress: 'Andmed täiendamisel' },
  { name: 'Märjamaa', short: 'MÄR', location: 'Märjamaa, Eesti', leagues: ['M35+'], venue: 'Märjamaa valla spordikeskus', venueAddress: 'Staadioni 3, Märjamaa' }
];

export function playerInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export function findPlayer(name: string | null): PortalPlayer {
  const requestedName = name?.trim() ?? '';
  const normalized = requestedName.toLocaleLowerCase('et');
  const knownPlayer = PORTAL_PLAYERS.find((player) => player.name.toLocaleLowerCase('et') === normalized);
  if (knownPlayer) {
    return knownPlayer;
  }
  if (requestedName) {
    return { name: requestedName, team: 'Andmed täiendamisel', position: 'Mängija', games: 0, goals: 0, assists: 0 };
  }
  return PORTAL_PLAYERS.find((player) => player.name === 'Siim Romanov')!;
}

export function findTeam(name: string | null): PortalTeam {
  const normalized = name?.trim().toLocaleLowerCase('et') ?? '';
  return PORTAL_TEAMS.find((team) => team.name.toLocaleLowerCase('et') === normalized)
    ?? PORTAL_TEAMS[0];
}

/* ============================================================
   HOMEPAGE MODULES
   Match strip, featured story, news list and standings snapshot.
   Team names live here rather than in templates so that a fixture's
   status can never disagree with the teams shown beside it.
   ============================================================ */

export type MatchState = 'live' | 'upcoming' | 'finished';

export interface PortalMatch {
  id: string;
  league: string;
  home: string;
  away: string;
  homeShort: string;
  awayShort: string;
  /** ISO 8601 with offset. Drives state, so never hardcode a status string. */
  startsAt: string;
  venue: string;
  homeScore?: number;
  awayScore?: number;
  /** Set only while the match is in progress. */
  period?: string;
  stream?: boolean;
}

export interface PortalNewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
}

export interface PortalStandingsRow {
  rank: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface PortalStandingsTable {
  id: string;
  league: string;
  rows: PortalStandingsRow[];
}

/**
 * DEMO SEED DATA. Kick-off times are anchored to page-load time so the match
 * strip always demonstrates all three states (live / upcoming / finished),
 * whenever the demo happens to run.
 *
 * When the real fixture feed lands, replace `hoursFromNow(n)` with the literal
 * ISO 8601 timestamps from the source and delete the two helpers below.
 */
const LOAD_TIME = Date.now();
const HOUR_MS = 60 * 60 * 1000;
const hoursFromNow = (hours: number): string =>
  new Date(LOAD_TIME + hours * HOUR_MS).toISOString();
const daysFromNow = (days: number): string => hoursFromNow(days * 24);

export const PORTAL_MATCHES: PortalMatch[] = [
  {
    // Started ~40 minutes ago, so inside the two-hour live window.
    id: 'm-lk-drk',
    league: 'M35+ MV',
    home: 'Lauka Kolhoos', away: 'Drinkgeld',
    homeShort: 'LK', awayShort: 'DRK',
    startsAt: hoursFromNow(-0.7),
    venue: 'Aruküla spordihoone',
    homeScore: 2, awayScore: 1, period: '2. periood',
    stream: true
  },
  {
    id: 'm-tu-pro',
    league: 'M35+ MV',
    home: 'Tallinn United', away: 'Prosura',
    homeShort: 'TU', awayShort: 'PRO',
    startsAt: hoursFromNow(4.5),
    venue: 'Kristiine spordihall'
  },
  {
    id: 'm-spa-emu',
    league: 'Naiste MV',
    home: 'Sparta Team Automaailm', away: 'Eesti Maaülikool',
    homeShort: 'SPA', awayShort: 'EMÜ',
    startsAt: daysFromNow(4),
    venue: 'Kristiine spordihall',
    stream: true
  },
  {
    id: 'm-rk-kad',
    league: 'M35+ MV',
    home: 'Rapla Kepiklubi', away: 'Kadrina',
    homeShort: 'RK', awayShort: 'KAD',
    startsAt: daysFromNow(4.15),
    venue: 'Rapla spordikeskus'
  },
  {
    id: 'm-shm-tab',
    league: 'M35+ MV',
    home: 'SH Mehed Metsast', away: 'Tabajad',
    homeShort: 'SHM', awayShort: 'TAB',
    startsAt: daysFromNow(11),
    venue: 'Märjamaa valla spordikeskus'
  },
  {
    id: 'm-drk-tu',
    league: 'M35+ MV',
    home: 'Drinkgeld', away: 'Tallinn United',
    homeShort: 'DRK', awayShort: 'TU',
    startsAt: daysFromNow(-3),
    venue: 'Aruküla spordihoone',
    homeScore: 6, awayScore: 2
  },
  {
    id: 'm-lk-rk',
    league: 'M35+ MV',
    home: 'Lauka Kolhoos', away: 'Rapla Kepiklubi',
    homeShort: 'LK', awayShort: 'RK',
    startsAt: daysFromNow(-4),
    venue: 'Kärdla spordihoone',
    homeScore: 4, awayScore: 4
  },
  {
    id: 'm-pro-tab',
    league: 'M35+ MV',
    home: 'Prosura', away: 'Tabajad',
    homeShort: 'PRO', awayShort: 'TAB',
    startsAt: daysFromNow(-6),
    venue: 'Kristiine spordihall',
    homeScore: 2, awayScore: 5
  }
];

export const PORTAL_NEWS: PortalNewsItem[] = [
  {
    id: 'n-u16t-meister',
    date: daysFromNow(-1),
    category: 'Noored',
    title: 'Kehtna/Rapla SHKV krooniti U16T vanuseklassi Eesti meistriks',
    summary: 'U16 tüdrukute saalihoki Eesti meistrivõistlustel tuli meistriks Kehtna/Rapla SHKV, kes alistas ülipõnevas finaalmängus Kuusalu võistkonna karistusvisete seerias.',
    image: 'news_photo.jpg'
  },
  {
    id: 'n-raplamaa-hooaeg',
    date: daysFromNow(-3),
    category: 'Maakonnad',
    title: 'Raplamaa saalihoki meistrivõistluste hooaeg sai põneva lõpu',
    summary: 'Hooaja otsustavad mängud tõid väljakule nii noored kui kogenud mängijad.'
  },
  {
    id: 'n-u10-meister',
    date: daysFromNow(-5),
    category: 'Noored',
    title: 'Kehtna SK krooniti U10 vanuseklassi Eesti meistriks',
    summary: 'Noortesarja finaalpäev pakkus kiiret mängu ja tasavägiseid kohtumisi.'
  },
  {
    id: 'n-u9-meister',
    date: daysFromNow(-7),
    category: 'Noored',
    title: 'Kehtna SK krooniti U9 vanuseklassi Eesti meistriks',
    summary: 'Kolmas järjestikune tiitel Kehtna noortele sel hooajal.'
  },
  {
    id: 'n-final-four',
    date: daysFromNow(-11),
    category: 'Naised',
    title: 'Ääsmäel toimus naiste LAT–EST ühisliiga Final Four turniir',
    summary: 'Nädalavahetuse turniir tõi kokku nelja parima naiskonna Eestist ja Lätist.'
  }
];

export const PORTAL_STANDINGS: PortalStandingsTable[] = [
  {
    id: 'm35',
    league: 'M35+ Meistrivõistlused',
    rows: [
      { rank: 1, team: 'Drinkgeld',        played: 7, won: 6, drawn: 0, lost: 1, goalsFor: 41, goalsAgainst: 22, points: 18 },
      { rank: 2, team: 'Lauka Kolhoos',    played: 8, won: 5, drawn: 1, lost: 2, goalsFor: 38, goalsAgainst: 27, points: 16 },
      { rank: 3, team: 'Rapla Kepiklubi',  played: 8, won: 5, drawn: 0, lost: 3, goalsFor: 40, goalsAgainst: 31, points: 15 },
      { rank: 4, team: 'Tallinn United',   played: 7, won: 4, drawn: 1, lost: 2, goalsFor: 33, goalsAgainst: 26, points: 13 },
      { rank: 5, team: 'Prosura',          played: 7, won: 3, drawn: 0, lost: 4, goalsFor: 26, goalsAgainst: 30, points: 9 }
    ]
  },
  {
    id: 'naised',
    league: 'Naiste Meistrivõistlused',
    rows: [
      { rank: 1, team: 'Sparta Team Automaailm', played: 6, won: 6, drawn: 0, lost: 0, goalsFor: 44, goalsAgainst: 12, points: 18 },
      { rank: 2, team: 'Eesti Maaülikool',       played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 31, goalsAgainst: 19, points: 13 },
      { rank: 3, team: 'Kehtna/Rapla SHKV',      played: 6, won: 3, drawn: 1, lost: 2, goalsFor: 24, goalsAgainst: 21, points: 10 },
      { rank: 4, team: 'Puhja Kool',             played: 6, won: 2, drawn: 0, lost: 4, goalsFor: 18, goalsAgainst: 28, points: 6 },
      { rank: 5, team: 'TVSK',                   played: 6, won: 0, drawn: 0, lost: 6, goalsFor: 9,  goalsAgainst: 46, points: 0 }
    ]
  }
];

/** A match counts as in progress for two hours from its start time. */
const MATCH_DURATION_MS = 2 * 60 * 60 * 1000;

export function matchState(match: PortalMatch, now: number = Date.now()): MatchState {
  const start = new Date(match.startsAt).getTime();
  if (now < start) {
    return 'upcoming';
  }
  return now <= start + MATCH_DURATION_MS ? 'live' : 'finished';
}

export function hasScore(match: PortalMatch): boolean {
  return match.homeScore !== undefined && match.awayScore !== undefined;
}
