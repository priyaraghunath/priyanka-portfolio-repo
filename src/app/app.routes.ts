import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Priyanka Raghunath | AWS Cloud & DevOps Engineer' },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found | Priyanka Raghunath' }
];