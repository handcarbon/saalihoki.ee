import { PORTAL_PLAYERS, PORTAL_PLAYER_SEASON, type PortalPlayer } from './player-data';

export { PORTAL_PLAYER_SEASON, PORTAL_PLAYERS, type PortalPlayer } from './player-data';

export interface PortalGoalieStats {
  name: string;
  team: string;
  minutes: number;
  shots: number;
  saves: number;
}

export interface PortalTeam {
  name: string;
  short: string;
  location: string;
  leagues: string[];
  venue: string;
  venueAddress: string;
  logo?: string;
  founded?: string;
  website?: string;
  email?: string;
}

export interface PortalCompetition {
  id: string;
  short: string;
  name: string;
  group: 'Täiskasvanud' | 'Naised' | 'Noored' | 'Veteranid';
  description: string;
  teams: number;
  status: 'Aktiivne' | 'Arhiiv';
  route?: string;
  scheduleLeague: string;
}

export const PORTAL_SEASON = PORTAL_PLAYER_SEASON;
export const PORTAL_DATA_UPDATED = '2026-10-23T12:00:00+03:00';
export const PORTAL_DATA_NOTICE = 'Andmeväljavõte seisuga 23.10.2026';

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
    image: 'sponsors/oxdog.png',
    url: 'https://www.oxdog.net/'
  },
  {
    name: 'Paf',
    tier: 'Peapartner',
    description: 'Eesti saalihoki pikaajaline toetaja.',
    image: 'sponsors/paf.gif',
    url: 'https://www.paf.ee/et?utm_medium=display&utm_source=saalihoki&utm_campaign=ongoing&utm_content=saalihoki_120x120'
  },
  {
    name: 'GO',
    tier: 'Ametlik partner',
    description: 'Eesti Saalihoki Liidu koostööpartner.',
    image: 'sponsors/go.jpg',
    url: 'https://www.go.ee/'
  },
  {
    name: 'Automaailm / Fat Pipe',
    tier: 'Ametlik partner',
    description: 'Saalihokivarustuse partner Eestis.',
    image: 'sponsors/automaailm-fat-pipe.png',
    url: 'https://automaailm.ee/vaba-aeg/saalihoki'
  },
  {
    name: 'Tallink Floorball',
    tier: 'Ametlik partner',
    description: 'Rahvusvaheline saalihoki koostööpartner.',
    image: 'sponsors/tallink-floorball.png',
    url: 'https://www.tallinkfloorball.ee/'
  },
  {
    name: 'iDent',
    tier: 'Ametlik partner',
    description: 'Eesti Saalihoki Liidu koostööpartner.',
    image: 'sponsors/ident.jpg',
    url: 'https://ident.ee/'
  },
  {
    name: 'Sport Television',
    tier: 'Ametlik partner',
    description: 'Saalihoki otseülekannete partner.',
    image: 'sponsors/sport-television.jpg',
    url: 'https://sport.television.ee/Upcoming/floorball'
  }
];

export const PORTAL_MEMBERSHIPS: PortalMembership[] = [
  {
    name: 'Eesti Olümpiakomitee',
    shortName: 'EOK',
    image: 'sponsors/eok.png',
    url: 'https://www.eok.ee/'
  },
  {
    name: 'International Floorball Federation',
    shortName: 'IFF',
    image: 'sponsors/iff.png',
    url: 'https://www.floorball.sport/'
  }
];

