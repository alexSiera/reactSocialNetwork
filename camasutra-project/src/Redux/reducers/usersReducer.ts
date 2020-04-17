import { usersAPI } from '../../api/api';
import { updateObjectInArray } from '../../utils/objectHelpers';
import { UserType } from '../../types/types';
import { AppStateType } from '../reduxStore';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SELECT_PAGE = 'users/SELECT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL-USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS';
type ActionsTypes =
    | FollowACType
    | UnfollowACType
    | SetUsersACType
    | SelectPageACType
    | SetTotalUsersCountACType
    | ToggleFetchingACType
    | ToggleFollowingProgressACType;
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
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SELECT_PAGE:
            return {
                ...state,
                currentSelectedPage: action.pageNum,
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case TOGGLE_IS_FETCHING:
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
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
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
type FollowACType = { type: typeof FOLLOW; userId: number };
type UnfollowACType = { type: typeof UNFOLLOW; userId: number };
type SetUsersACType = { type: typeof SET_USERS; users: Array<UserType> };
type SelectPageACType = { type: typeof SELECT_PAGE; pageNum: number };
type SetTotalUsersCountACType = { type: typeof SET_TOTAL_USERS_COUNT; totalUsersCount: number };
type ToggleFetchingACType = { type: typeof TOGGLE_IS_FETCHING; fetching: boolean };
type ToggleFollowingProgressACType = {
    type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS;
    userId: number;
    isFetching: boolean;
};

export const followAC = (userId: number): FollowACType => ({ type: FOLLOW, userId });
export const unfollowAC = (userId: number): UnfollowACType => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users: Array<UserType>): SetUsersACType => ({ type: SET_USERS, users });
export const selectPageAC = (pageNumber: number): SelectPageACType => ({ type: SELECT_PAGE, pageNum: pageNumber });
export const setTotalUsersCountAC = (usersCount: number): SetTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: usersCount,
});
export const toggleFetchingAC = (fetching: boolean): ToggleFetchingACType => ({ type: TOGGLE_IS_FETCHING, fetching });
export const toggleFollowingProgressAC = (userId: number, isFetching: boolean): ToggleFollowingProgressACType => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    userId,
    isFetching,
});
type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
type ApiMethodSubscribeUnsubscribe = typeof usersAPI.subscribe | typeof usersAPI.unSubscribe;
export const requestUsersThunkCreator = (page = 1, pageSize = 4) => async (
    dispatch: DispatchType,
    getState: () => GetStateType,
): Promise<void> => {
    dispatch(selectPageAC(page));
    dispatch(toggleFetchingAC(true));
    try {
        const users = await usersAPI.getUsers(page, pageSize);
        if (users) {
            dispatch(toggleFetchingAC(false));
            dispatch(setUsersAC(users.items));
            dispatch(setTotalUsersCountAC(users.totalCount));
        }
    } catch (e) {
        console.log(e);
    }
};
const _followUnfollowFlow = async (
    dispatch: DispatchType,
    userId: number,
    apiMethod: ApiMethodSubscribeUnsubscribe,
    actionCreator: (userId: number) => FollowACType | UnfollowACType,
): Promise<void> => {
    try {
        dispatch(toggleFollowingProgressAC(userId, true));
        const statusCode = await apiMethod(userId);
        if (statusCode?.resultCode === 0) dispatch(actionCreator(userId));
        dispatch(toggleFollowingProgressAC(userId, false));
    } catch (e) {
        console.log(e);
    }
};

export const followThunkCreator = (userId: number): ThunkType => {
    return async (dispatch): Promise<void> => {
        try {
            await _followUnfollowFlow(dispatch, userId, usersAPI.subscribe.bind(usersAPI), followAC);
        } catch (e) {
            console.log(e);
        }
    };
};
export const unFollowThunkCreator = (userId: number): ThunkType => async (dispatch): Promise<void> => {
    try {
        await _followUnfollowFlow(dispatch, userId, usersAPI.unSubscribe.bind(usersAPI), unfollowAC);
    } catch (e) {
        console.log(e);
    }
};
export default userReducer;
