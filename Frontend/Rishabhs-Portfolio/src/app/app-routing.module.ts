import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroimageComponent } from './component/heroimage/heroimage.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
