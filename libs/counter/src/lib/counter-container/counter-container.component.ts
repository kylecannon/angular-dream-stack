import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterContainerComponent {
  constructor(public readonly store$: Store<State>) {}
}
