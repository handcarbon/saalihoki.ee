import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { PORTAL_MEMBERSHIPS, PORTAL_PARTNERS } from '../portal-data';

interface SectionCard {
  eyebrow: string;
  title: string;
  text: string;
  link?: string;
  linkLabel?: string;
  image?: string;
}

interface SectionContent {
  kicker: string;
  title: string;
  lead: string;
  cards: SectionCard[];
}

const SECTION_CONTENT: Record<string, SectionContent> = {
  news: {
    kicker: 'Viimased lood',
    title: 'Uudised',
    lead: 'Eesti saalihoki värskemad tulemused, lood ja teated ühest kohast.',
    cards: [
      { eyebrow: '04.04.2026 · Noored', title: 'Kehtna/Rapla SHKV krooniti U16T Eesti meistriks', text: 'Finaal lahenes Kuusalu vastu karistusvisete seerias.', image: 'news_photo.jpg', link: '/league', linkLabel: 'Vaata võistlust' },
      { eyebrow: '30.03.2026 · Maakonnad', title: 'Raplamaa saalihokihooaeg sai põneva lõpu', text: 'Hooaja otsustavad mängud tõid väljakule nii noored kui kogenud mängijad.', link: '/schedule', linkLabel: 'Vaata tulemusi' },
      { eyebrow: '29.03.2026 · Noored', title: 'Kehtna SK võitis U10 vanuseklassi', text: 'Noortesarja finaalpäev pakkus kiiret mängu ja tasavägiseid kohtumisi.', link: '/league', linkLabel: 'Tabel ja statistika' }
    ]
  },
  schedule: {
    kicker: 'Hooaeg 2026 / 2027',
    title: 'Ajakavad ja tulemused',
    lead: 'Leia järgmised mängud, saalid ja lõppenud kohtumiste protokollid.',
    cards: [
      { eyebrow: '06.09.2026 · 13:00', title: 'Sparta — Eesti Maaülikool', text: 'Naiste meistrivõistlused · Kristiine spordihall', link: '/match', linkLabel: 'Mängu info' },
      { eyebrow: '12.09.2026 · 16:00', title: 'Lauka Kolhoos — Drinkgeld', text: 'M35+ meistrivõistlused · Aruküla spordihoone', link: '/league', linkLabel: 'Liiga vaade' },
      { eyebrow: 'Lõppenud', title: 'Lauka Kolhoos 3 — 4 Drinkgeld', text: '21.02.2026 · Täielik protokoll, sündmused ja koosseisud.', link: '/match', linkLabel: 'Ava protokoll' }
    ]
  },
  national: {
    kicker: 'Eesti koondised',
    title: 'Koondis',
    lead: 'Rahvuskoondiste koosseisud, laagrid, kalender ja tulemused.',
    cards: [
      { eyebrow: 'Mehed', title: 'Eesti meeste koondis', text: 'Koosseis, personal ja järgmised rahvusvahelised kohtumised.', link: '/schedule', linkLabel: 'Koondise kalender' },
      { eyebrow: 'Naised', title: 'Eesti naiste koondis', text: 'Uudised, mängijad ja ettevalmistus rahvusvahelisteks turniirideks.', link: '/news', linkLabel: 'Viimased uudised' },
      { eyebrow: 'Noored', title: 'U19 koondised', text: 'Noortekoondiste programmid, kogunemised ja valikupõhimõtted.', link: '/training', linkLabel: 'Arenguprogrammid' }
    ]
  },
  association: {
    kicker: 'Eesti Saalihoki Liit',
    title: 'Liit',
    lead: 'Arendame saalihokit üle Eesti ning toetame klubisid, mängijaid ja korraldajaid.',
    cards: [
      { eyebrow: 'Kontakt', title: 'Kadaka tee 42a, Tallinn', text: 'info@saalihoki.ee · +372 566 21 873' },
      { eyebrow: 'Dokumendid', title: 'Juhendid ja reglemendid', text: 'Võistlusjuhendid, litsentsid ning hooaja korraldusinfo.', link: '/training', linkLabel: 'Koolitused ja juhendid' },
      { eyebrow: 'Organisatsioon', title: 'Juhtimine ja liikmed', text: 'Liidu struktuur, liikmesklubid ja koostööpartnerid.', link: '/partners', linkLabel: 'Koostööpartnerid' }
    ]
  },
  gallery: {
    kicker: 'Fotod',
    title: 'Galerii',
    lead: 'Hetked koondise, liigade ja noorteturniiride mängupäevadelt.',
    cards: [
      { eyebrow: 'Koondis', title: 'Eesti koondise mängupäev', text: 'Valik fotosid koondise viimasest kodumängust.', image: 'hero.jpg' },
      { eyebrow: 'U16', title: 'Noorte finaalpäev', text: 'Emotsioonid, autasustamine ja meeskonnapildid.', image: 'news_photo.jpg' },
      { eyebrow: 'Liigad', title: 'M35+ kohamängud', text: 'Hooaja otsustavate kohtumiste galerii.', image: 'hero.jpg' }
    ]
  },
  training: {
    kicker: 'Areng ja haridus',
    title: 'Koolitused',
    lead: 'Treenerite, kohtunike ja mängukorraldajate järgmised koolitused.',
    cards: [
      { eyebrow: '19.09.2026 · Tallinn', title: 'Treenerite baaskoolitus', text: 'Ühepäevane praktiline koolitus alustavatele noortetreeneritele.' },
      { eyebrow: '03.10.2026 · Tartu', title: 'Kohtunike hooaja seminar', text: 'Reeglimuudatused, videonäited ja hooaja töökorraldus.' },
      { eyebrow: 'Veebikoolitus', title: 'Turvaline spordikeskkond', text: 'Iseseisvalt läbitav materjal klubidele ja lapsevanematele.' }
    ]
  },
  partners: {
    kicker: 'Koostöö',
    title: 'Partnerid',
    lead: 'Täname organisatsioone, kes aitavad Eesti saalihokil kasvada.',
    cards: [
      { eyebrow: 'Peapartner', title: 'Oxdog', text: 'Eesti Saalihoki Liidu ametlik varustuspartner.' },
      { eyebrow: 'Peapartner', title: 'Paf', text: 'Liigade ja koondise pikaajaline toetaja.' },
      { eyebrow: 'Ametlikud partnerid', title: 'Automaailm · Sport TV · Go · Ident', text: 'Partnerid, kes toetavad võistluste korraldust ja nähtavust.' }
    ]
  }
};

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './section.component.html'
})
export class SectionComponent implements OnInit, OnDestroy {
  content = SECTION_CONTENT['news'];
  isPartnerSection = false;
  readonly partners = PORTAL_PARTNERS;
  readonly memberships = PORTAL_MEMBERSHIPS;
  private readonly subscription = new Subscription();

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription.add(this.route.data.subscribe((data) => {
      const section = data['section'] as string;
      this.content = SECTION_CONTENT[section] ?? SECTION_CONTENT['news'];
      this.isPartnerSection = section === 'partners';
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
