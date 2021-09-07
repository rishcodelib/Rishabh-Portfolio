import { ComponentFactory, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HeroimageComponent } from './component/heroimage/heroimage.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ProjectsComponent } from './component/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    component: NavbarComponent,
  },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  {
    path: 'projects',
    pathMatch:'full',
    component: ProjectsComponent,
  },
  {
    path: 'login',
    pathMatch:'full',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
