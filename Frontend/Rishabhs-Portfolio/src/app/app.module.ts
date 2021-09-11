import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroimageComponent } from './component/heroimage/heroimage.component';
import { APP_BASE_HREF } from '@angular/common';

import { NavbarComponent } from './component/navbar/navbar.component';
import { ParticleComponent } from './component/particle/particle.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProjectCarouselComponent } from './component/project-carousel/project-carousel.component';

import { OwlModule } from 'ngx-owl-carousel';
import { LoginComponent } from './component/login/login.component';
import { ContactComponent } from './component/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MyProjectsComponent } from './pages/my-projects/my-projects.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroimageComponent,
    NavbarComponent,
    ParticleComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    ProjectCarouselComponent,
    LoginComponent,
    ContactComponent,
    AboutUsComponent,
    HomePageComponent,
    ContactUsComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,ReactiveFormsModule,
    CarouselModule

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent,NavbarComponent,FooterComponent]
})
export class AppModule {}
