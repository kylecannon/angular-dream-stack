import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { counterReducer, State as CounterState } from './counter.reducer';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  counter: CounterState;
  router: any;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
