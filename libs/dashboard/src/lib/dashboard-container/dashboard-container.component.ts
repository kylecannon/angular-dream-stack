import { Component, Inject } from '@angular/core';
import { AvailableApps } from '../available-apps';
import * as uuid from 'uuid';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { AppRegistration } from '@angular-dream/app-utils';
import { AVAILABLE_APPS } from '../../tokens';

type PlacedApp = AppRegistration & { id: string };
type AvailableApps = { [appName: string]: AppRegistration };
@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  // Disabled changeDetection due to the fact that the tour of heros needs Zone.js to properly work.
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent {
  availableApps: AvailableApps = {};
  placedApps: PlacedApp[] = [];

  constructor(
    @Inject(AVAILABLE_APPS)
    availableApps: { [appName: string]: AppRegistration },
    public store$: Store<State>
  ) {
    this.availableApps = availableApps;
  }

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

  removeApp(id: string) {
    const indexToRemove = this.placedApps.findIndex(
      (potent) => potent.id === id
    );
    this.placedApps = [
      ...this.placedApps.slice(0, indexToRemove),
      ...this.placedApps.slice(indexToRemove + 1),
    ];
  }
}
