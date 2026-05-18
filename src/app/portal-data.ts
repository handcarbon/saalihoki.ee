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
