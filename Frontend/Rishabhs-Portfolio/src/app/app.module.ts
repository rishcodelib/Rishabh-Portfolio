import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroimageComponent } from './component/heroimage/heroimage.component';
import { APP_BASE_HREF } from '@angular/common';
// import { ParticlesModule } from 'angular-particle';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ParticleComponent } from './component/particle/particle.component';
import { AboutComponent } from './component/about/about.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProjectCarouselComponent } from './component/project-carousel/project-carousel.component';

import { OwlModule } from 'ngx-owl-carousel';
import { LoginComponent } from './component/login/login.component';

// import { NgParticlesModule } from 'ng-particles';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    // ParticlesModule,
    // NgParticlesModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
