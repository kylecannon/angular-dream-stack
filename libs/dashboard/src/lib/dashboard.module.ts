import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { Route, RouterModule } from '@angular/router';
import { LoadableApp, AppUtilsModule } from '@angular-dream/app-utils';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { metaReducers } from './reducers';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './custom-route-serializer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatListModule } from '@angular/material/list';
import { FeatureAppViewModule } from '@angular-dream/feature-app-view';

const routes: Route[] = [
  {
    path: '',
    component: DashboardContainerComponent,
  },
];

@NgModule({
  declarations: [DashboardContainerComponent],
  exports: [DashboardContainerComponent],
  imports: [
    FeatureAppViewModule,
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    // StoreRouterConnectingModule.forRoot({
    //   routerState: RouterState.Minimal,
    //   serializer: CustomSerializer,
    // }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    RouterModule.forChild(routes),
    AppUtilsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
})
export class DashboardModule implements LoadableApp {
  EntryComponent = DashboardContainerComponent;
}
