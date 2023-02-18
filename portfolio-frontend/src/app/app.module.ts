import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CategoriesContainerComponent } from './categories-container/categories-container.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkExperienceContainerComponent } from './work-experience-container/work-experience-container.component';
import { ProjectsContainerComponent } from './projects-container/projects-container.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    LoginComponent,
    PageContainerComponent,
    HeroComponent,
    AboutMeComponent,
    CategoriesContainerComponent,
    WorkExperienceComponent,
    EducationComponent,
    EducationSectionComponent,
    WorkExperienceContainerComponent,
    ProjectsContainerComponent,
    ProjectComponent,
    SkillComponent,
    SkillsContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
