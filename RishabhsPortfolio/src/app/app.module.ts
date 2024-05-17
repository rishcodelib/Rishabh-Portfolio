import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeroimageComponent } from './component/heroimage/heroimage.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { APP_BASE_HREF } from '@angular/common';
import { ParticlesComponent } from './component/particles/particles.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ProjectCardComponent } from './component/project-card/project-card.component';
import { ProjectTagComponent } from './component/project-tag/project-tag.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TechDividerComponent } from './component/tech-divider/tech-divider.component';
import { SocialMediaComponent } from './component/social-media/social-media.component';
import { CertiComponent } from './component/certifications/certi.component';
import { ProfSmComponent } from './component/prof-sm/prof-sm.component';
import { SkillBarComponent } from './component/skill-bar/skill-bar/skill-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CodeAssesmentBarComponent } from './component/code-assesment-bar/code-assesment-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './component/resume/resume.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { DashAllServicesComponent } from './component/dash-all-services/dash-all-services.component';
import { UsersComponent } from './component/users/users.component';
import { ProjectVWComponent } from './component/project-vw/project-vw.component';
import { NewProjectComponent } from './component/new-project/new-project.component';
import { BsAlertComponent } from './component/bs-alert/bs-alert.component';
import { ProjectInfoComponent } from './component/project-info/project-info.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeroimageComponent,
    SigninComponent,
    SignupComponent,
    ProjectsComponent,
    HomePageComponent,
    ParticlesComponent,
    ProjectPageComponent,
    ProjectCardComponent,
    ProjectTagComponent,
    AboutPageComponent,
    ContactPageComponent,
    TechDividerComponent,
    SocialMediaComponent,
    CertiComponent,
    ProfSmComponent,
    SkillBarComponent,
    CodeAssesmentBarComponent,
    ResumeComponent,
    ResumePageComponent,
    DashAllServicesComponent,
    UsersComponent,
    ProjectVWComponent,
    NewProjectComponent,
    BsAlertComponent,
    ProjectInfoComponent,
    UserInfoComponent,
    DisclaimerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
