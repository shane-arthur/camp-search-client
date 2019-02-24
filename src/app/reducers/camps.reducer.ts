import { ICampData } from '../models/camp.interface';
import * as campActions from '../actions/camp.actions';

export interface CampState {
}

export const nullState: CampState = {
};

export const initialState = ((): CampState => {
    return nullState;
})();

export function reducer(state = initialState, action: campActions.Actions): CampState {
    switch (action.type) {

        case campActions.LOAD_CAMP_DETAILS_SUCESS: {
            return {...state, [action.id]: action.campDetails}
        }

        default: {
            return state;
        }
    }
}
