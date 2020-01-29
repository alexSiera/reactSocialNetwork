import {
    FOLLOW,
    SELECT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    UNFOLLOW,
    UsersActionTypes,
    UsersState
} from "./types";
import {updateObjectInArray} from "../../../utils/objectHelpers";


const initialState: UsersState = {
    users: [{
        name: '',
        id: 0,
        photos: {
            small: '',
            large: ''
        },
        uniqueUrlName: null,
        status: '',
        followed: false
    }],
    pageSize: 5,
    totalUsersCount: 0,
    currentSelectedPage: 1,
    isFetching: false,
    followingInProgress: [],
};
const usersReducer = (state = initialState, action: UsersActionTypes): UsersState => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, "id", {followed: true})
            };
        case UNFOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload, "id", {followed: false})
            };
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case SELECT_PAGE:
            return {
                ...state,
                currentSelectedPage: action.payload
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.payload
            };
        case TOGGLE_IS_FETCHING:
            if (action.payload) {
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
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            };
        default:
            return state;
    }
};
export default usersReducer;