export const PORTAL_GOALIES: PortalGoalieStats[] = [
  // Final 2025/26 goalkeeper tables from the same three archived leagues as PORTAL_PLAYERS.
  { name: 'Siim Stokkeby', team: 'Lauka Kolhoos', minutes: 120, shots: 21, saves: 20 },
  { name: 'Ivo Lepik', team: 'Drinkgeld', minutes: 180, shots: 66, saves: 62 },
  { name: 'Taavi Lepik', team: 'Drinkgeld', minutes: 135, shots: 40, saves: 37 },
  { name: 'Sergei Kirillov', team: 'Tallinn United', minutes: 180, shots: 82, saves: 71 },
  { name: 'Denis Savchenko', team: 'Tabajad', minutes: 270, shots: 123, saves: 102 },
  { name: 'Vitali Sõtšjov', team: 'Tallinn United', minutes: 180, shots: 82, saves: 67 },
  { name: 'Raido Raidoja', team: 'Rapla Kepiklubi', minutes: 150, shots: 85, saves: 69 },
  { name: 'Kaupo Kaur', team: 'Lauka Kolhoos', minutes: 240, shots: 91, saves: 73 },
  { name: 'Erti Suurtalu', team: 'Rapla Kepiklubi', minutes: 210, shots: 83, saves: 66 },
  { name: 'Mihhail Jakovlev', team: 'Prosura', minutes: 360, shots: 156, saves: 122 },
  { name: 'Elari Vool', team: 'Kadrina', minutes: 315, shots: 200, saves: 156 },
  { name: 'Rene Abel', team: 'Märjamaa', minutes: 45, shots: 40, saves: 31 },
  { name: 'Märt Käär', team: 'Märjamaa', minutes: 90, shots: 63, saves: 48 },
  { name: 'Tiivo Vaigurand', team: 'SH Mehed Metsast', minutes: 345, shots: 157, saves: 117 },
  { name: 'Toomas Joonas', team: 'Tabajad', minutes: 90, shots: 54, saves: 40 },
  { name: 'Alar Siiber', team: 'Märjamaa', minutes: 45, shots: 29, saves: 20 },
  { name: 'Argo Raudsepp', team: 'SH Mehed Metsast', minutes: 15, shots: 9, saves: 6 },
  { name: 'Toomas Jaaniste', team: 'Märjamaa', minutes: 90, shots: 51, saves: 29 },
  { name: 'Karl-Erik Kruusmaa', team: 'Jõgeva SK Tähe / Olivia', minutes: 220, shots: 100, saves: 83 },
  { name: 'Kristen Kurval', team: 'Sparta Team Automaailm', minutes: 155, shots: 83, saves: 67 },
  { name: 'Remo Merimaa', team: 'Sparta Team Automaailm', minutes: 105, shots: 57, saves: 41 },
  { name: 'Karl Kalm', team: 'Jõgeva SK Tähe / Olivia', minutes: 40, shots: 31, saves: 22 },
  { name: 'Merliin Arusalu', team: 'Sparta', minutes: 180, shots: 84, saves: 77 },
  { name: 'Katrin Kaarama', team: 'Eesti Maaülikool', minutes: 120, shots: 67, saves: 57 },
  { name: 'Klaara Käämer', team: 'Eesti Maaülikool', minutes: 59, shots: 28, saves: 22 }
];

export const PORTAL_TEAMS: PortalTeam[] = [
  { name: 'Sparta Team Automaailm', short: 'SPA', location: 'Tallinn, Eesti', leagues: ['Meeste MV', 'EST-LAT M'], venue: 'Kristiine spordihall', venueAddress: 'Forelli 12, Tallinn', founded: '1994', website: 'https://sparta.ee/', email: 'info@sparta.ee' },
  { name: 'Drinkgeld', short: 'DRK', location: 'Harjumaa, Eesti', leagues: ['M35+'], venue: 'Aruküla spordihoone', venueAddress: 'Põllu 5, Aruküla', logo: 'drinkgeld.png' },
  { name: 'Lauka Kolhoos', short: 'LK', location: 'Hiiumaa, Eesti', leagues: ['M35+'], venue: 'Kärdla spordikeskus', venueAddress: 'Põllu 27, Kärdla', logo: 'lauka.png' },
  { name: 'Rapla Kepiklubi', short: 'RK', location: 'Rapla, Eesti', leagues: ['M35+'], venue: 'Sadolini spordihoone', venueAddress: 'Viljandi mnt 69A, Rapla' },
  { name: 'Kadrina', short: 'KAD', location: 'Kadrina, Eesti', leagues: ['M35+'], venue: 'Kadrina spordikeskus', venueAddress: 'Rakvere tee 14, Kadrina' },
  { name: 'Prosura', short: 'PRO', location: 'Tallinn, Eesti', leagues: ['M35+'], venue: 'Kristiine spordihall', venueAddress: 'Forelli 12, Tallinn' },
  { name: 'Tabajad', short: 'TAB', location: 'Harjumaa, Eesti', leagues: ['M35+'], venue: 'Jüri spordihoone', venueAddress: 'Laste 3, Jüri' },
  { name: 'Tallinn United', short: 'TU', location: 'Tallinn, Eesti', leagues: ['M35+'], venue: 'Kristiine spordihall', venueAddress: 'Forelli 12, Tallinn' },
  { name: 'SH Mehed Metsast', short: 'SHM', location: 'Harjumaa, Eesti', leagues: ['M35+'], venue: 'Kiili spordihoone', venueAddress: 'Kooli 2, Kiili' },
  { name: 'Märjamaa', short: 'MÄR', location: 'Märjamaa, Eesti', leagues: ['M35+'], venue: 'Märjamaa valla spordikeskus', venueAddress: 'Staadioni 3, Märjamaa' },
  { name: 'Jõgeva SK Tähe / Olivia', short: 'JÕG', location: 'Jõgeva, Eesti', leagues: ['Meeste MV'], venue: 'Virtus spordikeskus', venueAddress: 'Aia 40, Jõgeva' },
  { name: 'Sparta', short: 'SPA', location: 'Tallinn, Eesti', leagues: ['Naiste MV'], venue: 'Kristiine spordihall', venueAddress: 'Forelli 12, Tallinn' },
  { name: 'Eesti Maaülikool', short: 'EMÜ', location: 'Tartu, Eesti', leagues: ['Naiste MV'], venue: 'EMÜ spordihoone', venueAddress: 'F. R. Kreutzwaldi 3, Tartu' }
];

