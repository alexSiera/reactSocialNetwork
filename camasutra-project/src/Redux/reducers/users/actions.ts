import {
    FOLLOW,
    SELECT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    UNFOLLOW, Users
} from "./types";

export const followAC = (userId: number) => ({type: FOLLOW, payload: userId});
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, payload: userId});
export const setUsersAC = (users: Users) => ({type: SET_USERS, payload: users});
export const selectPageAC = (pageNumber: number) => ({type: SELECT_PAGE, payload: pageNumber});
export const setTotalUsersCountAC = (usersCount: number) => ({type: SET_TOTAL_USERS_COUNT, payload: usersCount});
export const toggleFetchingAC = (fetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: fetching});
export const toggleFollowingProgressAC = (userId: number, isFetching: boolean) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    payload: userId, isFetching
});