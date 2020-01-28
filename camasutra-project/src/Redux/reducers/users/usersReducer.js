import {usersAPI} from "../../../api/api";
import {updateObjectInArray} from "../../../utils/objectHelpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SELECT_PAGE = 'users/SELECT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL-USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentSelectedPage: 1,
    isFetching: false,
    followingInProgress: [],
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SELECT_PAGE:
            return {
                ...state,
                currentSelectedPage: action.pageNum
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            if (action.fetching === true) {
                return {
                    ...state,
                    isFetching: true
                }
            } else {
                return {
                    ...state,
                    isFetching: false
                }
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}
export const followAC = userId => ({type: FOLLOW, userId});
export const unfollowAC = userId => ({type: UNFOLLOW, userId});
export const setUsersAC = users => ({type: SET_USERS, users})
export const selectPageAC = pageNumber => ({type: SELECT_PAGE, pageNum: pageNumber});
export const setTotalUsersCountAC = usersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: usersCount});
export const toggleFetchingAC = fetching => ({type: TOGGLE_IS_FETCHING, fetching});
export const toggleFollowingProgressAC = (userId, isFetching) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    userId,
    isFetching
});

export default userReducer;

export const requestUsersThunkCreator = (page = 1, pageSize = 4) => async (dispatch) => {
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
const followUnfollowFlow = async (dispatch, userId, apiMethod , actionCreator) => {
    try {
        dispatch(toggleFollowingProgressAC(userId, true));
        const statusCode = await apiMethod(userId);
        if (statusCode === 0) dispatch(actionCreator(userId));
        dispatch(toggleFollowingProgressAC(userId, false));
    } catch (e) {
        console.log(e);
    }
};

export const followThunkCreator = (userId) => async (dispatch) => {
    try {
        followUnfollowFlow(dispatch,userId,usersAPI.subscribe.bind(usersAPI),followAC);
    } catch (e) {
        console.log(e);
    }
};
export const unFollowThunkCreator = (userId) => async (dispatch) => {
    try {
        followUnfollowFlow(dispatch,userId,usersAPI.unSubscribe.bind(usersAPI),unfollowAC);

    } catch (e) {
        console.log(e);
    }
};
