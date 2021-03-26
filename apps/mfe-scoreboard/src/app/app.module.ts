import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MfeAppModule } from './mfe-app.module';

@NgModule({
  imports: [BrowserModule, MfeAppModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
