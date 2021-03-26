import { Component } from '@angular/core';
import { AvailableApps } from '../available-apps';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { AppRegistration } from '@angular-dream/app-utils';

type PlacedApp = AppRegistration & { id: string };

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  // Disabled changeDetection due to the fact that the tour of heros needs Zone.js to properly work.
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent {
  readonly availableApps = AvailableApps.reduce(
    (acc, appRegistration) => ({
      ...acc,
      [appRegistration.name]: appRegistration,
    }),
    {}
  );
  placedApps: PlacedApp[] = [];

  constructor(public store$: Store<State>) {}

  trackByIdx(idx: number) {
    return idx;
  }

  trackByUuid(idx: number, item: PlacedApp) {
    return item.id;
  }

  addApp(appKey: string) {
    this.placedApps = [
      { ...this.availableApps[appKey], id: uuid.v4() },
      ...this.placedApps,
    ];
  }

  removeApp(uuid: string) {
    const indexToRemove = this.placedApps.findIndex(
      (potent) => potent.id === uuid
    );
    this.placedApps = [
      ...this.placedApps.slice(0, indexToRemove),
      ...this.placedApps.slice(indexToRemove + 1),
    ];
  }
}
