import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.data';

@Component({ selector: 'app-certifications', standalone: true, template: `
  <section id="certifications" class="section" aria-labelledby="certifications-title"><div class="container"><div class="section-heading"><p class="eyebrow">06 / Certifications</p><h2 id="certifications-title">Validated cloud knowledge.</h2></div><div class="cert-grid">@for (item of data.certifications; track item.name) {<article class="cert-card"><span class="cert-mark" aria-hidden="true">✓</span><div><h3>{{ item.name }}</h3><p>{{ item.issuer }}@if (item.issueDate) { · {{ item.issueDate }}}</p>@if (item.verificationUrl) {<a [href]="item.verificationUrl" target="_blank" rel="noopener noreferrer">Verify credential ↗</a>}</div></article>}</div></div></section>
` })
export class CertificationsComponent { readonly data = RESUME_DATA; }