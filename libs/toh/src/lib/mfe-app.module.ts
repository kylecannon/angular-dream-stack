import { LoadableApp } from '@angular-dream/app-utils';
import { NgModule } from '@angular/core';
import { TohAppModule } from './toh-app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [TohAppModule],
})
export class MfeAppModule implements LoadableApp {
  EntryComponent = AppComponent;
}
