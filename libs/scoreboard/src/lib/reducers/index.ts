import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import {
  scoreboardReducer,
  State as ScoreboardState,
} from './scoreboard.reducer';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  scoreboard: ScoreboardState;
  router: any;
}

export const reducers: ActionReducerMap<State> = {
  scoreboard: scoreboardReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
