import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroimageComponent } from './component/heroimage/heroimage.component';
import {APP_BASE_HREF} from '@angular/common';

import { NavbarComponent } from './component/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroimageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
