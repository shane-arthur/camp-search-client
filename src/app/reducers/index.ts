import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';

import * as fromSearch from './search.reducer';
import * as fromActivities from './activities.reducer';

import { Activity } from '../models/activities.interface';

// add in any global state items we want here
export interface State {
  search: fromSearch.SearchState;
  activity: fromActivities.ActivityState;
}

export const reducers: ActionReducerMap<State> = {
  search: fromSearch.reducer,
  activity: fromActivities.reducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return reducer;
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
export const getSearch = (state: State): fromSearch.SearchState => state.search;
export const getActivities = (state: any): Activity[] => state.activity.activity.activities;