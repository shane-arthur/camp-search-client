import { Action } from '@ngrx/store';
import { Activity } from '../models/activities.interface';
// Import models
// import { SearchDetails, SearchRequest } from './../models/search.interface';
// Specify constants for search result and keywords
export const LOAD_ACTIVITIES = '[search] Load activities';
export const LOAD_ACTIVITIES_SUCESS = '[search] Load search activities success';
export const LOAD_ACTIVITIES_ERROR = '[search] Load activities error';
export const LOAD_CAMPS_PER_ACTIVITY = '[search] Load camps per activity';
export const LOAD_CAMPS_PER_ACTIVITY_SUCESS = '[search] Load camps per activity Sucess'
export const LOAD_CAMPS_PER_ACTIVITY_ERROR = '[search] Load camps per activity Error'


export class LoadActivities implements Action {
  readonly type = LOAD_ACTIVITIES
  constructor() { }
}

export class LoadActivitiesSucess implements Action {
  readonly type = LOAD_ACTIVITIES_SUCESS;
  constructor(public activities: Activity[]) { }
}

export class LoadActivitiesError implements Action {
  readonly type = LOAD_ACTIVITIES_ERROR;
  constructor() { }
}

export class LoadCampsPerActivity implements Action {
  readonly type = LOAD_CAMPS_PER_ACTIVITY
  constructor(public activityId: string) { }
}

export class LoadCampsPerActivitySucess implements Action {
  readonly type = LOAD_CAMPS_PER_ACTIVITY_SUCESS
  constructor(public activityId: string, public camps: any) { }
}

export class LoadCampsPerActivityError implements Action {
  readonly type = LOAD_CAMPS_PER_ACTIVITY_ERROR
  constructor(public error: any) { }
}

export type Actions = LoadActivities | LoadActivitiesSucess | LoadActivitiesError | LoadCampsPerActivity |
  LoadCampsPerActivitySucess | LoadCampsPerActivityError;
