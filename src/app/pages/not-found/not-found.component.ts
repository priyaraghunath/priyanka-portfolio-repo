import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `<main class="not-found"><p class="eyebrow">404</p><h1>Page not found</h1><p>The page you requested does not exist.</p><a class="button button--primary" routerLink="/">Return home</a></main>`
})
export class NotFoundComponent {}