export const PORTAL_COMPETITIONS: PortalCompetition[] = [
  { id: 'meeste-mv', short: 'M', name: 'Meeste meistrivõistlused', group: 'Täiskasvanud', description: 'Eesti meeste klubisaalihoki kõrgeim kodune võistlus.', teams: 2, status: 'Arhiiv', scheduleLeague: 'Meeste MV' },
  { id: 'est-lat-m', short: 'EST–LAT', name: 'EST–LAT meeste liiga', group: 'Täiskasvanud', description: 'Eesti ja Läti klubide ühine rahvusvaheline võistlus.', teams: 8, status: 'Arhiiv', scheduleLeague: 'EST-LAT M' },
  { id: 'naiste-mv', short: 'N', name: 'Naiste meistrivõistlused', group: 'Naised', description: 'Naiste klubisaalihoki Eesti meistrivõistlused.', teams: 5, status: 'Arhiiv', scheduleLeague: 'Naiste MV' },
  { id: 'm35', short: 'M35+', name: 'M35+ meistrivõistlused', group: 'Veteranid', description: 'Veteranide ametlik võistluskeskus, tabel ja statistika.', teams: 9, status: 'Arhiiv', route: '/league/m35', scheduleLeague: 'M35+ MV' },
  { id: 'u18', short: 'U18', name: 'U18 meistrivõistlused', group: 'Noored', description: 'Noormeeste U18 vanuseklassi meistrivõistlused.', teams: 6, status: 'Arhiiv', scheduleLeague: 'U18' },
  { id: 'u18t', short: 'U18T', name: 'U18 tüdrukud', group: 'Noored', description: 'Tüdrukute U18 vanuseklassi meistrivõistlused.', teams: 5, status: 'Arhiiv', scheduleLeague: 'U18T' },
  { id: 'u16', short: 'U16', name: 'U16 meistrivõistlused', group: 'Noored', description: 'Noorte U16 vanuseklassi võistlussari.', teams: 8, status: 'Arhiiv', scheduleLeague: 'U16' },
  { id: 'u14', short: 'U14', name: 'U14 meistrivõistlused', group: 'Noored', description: 'Noorte U14 vanuseklassi võistlussari.', teams: 8, status: 'Arhiiv', scheduleLeague: 'U14' },
  { id: 'u12', short: 'U12', name: 'U12 meistrivõistlused', group: 'Noored', description: 'Noorte U12 vanuseklassi võistlussari.', teams: 10, status: 'Arhiiv', scheduleLeague: 'U12' },
  { id: 'u10', short: 'U10', name: 'U10 turniirisari', group: 'Noored', description: 'Kõige nooremate mängijate arendav turniirisari.', teams: 12, status: 'Arhiiv', scheduleLeague: 'U10' }
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
    return {
      name: requestedName,
      team: 'Andmed täiendamisel',
      position: 'Mängija',
      season: PORTAL_PLAYER_SEASON,
      league: 'Andmed täiendamisel',
      games: 0,
      goals: 0,
      assists: 0
    };
  }
  return PORTAL_PLAYERS.find((player) => player.name === 'Siim Romanov')!;
}

export function findTeam(name: string | null): PortalTeam {
  const requestedName = name?.trim() ?? '';
  const normalized = requestedName.toLocaleLowerCase('et');
  const team = PORTAL_TEAMS.find((item) => item.name.toLocaleLowerCase('et') === normalized);
  if (team) return team;
  if (!requestedName) return PORTAL_TEAMS[0];
  const short = requestedName.split(/\s+/).map((part) => part[0]).join('').slice(0, 3).toUpperCase();
  return {
    name: requestedName,
    short: short || '–',
    location: 'Asukoht kinnitamata',
    leagues: [],
    venue: 'Kodusaal kinnitamata',
    venueAddress: 'Aadress kinnitamata'
  };
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
  competitionId: string;
  round: string;
  home: string;
  away: string;
  homeShort: string;
  awayShort: string;
  startsAt: string;
  venue: string;
  status: MatchState;
  homeScore?: number;
  awayScore?: number;
  period?: string;
  stream?: boolean;
  matchNumber?: string;
  spectators?: number;
  officials?: string[];
  periods?: Array<{ label: string; home: number; away: number }>;
  events?: PortalMatchEvent[];
  homeRoster?: PortalMatchPlayer[];
  awayRoster?: PortalMatchPlayer[];
}

