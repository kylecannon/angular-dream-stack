import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreboardContainerComponent } from './scoreboard-container/scoreboard-container.component';
import { ScoreboardFirstRouteComponent } from './scoreboard-first-route/scoreboard-first-route.component';
import { ScoreboardSecondRouteComponent } from './scoreboard-second-route/scoreboard-second-route.component';
import { Route, RouterModule } from '@angular/router';
import { LoadableApp } from '@angular-dream/app-utils';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { MatButtonModule } from '@angular/material/button';
import { metaReducers } from './reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './custom-route-serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const routes: Route[] = [
  {
    path: 'first',
    component: ScoreboardFirstRouteComponent,
  },
  {
    path: 'second',
    component: ScoreboardSecondRouteComponent,
  },
];

@NgModule({
  declarations: [
    ScoreboardContainerComponent,
    ScoreboardFirstRouteComponent,
    ScoreboardSecondRouteComponent,
    ScoreboardComponent,
  ],
  exports: [ScoreboardContainerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
      serializer: CustomSerializer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      // logOnly: environment.production,
    }),
  ],
  entryComponents: [ScoreboardContainerComponent],
})
export class ScoreboardModule implements LoadableApp {
  EntryComponent = ScoreboardContainerComponent;
}
