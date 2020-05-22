import { usersAPI } from '../../api/api';
import { updateObjectInArray } from '../../utils/objectHelpers';
import { UserType } from '../../types/types';
import { AppStateType, InferActionsTypes } from '../reduxStore';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentSelectedPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // Array o users ids
};
export type InitialStateType = typeof initialState;
const userReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.users,
            };
        case 'SELECT_PAGE':
            return {
                ...state,
                currentSelectedPage: action.pageNum,
            };

        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case 'TOGGLE_IS_FETCHING':
            if (action.fetching) {
                return {
                    ...state,
                    isFetching: true,
                };
            } else {
                return {
                    ...state,
                    isFetching: false,
                };
            }
        case 'TOGGLE_IS_FOLLOWING_IN_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId),
            };
        default:
            return state;
    }
};

export const actions = {
    followAC: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    unfollowAC: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    setUsersAC: (users: Array<UserType>) => ({ type: 'SET_USERS', users } as const),
    selectPageAC: (pageNumber: number) => ({ type: 'SELECT_PAGE', pageNum: pageNumber } as const),
    setTotalUsersCountAC: (usersCount: number) =>
        ({
            type: 'SET_TOTAL_USERS_COUNT',
            totalUsersCount: usersCount,
        } as const),
    toggleFetchingAC: (fetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', fetching } as const),
    toggleFollowingProgressAC: (userId: number, isFetching: boolean) =>
        ({
            type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS',
            userId,
            isFetching,
        } as const),
};
type ActionsTypes = InferActionsTypes<typeof actions>;

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
type ApiMethodSubscribeUnsubscribe = typeof usersAPI.subscribe | typeof usersAPI.unSubscribe;
export const requestUsersThunkCreator = (page = 1, pageSize = 4) => async (
    dispatch: DispatchType,
    getState: () => GetStateType,
): Promise<void> => {
    dispatch(actions.selectPageAC(page));
    dispatch(actions.toggleFetchingAC(true));
    try {
        const users = await usersAPI.getUsers(page, pageSize);
        if (users) {
            dispatch(actions.toggleFetchingAC(false));
            dispatch(actions.setUsersAC(users.items));
            dispatch(actions.setTotalUsersCountAC(users.totalCount));
        }
    } catch (e) {
        console.log(e);
    }
};
const _followUnfollowFlow = async (
    dispatch: DispatchType,
    userId: number,
    apiMethod: ApiMethodSubscribeUnsubscribe,
    actionCreator: (userId: number) => ActionsTypes,
): Promise<void> => {
    try {
        dispatch(actions.toggleFollowingProgressAC(userId, true));
        const statusCode = await apiMethod(userId);
        if (statusCode?.resultCode === 0) dispatch(actionCreator(userId));
        dispatch(actions.toggleFollowingProgressAC(userId, false));
    } catch (e) {
        console.log(e);
    }
};

export const followThunkCreator = (userId: number): ThunkType => {
    return async (dispatch): Promise<void> => {
        try {
            await _followUnfollowFlow(dispatch, userId, usersAPI.subscribe.bind(usersAPI), actions.followAC);
        } catch (e) {
            console.log(e);
        }
    };
};
export const unFollowThunkCreator = (userId: number): ThunkType => async (dispatch): Promise<void> => {
    try {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unSubscribe.bind(usersAPI), actions.unfollowAC);
    } catch (e) {
        console.log(e);
    }
};
export default userReducer;
