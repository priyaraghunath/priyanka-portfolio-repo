import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.data';

@Component({ selector: 'app-skills', standalone: true, template: `
  <section id="skills" class="section" aria-labelledby="skills-title"><div class="container"><div class="section-heading"><p class="eyebrow">02 / Toolkit</p><h2 id="skills-title">The tools behind the work.</h2><p>Technologies and practices listed directly from the resume.</p></div><div class="skill-grid">@for (category of data.skills; track category.name) {<article class="skill-card"><div class="skill-card__header"><span class="icon-badge" aria-hidden="true">{{ category.icon }}</span><h3>{{ category.name }}</h3></div><div class="badge-list">@for (skill of category.skills; track skill) {<span class="badge">{{ skill }}</span>}</div></article>}</div></div></section>
` })
export class SkillsComponent { readonly data = RESUME_DATA; }