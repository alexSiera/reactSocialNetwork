
// Describing the different ACTION NAMES available
export const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
// Describing the shape of the app's slice of state
interface Initializing {
    initialized: boolean
}
export interface ApplicationState {
    initialized: boolean
}
interface InitilizingApp {
    type: typeof INITIALIZED_SUCCESS;
    payload: Initializing;
}
type AppActionTypes = InitilizingApp;
export default AppActionTypes