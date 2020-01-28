// Describing the different ACTION NAMES available
export const FOLLOW = 'users/FOLLOW';
export const UNFOLLOW = 'users/UNFOLLOW';
export const SET_USERS = 'users/SET_USERS';
export const SELECT_PAGE = 'users/SELECT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL-USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS';
// Describing the shape of the app's slice of state
export interface Initializing {
    initialized: boolean
}
export interface UsersState {
    users: Array<Users>,
    pageSize: number
    totalUsersCount: number
    currentSelectedPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export interface Users {
    name: string | null
    id: number | null
    photos: {
        small: string | null
        large: string | null
    }
    uniqueUrlName: any | null
    status: string | null
    followed: boolean | null
}

interface FollowingProgressItems {
    userId: number,
    isFetching: boolean
}

interface followAC {
    type: typeof FOLLOW,
    payload: number
}
interface unfollowAC {
    type: typeof UNFOLLOW,
    payload: number
}
interface setUsersAC {
    type: typeof SET_USERS,
    payload: Users
}
interface selectPageAC {
    type: typeof SELECT_PAGE,
    payload: number
}
interface setTotalUsersCountAC {
    type: typeof SET_TOTAL_USERS_COUNT,
    payload: number
}
interface toggleFetchingAC {
    type: typeof TOGGLE_IS_FETCHING,
    payload: boolean
}
interface toggleFollowingProgressAC {
    type: typeof TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    payload: FollowingProgressItems
}

export type UsersActionTypes = followAC | unfollowAC | setUsersAC | setTotalUsersCountAC | selectPageAC | toggleFetchingAC | toggleFollowingProgressAC;
