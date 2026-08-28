import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.data';

@Component({ selector: 'app-education', standalone: true, template: `
  <section id="education" class="section" aria-labelledby="education-title"><div class="container"><div class="section-heading"><p class="eyebrow">04 / Education</p><h2 id="education-title">Continuous learning.</h2></div><div class="education-grid">@for (item of data.education; track item.credential) {<article class="education-card"><p class="date-range">{{ item.startDate }} — {{ item.endDate }}</p><h3>{{ item.credential }}</h3><p>{{ item.institution }}</p>@if (item.details?.length) {<ul>@for (detail of item.details; track detail) {<li>{{ detail }}</li>}</ul>}</article>}</div></div></section>
` })
export class EducationComponent { readonly data = RESUME_DATA; }