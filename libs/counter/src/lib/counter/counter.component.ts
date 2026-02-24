import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { decrementCount, incrementCount } from '../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CounterComponent {
  count$ = this.store$.select((state) => state.counter.count);

  constructor(private store$: Store<State>) {}

  incrementCount() {
    this.store$.dispatch(incrementCount());
  }

  decrementCount() {
    this.store$.dispatch(decrementCount());
  }
}
