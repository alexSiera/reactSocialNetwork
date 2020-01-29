import {ApplicationState} from "../reducers/app/types";

export const getInitialized = (app: ApplicationState): boolean => {
    return  app.initialized;
};