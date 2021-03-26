import { NgModule } from '@angular/core';

import { CounterModule } from '@angular-dream/counter';
import { LoadableApp } from '@angular-dream/app-utils';

@NgModule({
  imports: [CounterModule],
})
export class MfeAppModule implements LoadableApp {
  EntryComponent = this.counterModule.EntryComponent;

  constructor(private readonly counterModule: CounterModule) {}
}
