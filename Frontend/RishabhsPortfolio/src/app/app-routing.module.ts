import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DashAllServicesComponent } from './component/dash-all-services/dash-all-services.component';
import { NewProjectComponent } from './component/new-project/new-project.component';
import { ProjectInfoComponent } from './component/project-info/project-info.component';
import { ProjectVWComponent } from './component/project-vw/project-vw.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserInfoComponent } from './component/user-info/user-info.component';
import { UsersComponent } from './component/users/users.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'projects',
    component: ProjectPageComponent,
    
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
  // {
  //   path: 'signup',
  //   component: SignupComponent,
  // },
  // {
  //   path: 'dashboard',
  //   component: DashAllServicesComponent,
  // },
  {
    path: 'users',
    component: UsersComponent,
  },
  // {
  //   path: 'projects',
  //   component: ProjectVWComponent,
  // },
  // {
  //   path: 'add-project',
  //   component: NewProjectComponent,
  // },
  {
    path: 'projects/:key',
    component: ProjectInfoComponent,
  },
  // {
  //   path: 'user-info',
  //   component: UserInfoComponent,
  // },
  {
    path:'project-info/:key',
    component:ProjectInfoComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
