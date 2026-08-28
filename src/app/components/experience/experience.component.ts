import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.data';

@Component({ selector: 'app-experience', standalone: true, template: `
  <section id="experience" class="section section--muted" aria-labelledby="experience-title"><div class="container"><div class="section-heading"><p class="eyebrow">03 / Experience</p><h2 id="experience-title">A career in cloud operations.</h2></div><div class="timeline">@for (item of data.experience; track item.company + item.startDate) {<article class="timeline-item"><div class="timeline-dot" aria-hidden="true"></div><div class="timeline-meta"><span>{{ item.startDate }} — {{ item.endDate ?? 'Present' }}</span>@if (item.current) {<span class="status">Current</span>}</div><div class="timeline-content"><h3>{{ item.role }}</h3><h4>{{ item.company }}</h4><ul>@for (responsibility of item.responsibilities; track responsibility) {<li>{{ responsibility }}</li>}</ul></div></article>}</div></div></section>
` })
export class ExperienceComponent { readonly data = RESUME_DATA; }