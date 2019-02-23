import * as activityActions from './../actions/activities.actions';
import { Activity } from '../models/activities.interface';

export interface ActivityState {
    activities: Activity[];
}

export const nullState: ActivityState = {
    activities: []
};

export const initialState = ((): ActivityState => {
    return nullState;
})();

export function reducer(state = initialState, action: activityActions.Actions): ActivityState {
    switch (action.type) {
        case activityActions.LOAD_ACTIVITIES_SUCESS: {
            return { ...state, activities: action.activities };
        }

        case activityActions.LOAD_CAMPS_PER_ACTIVITY_SUCESS: {
            const activityIndex = state.activities.findIndex(activity => activity.id === action.activityId);
            const activity = state.activities[activityIndex];
            activity.camps = <any>action.camps.data;

            const activities = [ ...state.activities ];
            activities[activityIndex] = activity;
            return {...state, activities };
        }

        default: {
            return state;
        }
    }
}
