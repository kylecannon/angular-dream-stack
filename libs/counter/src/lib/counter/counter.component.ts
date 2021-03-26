import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { decrementCount, incrementCount } from '../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  count$ = this.store$.pipe(select((state) => state.counter.count));

  constructor(private store$: Store<State>) {}

  incrementCount() {
    this.store$.dispatch(incrementCount());
  }

  decrementCount() {
    this.store$.dispatch(decrementCount());
  }
}
