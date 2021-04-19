import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from '@angular-dream/dashboard';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DashboardModule.forRoot(environment.production),
    RouterModule.forRoot([], {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
