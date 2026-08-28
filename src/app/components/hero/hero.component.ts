import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-hero', standalone: true,
  template: `
    <section id="top" class="hero section" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div class="hero-copy"><p class="eyebrow">Cloud infrastructure · DevOps · Reliability</p><h1 id="hero-title">{{ data.personal.name }}</h1><p class="hero-title">{{ data.personal.title }}</p><p class="hero-summary">{{ data.personal.summary }}</p><div class="hero-actions"><a class="button button--primary" href="#experience">View experience</a><a class="button button--secondary" href="#contact">Contact me</a><a class="text-link" [href]="data.personal.resumePath" download>Download resume ↓</a></div></div>
        <!-- profile image removed -->
      </div>
    </section>
  `
})
export class HeroComponent { readonly data = RESUME_DATA; }