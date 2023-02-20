import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SkillCreateModalComponent } from './modals/creators/skill-creator-modal/skill-creator-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesContainerComponent } from './portfolio-page/containers/categories-container/categories-container.component';
import { EducationSectionComponent } from './portfolio-page/containers/education-section/education-section.component';
import { PageContainerComponent } from './portfolio-page/containers/page-container/page-container.component';
import { ProjectsContainerComponent } from './portfolio-page/containers/projects-container/projects-container.component';
import { SkillsContainerComponent } from './portfolio-page/containers/skills-container/skills-container.component';
import { WorkExperienceContainerComponent } from './portfolio-page/containers/work-experience-container/work-experience-container.component';
import { AboutMeComponent } from './portfolio-page/entity-views/about-me/about-me.component';
import { EducationComponent } from './portfolio-page/entity-views/education/education.component';
import { HeroComponent } from './portfolio-page/entity-views/hero/hero.component';
import { ProjectComponent } from './portfolio-page/entity-views/project/project.component';
import { SkillComponent } from './portfolio-page/entity-views/skill/skill.component';
import { WorkExperienceComponent } from './portfolio-page/entity-views/work-experience/work-experience.component';
import { PortfolioComponent } from './portfolio-page/portfolio/portfolio.component';
import { ModalContainerComponent } from './portfolio-page/containers/modal-container/modal-container.component';
import { SkillEditorModalComponent } from './modals/editors/skill-editor-modal/skill-editor-modal.component';

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
    SkillCreateModalComponent,
    ModalContainerComponent,
    SkillEditorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
