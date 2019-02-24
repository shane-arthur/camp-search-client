import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';

import * as fromSearch from './search.reducer';
import * as fromActivities from './activities.reducer';
import * as fromCamp from './camps.reducer';

import { Activity } from '../models/activities.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchDetails } from '../models/search.interface';

// add in any global state items we want here
export interface State {
  search: fromSearch.SearchState;
  activity: fromActivities.ActivityState;
  camps: fromCamp.CampState;
}

export const reducers: ActionReducerMap<State> = {
  search: fromSearch.reducer,
  activity: fromActivities.reducer,
  camps: fromCamp.reducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return reducer;
}

export const metaReducers: MetaReducer<State>[] = [localStorageSyncReducer];
export const getSearch = (state: any): SearchDetails => state.search.search.searchDetails;
export const getActivities = (state: any): Activity[] => state.activity.activity.activities;


export const selectCampState = createFeatureSelector<State>('camp');

export const selectProductUnlocalizedById = (id: string) => createSelector(
  selectCampState,
  camps => camps ? camps.camps[id] : {});
