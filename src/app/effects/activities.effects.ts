import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
// Import data services
import { HttpHelperService } from './../services/http-helper.service';
// Import actions
import * as activityActions from './../actions/activities.actions'
// Import URL constants
import { apiUrls } from './../constants/api-constants';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ActivitiesEffects {
  @Effect()
  loadActivities$ = this.actions$.pipe(
    ofType<activityActions.LoadActivities>(activityActions.LOAD_ACTIVITIES),
    switchMap((action) => {
      /* tslint:disable-next-line */
      return this.service.get(apiUrls.BASE_URL + apiUrls.GET_ACTIVITIES)
        .pipe(
          map((results: any) => {
            return new activityActions.LoadActivitiesSucess(results.data);
          }),
          catchError(err => {
            return of({});
          })
        );
    })
  );

  @Effect()
  loadCampsPerActivity$ = this.actions$.pipe(
    ofType<activityActions.LoadCampsPerActivity>(activityActions.LOAD_CAMPS_PER_ACTIVITY),
    switchMap((action) => {
      /* tslint:disable-next-line */
      return this.service.get(apiUrls.BASE_URL + apiUrls.GET_CAMPS_PER_ACTIVITY(action.activityId))
        .pipe(
          map((results: any) => {
            return new activityActions.LoadCampsPerActivitySucess(action.activityId, results)
          }),
          catchError(err => {
            return of({});
          })
        );
    })
  );


  constructor(
    private actions$: Actions,
    private service: HttpHelperService
  ) { }
}
