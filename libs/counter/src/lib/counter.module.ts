import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { CounterFirstRouteComponent } from './counter-first-route/counter-first-route.component';
import { CounterSecondRouteComponent } from './counter-second-route/counter-second-route.component';
import { Route, RouterModule } from '@angular/router';
import { LoadableApp } from '@angular-dream/app-utils';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { CounterComponent } from './counter/counter.component';
import { MatButtonModule } from '@angular/material/button';
import { metaReducers } from './reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './custom-route-serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const routes: Route[] = [
  {
    path: 'first',
    component: CounterFirstRouteComponent,
  },
  {
    path: 'second',
    component: CounterSecondRouteComponent,
  },
];

@NgModule({
  declarations: [
    CounterContainerComponent,
    CounterFirstRouteComponent,
    CounterSecondRouteComponent,
    CounterComponent,
  ],
  exports: [CounterContainerComponent],
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
  entryComponents: [CounterContainerComponent],
})
export class CounterModule implements LoadableApp {
  EntryComponent = CounterContainerComponent;
}
