import { InferActionsTypes } from '../reduxStore';

type DialogType = {
  id: number;
  message: string;
  likesCount: number;
};
type MessageType = {
  id: number;
  message: string;
  name: string;
};
const initialState = {
  messagesData: [
    {
      id: 121,
      message: 'Ok!',
      likesCount: 12,
    },
    {
      id: 2221,
      message: 'Sure!',
      likesCount: 12,
    },
    {
      id: 3121,
      message: 'Hi dos',
      likesCount: 12,
    },
    {
      id: 4214,
      message: 'Killer',
      likesCount: 12,
    },
  ] as Array<DialogType>,
  dialogsData: [
    {
      id: 1321,
      name: 'Dimych',
    },
    {
      id: 2311,
      name: 'Alex',
    },
    {
      id: 3432,
      name: 'Anya',
    },
    {
      id: 412,
      name: 'Killer',
    },
  ] as Array<MessageType>,
};
export type InitialStateType = typeof initialState;
const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'ADD_DIALOG':
      const newDialog = {
        id: Math.floor(Math.random() * 100),
        message: action.newMessage,
        likesCount: Math.floor(Math.random() * 300),
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newDialog],
      };
    default:
      return state;
  }
};
export const actions = {
  addDialogAC: (newMessage: string) => {
    return {
      type: 'ADD_DIALOG',
      newMessage,
    };
  },
};
type ActionsTypes = InferActionsTypes<typeof actions>;

export default dialogsReducer;
