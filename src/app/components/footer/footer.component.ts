import { Component } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.data';

@Component({ selector: 'app-footer', standalone: true, template: `<footer class="site-footer"><div class="container footer-inner"><p>© {{ year }} {{ data.personal.name }}</p><div class="footer-links">@if (data.personal.linkedin) {<a [href]="data.personal.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>}<a [href]="'mailto:' + data.personal.email">Email</a><a href="#top" aria-label="Back to top">Back to top ↑</a></div></div></footer>` })
export class FooterComponent { readonly data = RESUME_DATA; readonly year = new Date().getFullYear(); }