import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TohAppModule } from './toh-app.module';

@NgModule({
  imports: [BrowserModule, TohAppModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
