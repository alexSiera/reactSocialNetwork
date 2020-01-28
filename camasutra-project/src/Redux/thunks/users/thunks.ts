import {
    followAC,
    selectPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleFetchingAC,
    toggleFollowingProgressAC, unfollowAC
} from "../../reducers/users/actions";
import {usersAPI} from "../../../api/api";
import {ActionCreator, Dispatch} from "redux";

export const requestUsersThunkCreator = (page = 1, pageSize = 4) => async (dispatch: Dispatch) => {
    dispatch(selectPageAC(page));
    dispatch(toggleFetchingAC(true));
    try {
        const users = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleFetchingAC(false));
        dispatch(setUsersAC(users.items));
        dispatch(setTotalUsersCountAC(users.totalCount));
    } catch (e) {
        console.log(e);
    }
};
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => void, actionCreator: ActionCreator<any>) => {
    try {
        dispatch(toggleFollowingProgressAC(userId, true));
        const statusCode = await apiMethod(userId);
        // @ts-ignore
        if (statusCode === 0) dispatch(actionCreator(userId));
        dispatch(toggleFollowingProgressAC(userId, false));
    } catch (e) {
        console.log(e);
    }
};

export const followThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    try {
        followUnfollowFlow(dispatch,userId,usersAPI.subscribe.bind(usersAPI),followAC);
    } catch (e) {
        console.log(e);
    }
};
export const unFollowThunkCreator = (userId: number) => async (dispatch: Dispatch) => {
    try {
        followUnfollowFlow(dispatch,userId,usersAPI.unSubscribe.bind(usersAPI),unfollowAC);

    } catch (e) {
        console.log(e);
    }
};