export interface PortalMatchEvent {
  time: string;
  type: 'goal' | 'penalty';
  team: string;
  player: string;
  detail?: string;
  score?: string;
}

export interface PortalMatchPlayer {
  number: number;
  name: string;
  position?: string;
  points?: string;
}

export interface PortalPendingMatch {
  id: string;
  league: string;
  round: string;
  home: string;
  away: string;
  homeShort: string;
  awayShort: string;
  venue?: string;
}

export interface PortalNewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  image?: string;
  author: string;
  body: string[];
  relatedCompetition?: string;
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

export const PORTAL_MATCHES: PortalMatch[] = [
  {
    id: '2026-10-23-u10-emu-valga',
    league: 'U10', competitionId: 'u10', round: 'Turniiripäev',
    home: 'EMÜ SK', away: 'Valga Välk', homeShort: 'EMÜ', awayShort: 'VAL',
    startsAt: '2026-10-23T12:00:00+03:00', venue: 'Jõgeva Virtus', status: 'upcoming'
  },
  {
    id: '2026-10-23-u10-jogeva-emu',
    league: 'U10', competitionId: 'u10', round: 'Turniiripäev',
    home: 'Jõgeva SK Tähe/Olivia 17', away: 'EMÜ SK', homeShort: 'JÕG', awayShort: 'EMÜ',
    startsAt: '2026-10-23T13:00:00+03:00', venue: 'Jõgeva Virtus', status: 'upcoming'
  },
  {
    id: '2026-10-23-u10-valga-jogeva',
    league: 'U10', competitionId: 'u10', round: 'Turniiripäev',
    home: 'Valga Välk', away: 'Jõgeva SK Tähe/Olivia 17', homeShort: 'VAL', awayShort: 'JÕG',
    startsAt: '2026-10-23T14:00:00+03:00', venue: 'Jõgeva Virtus', status: 'upcoming'
  },
  {
    id: '2026-10-23-u16t-jogeva-emu',
    league: 'U16T', competitionId: 'u16t', round: 'Põhiturniir',
    home: 'Jõgeva SK Tähe/Olivia 11 TÜ', away: 'EMÜ SK', homeShort: 'JÕG', awayShort: 'EMÜ',
    startsAt: '2026-10-23T16:00:00+03:00', venue: 'Jõgeva Virtus', status: 'upcoming'
  },
  {
    id: '2026-10-23-m-emu-u19',
    league: 'Meistriliiga M', competitionId: 'meeste-mv', round: 'Põhiturniir',
    home: 'Eesti Maaülikool', away: 'Eesti U19 Koondis', homeShort: 'EMÜ', awayShort: 'U19',
    startsAt: '2026-10-23T20:00:00+03:00', venue: 'Eesti Maaülikooli spordihoone', status: 'upcoming'
  },
  {
    id: '2026-10-24-rapla-janeda-laanlased',
    league: 'Rapla liiga', competitionId: 'rapla-liiga', round: 'Põhiturniir',
    home: 'Jäneda SK', away: 'Läänlased', homeShort: 'JÄN', awayShort: 'LÄÄ',
    startsAt: '2026-10-24T10:30:00+03:00', venue: 'Rapla Sadolin Spordihoone', status: 'upcoming'
  },
  {
    id: '2026-10-24-rapla-hokiklubi-kaitseliit',
    league: 'Rapla liiga', competitionId: 'rapla-liiga', round: 'Põhiturniir',
    home: 'Rapla Hokiklubi', away: 'Kaitseliidu Rapla malev/Kehtna SK', homeShort: 'RHK', awayShort: 'KRM',
    startsAt: '2026-10-24T12:00:00+03:00', venue: 'Rapla Sadolin Spordihoone', status: 'upcoming'
  },
  {
    id: '2026-10-24-rapla-tallinn-voore',
    league: 'Rapla liiga', competitionId: 'rapla-liiga', round: 'Põhiturniir',
    home: 'Tallinn United', away: 'SK Voore', homeShort: 'TU', awayShort: 'VOO',
    startsAt: '2026-10-24T13:30:00+03:00', venue: 'Rapla Sadolin Spordihoone', status: 'upcoming'
  },
  {
    id: '2026-10-24-rapla-parnu-bandidos',
    league: 'Rapla liiga', competitionId: 'rapla-liiga', round: 'Põhiturniir',
    home: 'Pärnu Bullet / Feltcar', away: 'Bändidos', homeShort: 'PBF', awayShort: 'BÄN',
    startsAt: '2026-10-24T15:00:00+03:00', venue: 'Rapla Sadolin Spordihoone', status: 'upcoming'
  },
  {
    id: '2026-10-24-latest-talsi-ulbroka',
    league: 'LAT-EST M', competitionId: 'est-lat-m', round: 'Põhiturniir',
    home: 'FK Talsi/TNSS/Krauzers', away: 'Masters Ulbroka/LU', homeShort: 'TAL', awayShort: 'ULB',
    startsAt: '2026-10-24T18:00:00+03:00', venue: 'Talsu valsts ģimnāzija', status: 'upcoming'
  },
  {
    id: '2026-10-30-latest-kekava-talsi',
    league: 'LAT-EST M', competitionId: 'est-lat-m', round: 'Põhiturniir',
    home: 'Ķekava', away: 'FK Talsi/TNSS/Krauzers', homeShort: 'ĶEK', awayShort: 'TAL',
    startsAt: '2026-10-30T20:00:00+02:00', venue: 'Ķekavas vsk. sporta komplekss', status: 'upcoming'
  },
  {
    id: '2026-10-31-m35-kadrina-tallinn',
    league: 'M35+ MV', competitionId: 'm35', round: 'Põhiturniir',
    home: 'Kadrina Tabajad', away: 'Tallinn United', homeShort: 'KAD', awayShort: 'TU',
    startsAt: '2026-10-31T10:00:00+02:00', venue: 'Kuusalu SH', status: 'upcoming'
  },
  {
    id: '2026-10-31-energia-kaitseliit-jarva',
    league: 'Energialiiga', competitionId: 'energialiiga', round: 'Põhiturniir',
    home: 'Kaitseliidu Rapla malev', away: 'Järva-Jaani', homeShort: 'KRM', awayShort: 'JJ',
    startsAt: '2026-10-31T11:15:00+02:00', venue: 'Kuusalu SH', status: 'upcoming'
  },
  {
    id: '2026-10-31-m35-rapla-shm',
    league: 'M35+ MV', competitionId: 'm35', round: 'Põhiturniir',
    home: 'Rapla Kepiklubi', away: 'SH Mehed Metsast', homeShort: 'RK', awayShort: 'SHM',
    startsAt: '2026-10-31T12:30:00+02:00', venue: 'Kuusalu SH', status: 'upcoming'
  },
  {
    id: '2026-10-31-m35-drinkgeld-vhp',
    league: 'M35+ MV', competitionId: 'm35', round: 'Põhiturniir',
    home: 'Drinkgeld', away: 'Vana Hea Puur', homeShort: 'DRK', awayShort: 'VHP',
    startsAt: '2026-10-31T13:45:00+02:00', venue: 'Kuusalu SH', status: 'upcoming'
  },
  {
    id: '2026-10-31-energia-arenculle-voore',
    league: 'Energialiiga', competitionId: 'energialiiga', round: 'Põhiturniir',
    home: 'Arenculle', away: 'Voore SK', homeShort: 'ARE', awayShort: 'VOO',
    startsAt: '2026-10-31T15:00:00+02:00', venue: 'Kuusalu SH', status: 'upcoming'
  },
  {
    id: '2026-10-31-m35-lauka-prosura',
    league: 'M35+ MV', competitionId: 'm35', round: 'Põhiturniir',
    home: 'Lauka Kolhoos', away: 'Prosura', homeShort: 'LK', awayShort: 'PRO',
    startsAt: '2026-10-31T16:15:00+02:00', venue: 'Kuusalu SH', status: 'upcoming'
  },
  {
    id: '2026-10-31-latest-talsi-sparta',
    league: 'LAT-EST M', competitionId: 'est-lat-m', round: 'Põhiturniir',
    home: 'FK Talsi/TNSS/Krauzers', away: 'Sparta Team Automaailm', homeShort: 'TAL', awayShort: 'SPA',
    startsAt: '2026-10-31T17:00:00+02:00', venue: 'Talsu valsts ģimnāzija', status: 'upcoming'
  },
  {
    id: '2026-10-31-energia-kuusalu-flash',
    league: 'Energialiiga', competitionId: 'energialiiga', round: 'Põhiturniir',
    home: 'Kuusalu Eluterve Naine', away: 'Flash by FF', homeShort: 'KEN', awayShort: 'FFF',
    startsAt: '2026-10-31T17:30:00+02:00', venue: 'Kuusalu SH', status: 'upcoming'
  },
  {
    id: 'm-lk-drk',
    league: 'M35+ MV',
    competitionId: 'm35',
    round: 'Põhiturniir · 8. voor',
    home: 'Lauka Kolhoos', away: 'Drinkgeld',
    homeShort: 'LK', awayShort: 'DRK',
    startsAt: '2026-02-21T14:00:00+02:00',
    venue: 'Aruküla spordihoone',
    status: 'finished',
    homeScore: 3, awayScore: 4,
    matchNumber: 'M35-27',
    spectators: 25,
    officials: ['Margus Liivik', 'Martin Tali'],
    periods: [
      { label: '1. kolmandik', home: 0, away: 0 },
      { label: '2. kolmandik', home: 1, away: 3 },
      { label: '3. kolmandik', home: 2, away: 1 }
    ],
    events: [
      { time: '03:24', type: 'penalty', team: 'Lauka Kolhoos', player: 'Rannar Malk', detail: '2 min · kepilöök' },
      { time: '14:49', type: 'goal', team: 'Lauka Kolhoos', player: 'Siim Romanov', detail: 'Söötis Ilmar Põhjala', score: '1–0' },
      { time: '23:00', type: 'goal', team: 'Drinkgeld', player: 'Kaspar Jõgar', detail: 'Söötis Raul Eesmäe', score: '1–1' },
      { time: '23:11', type: 'goal', team: 'Drinkgeld', player: 'Ilmar Niitov', detail: 'Söötis Mario Paulus', score: '1–2' },
      { time: '25:12', type: 'goal', team: 'Drinkgeld', player: 'Kaspar Jõgar', detail: 'Söötis Tarmo Pütsep', score: '1–3' },
      { time: '29:38', type: 'goal', team: 'Lauka Kolhoos', player: 'Siim Romanov', detail: 'Söötis Tiit Tammeveski', score: '2–3' },
      { time: '34:44', type: 'goal', team: 'Drinkgeld', player: 'Kaspar Jõgar', detail: 'Söötis Targo Treial', score: '2–4' },
      { time: '37:58', type: 'penalty', team: 'Drinkgeld', player: 'Tarmo Pütsep', detail: '2 min · kepilöök' },
      { time: '39:55', type: 'goal', team: 'Lauka Kolhoos', player: 'Siim Romanov', detail: 'Söötis Anre Vooremaa', score: '3–4' }
    ],
    homeRoster: [
      { number: 1, name: 'Erki Kärblane', position: 'VV' },
      { number: 9, name: 'Tiit Tammeveski', points: '0+1' },
      { number: 18, name: 'Rannar Malk' },
      { number: 39, name: 'Kaupo Kaur', position: 'VV' },
      { number: 51, name: 'Anre Vooremaa', points: '0+1' },
      { number: 55, name: 'Ilmar Põhjala', points: '0+1' },
      { number: 90, name: 'Siim Romanov', points: '3+0' }
    ],
    awayRoster: [
      { number: 8, name: 'Ivo Lepik', position: 'VV' },
      { number: 24, name: 'Kaspar Jõgar', points: '3+0' },
      { number: 28, name: 'Ilmar Niitov', points: '1+0' },
      { number: 31, name: 'Mario Paulus', points: '0+1' },
      { number: 61, name: 'Targo Treial', points: '0+1' },
      { number: 77, name: 'Raul Eesmäe', points: '0+1' },
      { number: 83, name: 'Tarmo Pütsep', points: '0+1' }
    ]
  },
  {
    id: 'm-tu-pro',
    league: 'M35+ MV',
    competitionId: 'm35',
    round: 'Põhiturniir · 8. voor',
    home: 'Tallinn United', away: 'Prosura',
    homeShort: 'TU', awayShort: 'PRO',
    startsAt: '2026-02-21T15:30:00+02:00',
    venue: 'Kristiine spordihall',
    status: 'finished',
    homeScore: 6, awayScore: 3,
    matchNumber: 'M35-28'
  },
  {
    id: 'm-spa-emu',
    league: 'Naiste MV',
    competitionId: 'naiste-mv',
    round: 'Põhiturniir · 6. voor',
    home: 'Sparta Team Automaailm', away: 'Eesti Maaülikool',
    homeShort: 'SPA', awayShort: 'EMÜ',
    startsAt: '2026-03-07T13:00:00+02:00',
    venue: 'Kristiine spordihall',
    status: 'finished',
    homeScore: 5, awayScore: 2,
    stream: true,
    matchNumber: 'N-18'
  },
  {
    id: 'm-rk-kad',
    league: 'M35+ MV',
    competitionId: 'm35',
    round: 'Kohamängud',
    home: 'Rapla Kepiklubi', away: 'Kadrina',
    homeShort: 'RK', awayShort: 'KAD',
    startsAt: '2026-03-14T14:00:00+02:00',
    venue: 'Sadolini spordihoone',
    status: 'finished',
    homeScore: 3, awayScore: 2,
    matchNumber: 'M35-31'
  },
  {
    id: 'm-shm-tab',
    league: 'M35+ MV',
    competitionId: 'm35',
    round: 'Põhiturniir · 7. voor',
    home: 'SH Mehed Metsast', away: 'Tabajad',
    homeShort: 'SHM', awayShort: 'TAB',
    startsAt: '2026-02-14T16:00:00+02:00',
    venue: 'Märjamaa valla spordikeskus',
    status: 'finished',
    homeScore: 4, awayScore: 3,
    matchNumber: 'M35-24'
  },
  {
    id: 'm-drk-tu',
    league: 'M35+ MV',
    competitionId: 'm35',
    round: 'Põhiturniir · 7. voor',
    home: 'Drinkgeld', away: 'Tallinn United',
    homeShort: 'DRK', awayShort: 'TU',
    startsAt: '2026-02-14T14:30:00+02:00',
    venue: 'Aruküla spordihoone',
    status: 'finished',
    homeScore: 6, awayScore: 2,
    matchNumber: 'M35-23'
  },
  {
    id: 'm-lk-rk',
    league: 'M35+ MV',
    competitionId: 'm35',
    round: 'Põhiturniir · 6. voor',
    home: 'Lauka Kolhoos', away: 'Rapla Kepiklubi',
    homeShort: 'LK', awayShort: 'RK',
    startsAt: '2026-02-07T14:00:00+02:00',
    venue: 'Kärdla spordihoone',
    status: 'finished',
    homeScore: 4, awayScore: 4,
    matchNumber: 'M35-19'
  },
  {
    id: 'm-pro-tab',
    league: 'M35+ MV',
    competitionId: 'm35',
    round: 'Põhiturniir · 6. voor',
    home: 'Prosura', away: 'Tabajad',
    homeShort: 'PRO', awayShort: 'TAB',
    startsAt: '2026-02-07T15:30:00+02:00',
    venue: 'Kristiine spordihall',
    status: 'finished',
    homeScore: 2, awayScore: 5,
    matchNumber: 'M35-20'
  }
];

