import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { EducationComponent } from '../../components/education/education.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';
import { AchievementsComponent } from '../../components/achievements/achievements.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, EducationComponent, ProjectsComponent, CertificationsComponent, AchievementsComponent, ContactComponent, FooterComponent],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-education />
      <app-projects />
      <app-certifications />
      <app-achievements />
      <app-contact />
    </main>
    <app-footer />
  `
})
export class HomeComponent {}