
import {AppActionTypes, ApplicationState, INITIALIZED_SUCCESS} from "./types";

const initialState: ApplicationState = {
    initialized: false
};
const appReducer = (state = initialState, action: AppActionTypes): ApplicationState => {
    switch (action.type) {
        case INITIALIZED_SUCCESS :
            return {
                ...state,
                initialized: true
            };
        default: return state;
    }
};
export default appReducer;