// The imported archive does not contain reliable future dates. Keep this list
// empty until a live schedule source is connected rather than presenting
// unverified fixtures as official information.
export const PORTAL_PENDING_MATCHES: PortalPendingMatch[] = [];

export const PORTAL_NEWS: PortalNewsItem[] = [
  {
    id: 'n-u16t-meister',
    date: '2026-04-04T12:00:00+03:00',
    category: 'Noored',
    title: 'Kehtna/Rapla SHKV krooniti U16T vanuseklassi Eesti meistriks',
    summary: 'U16 tüdrukute saalihoki Eesti meistrivõistlustel tuli meistriks Kehtna/Rapla SHKV, kes alistas ülipõnevas finaalmängus Kuusalu võistkonna karistusvisete seerias.',
    image: 'news_photo.jpg',
    author: 'Eesti Saalihoki Liit',
    relatedCompetition: 'U16T',
    body: [
      'Kehtna/Rapla SHKV võitis tasavägise U16T finaali, mis otsustati alles karistusvisete seerias. Mõlemad võistkonnad näitasid kogu kohtumise vältel kõrget tempot ja head meeskonnamängu.',
      'Finaalpäev tõi tribüünidele noormängijate pered ja toetajad üle Eesti. Medalid anti üle pärast viimast kohtumist ning hooaja parimaid tunnustati eriauhindadega.',
      'Võistluse täielikud tulemused ja mängijate statistika jäävad liiga arhiivi.'
    ]
  },
  {
    id: 'n-raplamaa-hooaeg',
    date: '2026-03-30T10:00:00+03:00',
    category: 'Maakonnad',
    title: 'Raplamaa saalihoki meistrivõistluste hooaeg sai põneva lõpu',
    summary: 'Hooaja otsustavad mängud tõid väljakule nii noored kui kogenud mängijad.',
    author: 'Eesti Saalihoki Liit',
    relatedCompetition: 'Raplamaa MV',
    body: [
      'Raplamaa meistrivõistluste finaalpäeval selgusid hooaja paremad võistkonnad. Päeva jooksul peeti nii kohamänge kui ka medalikohtumisi.',
      'Korraldajad tänavad klubisid, vabatahtlikke ja toetajaid, kes aitasid maakondliku sarja järjekordse hooaja läbi viia.'
    ]
  },
  {
    id: 'n-u10-meister',
    date: '2026-03-29T15:00:00+03:00',
    category: 'Noored',
    title: 'Kehtna SK krooniti U10 vanuseklassi Eesti meistriks',
    summary: 'Noortesarja finaalpäev pakkus kiiret mängu ja tasavägiseid kohtumisi.',
    author: 'Eesti Saalihoki Liit',
    relatedCompetition: 'U10',
    body: [
      'Kehtna SK lõpetas U10 hooaja esikohaga. Finaalpäeval said kõik võistkonnad väärt mängukogemuse ning publik nägi palju julget ründemängu.',
      'U10 sarja eesmärk on toetada noorte arengut, pakkudes regulaarseid ja turvaliselt korraldatud võistluspäevi.'
    ]
  },
  {
    id: 'n-u9-meister',
    date: '2026-03-27T11:00:00+02:00',
    category: 'Noored',
    title: 'Kehtna SK krooniti U9 vanuseklassi Eesti meistriks',
    summary: 'Kolmas järjestikune tiitel Kehtna noortele sel hooajal.',
    author: 'Eesti Saalihoki Liit',
    body: ['Kehtna noored lõpetasid U9 turniirisarja tugeva finaalpäevaga.', 'Kõik osalenud võistkonnad said hooaja lõpetuseks medalid ja tunnustuse.']
  },
  {
    id: 'n-final-four',
    date: '2026-03-23T09:00:00+02:00',
    category: 'Naised',
    title: 'Ääsmäel toimus naiste LAT–EST ühisliiga Final Four turniir',
    summary: 'Nädalavahetuse turniir tõi kokku nelja parima naiskonna Eestist ja Lätist.',
    author: 'Eesti Saalihoki Liit',
    relatedCompetition: 'EST–LAT N',
    body: ['Ääsmäe spordihoones kohtusid ühisliiga neli paremat naiskonda.', 'Kahe päeva jooksul peeti poolfinaalid, pronksimäng ja finaal.']
  }
];

