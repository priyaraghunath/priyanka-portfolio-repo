import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RESUME_DATA } from '../../data/resume.data';

@Component({ selector: 'app-about', standalone: true, imports: [CommonModule], template: `
  <section id="about" class="section section--muted" aria-labelledby="about-title"><div class="container"><div class="section-heading"><p class="eyebrow">01 / About</p><h2 id="about-title">Building dependable cloud foundations.</h2></div><div class="two-column"><p class="large-copy">{{ data.overview }}</p><div class="info-panel"><div><span>Location</span><strong>{{ data.personal.location }}</strong></div><div><span>Experience</span><strong>{{ data.yearsExperience }}</strong></div><div><span>Focus</span><strong>AWS · DevOps · Reliability</strong></div></div></div><div class="highlight-grid"><article class="highlight-card" *ngFor="let item of data.highlights"><span class="card-mark">↗</span><p>{{ item }}</p></article></div></div></section>
` })
export class AboutComponent { readonly data = RESUME_DATA; }