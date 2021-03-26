import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScoreboardModule } from '@angular-dream/scoreboard';
import { LoadableApp } from '@angular-dream/app-utils';

@NgModule({
  imports: [ScoreboardModule],
  declarations: [AppComponent],
  exports: [AppComponent],
})
export class MfeAppModule implements LoadableApp {
  EntryComponent = this.scoreboardModule.EntryComponent;

  constructor(private readonly scoreboardModule: ScoreboardModule) {}
}