export const PORTAL_STANDINGS: PortalStandingsTable[] = [
  {
    id: 'm35',
    league: 'M35+ Meistrivõistlused',
    rows: [
      { rank: 1, team: 'Drinkgeld',        played: 8, won: 8, drawn: 0, lost: 0, goalsFor: 52, goalsAgainst: 7, points: 24 },
      { rank: 2, team: 'Lauka Kolhoos',    played: 8, won: 7, drawn: 0, lost: 1, goalsFor: 51, goalsAgainst: 19, points: 21 },
      { rank: 3, team: 'Rapla Kepiklubi',  played: 8, won: 5, drawn: 0, lost: 3, goalsFor: 46, goalsAgainst: 34, points: 15 },
      { rank: 4, team: 'Kadrina',          played: 8, won: 3, drawn: 1, lost: 4, goalsFor: 24, goalsAgainst: 44, points: 11 },
      { rank: 5, team: 'Prosura',          played: 8, won: 3, drawn: 1, lost: 4, goalsFor: 27, goalsAgainst: 34, points: 10 },
      { rank: 6, team: 'Tabajad',          played: 8, won: 3, drawn: 0, lost: 5, goalsFor: 21, goalsAgainst: 35, points: 9 },
      { rank: 7, team: 'Tallinn United',   played: 8, won: 3, drawn: 0, lost: 5, goalsFor: 41, goalsAgainst: 26, points: 9 },
      { rank: 8, team: 'SH Mehed Metsast', played: 8, won: 3, drawn: 0, lost: 5, goalsFor: 38, goalsAgainst: 43, points: 9 },
      { rank: 9, team: 'Märjamaa',         played: 8, won: 0, drawn: 0, lost: 8, goalsFor: 7, goalsAgainst: 65, points: 0 }
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

export function matchState(match: PortalMatch): MatchState {
  return match.status;
}

export function findMatch(id: string | null): PortalMatch {
  return PORTAL_MATCHES.find((match) => match.id === id)
    ?? PORTAL_MATCHES.find((match) => match.id === 'm-lk-drk')!;
}

export function findNews(id: string | null): PortalNewsItem {
  return PORTAL_NEWS.find((item) => item.id === id) ?? PORTAL_NEWS[0];
}

export function hasScore(match: PortalMatch): boolean {
  return match.homeScore !== undefined && match.awayScore !== undefined;
}
