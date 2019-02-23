import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
// Import data services
import { HttpHelperService } from './../services/http-helper.service';
// Import actions
import { LoadSearchResults, LoadSearchResultsSuccess, LoadSearchResultsError, LOAD_SEARCH_RESULTS } from './../actions/search.actions';
// Import models
import { SearchDetails } from './../models/search.interface';
// Import URL constants
import { apiUrls } from './../constants/api-constants';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class SearchEffects {
    @Effect()
    loadSearchResults$ = this.actions$.pipe(
      ofType<LoadSearchResults>(LOAD_SEARCH_RESULTS),
      switchMap((action) => {
        /* tslint:disable-next-line */
        return this.service
        .post(apiUrls.BASE_URL + apiUrls.CAMP_SEARCH, action.searchRequest)
        .pipe(
          map((results: SearchDetails) => {
            return new LoadSearchResultsSuccess(results);
          }),
          catchError(err => {
            return of(new LoadSearchResultsError());
          })
        );
      })
    );

    constructor(
        private actions$: Actions,
        private service: HttpHelperService
    ) { }
}
