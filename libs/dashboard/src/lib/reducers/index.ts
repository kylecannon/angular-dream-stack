import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  router: any;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
