
// Describing the different ACTION NAMES available
export const ADD_DIALOG = 'dialogs/ADD_DIALOG';
// Describing the shape of the app's slice of state

export interface DialogsState {
    messagesData: Array<messageData>
    dialogsData: Array<dialogsData>
}

export interface messageData {
    id: number,
    message: string,
    likesCount: number
}
export interface dialogsData {
    id: number,
    name: string
}
interface AddDialogAC {
    type: typeof ADD_DIALOG;
    payload: string;
}
export type DialogsActionTypes = AddDialogAC;
