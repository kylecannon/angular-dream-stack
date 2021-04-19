import { NgModule } from '@angular/core';
import { DashboardModule } from '@angular-dream/dashboard';
import { RouterModule } from '@angular/router';
import { LoadableApp } from '@angular-dream/app-utils';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    DashboardModule.forRoot(environment.production),
    RouterModule.forRoot([]),
    MatToolbarModule,
  ],
  declarations: [AppComponent],
})
export class MfeAppModule implements LoadableApp {
  EntryComponent = AppComponent;
}
