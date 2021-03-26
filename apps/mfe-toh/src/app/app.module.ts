import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TohAppModule, AppComponent } from '@angular-dream/toh';

@NgModule({
  imports: [BrowserModule, TohAppModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
