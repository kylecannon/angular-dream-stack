import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { State } from '../reducers';
import { awayScore, homeScore } from '../actions/scoreboard-page.actions';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ScoreboardComponent {
  scoreboard$ = this.store$.select((state) => state.scoreboard);
  homeScore$ = this.scoreboard$.pipe(map((state) => state.home));
  awayScore$ = this.scoreboard$.pipe(map((state) => state.away));

  constructor(private store$: Store<State>) {}

  addPointToHome() {
    this.store$.dispatch(homeScore());
  }

  addPointToAway() {
    this.store$.dispatch(awayScore());
  }
}
