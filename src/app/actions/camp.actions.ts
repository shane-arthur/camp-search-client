import { Action } from '@ngrx/store';
import { Activity } from '../models/activities.interface';
// Import models
// import { SearchDetails, SearchRequest } from './../models/search.interface';
// Specify constants for search result and keywords
export const LOAD_CAMP_DETAILS = '[camp] Load camp details';
export const LOAD_CAMP_DETAILS_SUCESS = '[camp] Load camp details sucess';
export const LOAD_CAMP_DETAILS_ERROR = '[camp] Load camp details error';


export class LoadCampDetails implements Action {
    readonly type = LOAD_CAMP_DETAILS
    constructor(public campId: string) { }
}

export class LoadCampDetailsSucess implements Action {
    readonly type = LOAD_CAMP_DETAILS_SUCESS;
    constructor(public id: string, public campDetails: any) { }
}

export class LoadCampDetailsError implements Action {
    readonly type = LOAD_CAMP_DETAILS_ERROR;
    constructor() { }
}


export type Actions = LoadCampDetails | LoadCampDetailsSucess | LoadCampDetailsError;