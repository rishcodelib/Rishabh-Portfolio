import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashAllServicesComponent } from './component/dash-all-services/dash-all-services.component';
import { ProjectVWComponent } from './component/project-vw/project-vw.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { UsersComponent } from './component/users/users.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'project',
    component: ProjectPageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'resume',
    component: ResumePageComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'login',
    redirectTo: '/signin',
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'dashboard',
    component: DashAllServicesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'projects',
    component: ProjectVWComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
