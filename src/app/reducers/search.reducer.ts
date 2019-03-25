import { SearchDetails } from './../models/search.interface';
import * as searchActions from './../actions/search.actions';

export interface SearchState {
    searchDetails: SearchDetails;
    loading: boolean;
}

export const nullState: SearchState = {
    searchDetails: null,
    loading: undefined
};

export const initialState = ((): SearchState => {
    return nullState;
})();

export function reducer(state = initialState, action: searchActions.Actions): SearchState {
  switch (action.type) {
    case searchActions.LOAD_SEARCH_RESULTS: {
        return {...state, loading: true };
    }
    case searchActions.LOAD_SEARCH_RESULTS_SUCCESS: {
        return {...state, loading: false, searchDetails: action.payload };
    }
    case searchActions.LOAD_SEARCH_RESULTS_ERROR: {
        return {...state, loading: false };
    }
    default: {
        return state;
    }
  }
}
