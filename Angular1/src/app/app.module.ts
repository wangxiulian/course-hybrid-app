import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child01Component } from './components/child01/child01.component';
import { Child02Component } from './components/child02/child02.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child01Component,
    Child02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
