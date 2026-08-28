import { Component, signal } from '@angular/core';
import { RESUME_DATA } from '../../data/resume.data';

@Component({
  selector: 'app-navbar', standalone: true,
  template: `
    <header class="site-header">
      <nav class="container nav" aria-label="Main navigation">
        <a class="brand" href="#top" (click)="closeMenu()" aria-label="Go to homepage">PR<span>.</span></a>
        <button class="menu-toggle" type="button" (click)="menuOpen.update(value => !value)" [attr.aria-expanded]="menuOpen()" aria-controls="primary-navigation" aria-label="Toggle navigation menu">☰</button>
        <div id="primary-navigation" class="nav-links" [class.nav-links--open]="menuOpen()">
          @for (link of links; track link.id) { <a [href]="'#' + link.id" (click)="closeMenu()">{{ link.label }}</a> }
          <button class="theme-toggle" type="button" (click)="toggleTheme()" [attr.aria-label]="darkMode() ? 'Switch to light theme' : 'Switch to dark theme'">{{ darkMode() ? '☀' : '☾' }}</button>
        </div>
      </nav>
    </header>
  `
})
export class NavbarComponent {
  readonly menuOpen = signal(false);
  private readonly isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  readonly darkMode = signal(this.isBrowser && window.localStorage?.getItem('theme') === 'dark');
  readonly links = [{ id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' }, { id: 'education', label: 'Education' }, { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' }];
  constructor() {
    if (this.isBrowser) {
      document.documentElement.classList.toggle('dark-theme', this.darkMode());
    }
  }

  closeMenu(): void { this.menuOpen.set(false); }

  toggleTheme(): void {
    this.darkMode.update(value => !value);
    if (!this.isBrowser) return;
    document.documentElement.classList.toggle('dark-theme', this.darkMode());
    try {
      window.localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
    } catch { /* ignore storage errors */ }
  }
}