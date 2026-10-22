import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

import { findNews, PORTAL_NEWS, PortalNewsItem } from '../portal-data';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news-detail.component.html'
})
export class NewsDetailComponent implements OnInit, OnDestroy {
  article: PortalNewsItem = PORTAL_NEWS[0];
  related: PortalNewsItem[] = [];
  private readonly subscription = new Subscription();

  constructor(private readonly route: ActivatedRoute, private readonly title: Title) {}

  ngOnInit(): void {
    this.subscription.add(this.route.paramMap.subscribe((params) => {
      this.article = findNews(params.get('id'));
      this.related = PORTAL_NEWS.filter((item) => item.id !== this.article.id).slice(0, 3);
      this.title.setTitle(`${this.article.title} · Saalihoki.ee`);
    }));
  }

  formattedDate(date: string): string {
    return new Date(date).toLocaleDateString('et-EE', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
