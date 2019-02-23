import { ICampData } from '../models/camp.interface';
import * as campActions from '../actions/camp.actions';

export interface CampState {
    camps: {}
}

export const nullState: CampState = {
    camps: {}
};

export const initialState = ((): CampState => {
    return nullState;
})();

export function reducer(state = initialState, action: campActions.Actions): CampState {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
