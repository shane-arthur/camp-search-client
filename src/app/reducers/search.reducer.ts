import { SearchDetails } from './../models/search.interface';
import * as searchActions from './../actions/search.actions';

export interface SearchState {
    searchDetails: SearchDetails;
}

export const nullState: SearchState = {
    searchDetails: null
};

export const initialState = ((): SearchState => {
    return nullState;
})();

export function reducer(state = initialState, action: searchActions.Actions): SearchState {
  switch (action.type) {
    case searchActions.LOAD_SEARCH_RESULTS_SUCCESS: {
        return {...state, searchDetails: action.payload };
    }

    default: {
        return state;
    }
  }
}
