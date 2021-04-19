import { NgModule } from '@angular/core';
import { TohAppModule } from '@angular-dream/toh';
import { LoadableApp } from '@angular-dream/app-utils';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [TohAppModule, HttpClientModule],
})
export class MfeAppModule implements LoadableApp {
  EntryComponent = this.tohApp.EntryComponent;
  constructor(private tohApp: TohAppModule) {
  }
}
