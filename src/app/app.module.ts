import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display.component';
import { NumbersComponent } from './components/numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
