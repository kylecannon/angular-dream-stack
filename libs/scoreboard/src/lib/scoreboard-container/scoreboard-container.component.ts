import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-scoreboard-container',
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreboardContainerComponent {
  constructor(public store$: Store<State>) {}
}
