import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'dashboard',
          loadChildren: () =>
            import('@angular-dream/dashboard').then((m) => m.DashboardModule),
        },
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full',
        },
      ],
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
