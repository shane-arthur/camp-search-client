import { Action } from '@ngrx/store';
// Import models
import { SearchDetails, SearchRequest } from './../models/search.interface';
// Specify constants for search result and keywords
export const LOAD_SEARCH_RESULTS = '[search] Load search results';
export const LOAD_SEARCH_RESULTS_SUCCESS = '[search] Load search results success';
export const LOAD_SEARCH_RESULTS_ERROR = '[search] Load search results failure';

export class LoadSearchResults implements Action {
  readonly type = LOAD_SEARCH_RESULTS;
  constructor(public searchRequest: SearchRequest) { }
}

export class LoadSearchResultsSuccess implements Action {
  readonly type = LOAD_SEARCH_RESULTS_SUCCESS;
  constructor(public payload: SearchDetails) { }
}

export class LoadSearchResultsError implements Action {
  readonly type = LOAD_SEARCH_RESULTS_ERROR;
  constructor() { }
}

export type Actions = LoadSearchResults| LoadSearchResultsSuccess| LoadSearchResultsError;
