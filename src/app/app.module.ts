import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header'
import {SideComponent} from './side'
import { Routes, RouterModule } from '@angular/router';
import {TagComponent} from './tag';
import {RouteComponent} from './route';
export const ROUTES: Routes = [
  {
    path:"config/configmanage",component:TagComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    RouteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
