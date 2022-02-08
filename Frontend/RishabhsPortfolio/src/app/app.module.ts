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
import { ProjectCarouselComponent } from './component/project-carousel/project-carousel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { APP_BASE_HREF } from '@angular/common';
import { ParticlesComponent } from './component/particles/particles.component';
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
    ProjectCarouselComponent,
    HomePageComponent,
    ParticlesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
