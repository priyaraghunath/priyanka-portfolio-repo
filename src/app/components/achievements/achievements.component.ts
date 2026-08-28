import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.data';

@Component({ selector: 'app-achievements', standalone: true, template: `
  <section id="achievements" class="section section--muted" aria-labelledby="achievements-title"><div class="container"><div class="section-heading"><p class="eyebrow">07 / Achievements</p><h2 id="achievements-title">Beyond the job title.</h2></div>@if (data.achievements.length) {<div class="achievement-grid">@for (item of data.achievements; track item.title) {<article class="achievement-card"><p class="date-range">{{ item.date }}</p><h3>{{ item.title }}</h3>@if (item.organization) {<p>{{ item.organization }}</p>}<p>{{ item.description }}</p>@if (item.url) {<a [href]="item.url" target="_blank" rel="noopener noreferrer">Learn more ↗</a>}</article>}</div>} @else {<div class="empty-state"><span aria-hidden="true">✦</span><h3>No additional achievements listed</h3><p>Awards, publications, leadership, and volunteer work were not included in the supplied resume.</p></div>}</div></section>
` })
export class AchievementsComponent { readonly data = RESUME_DATA; }