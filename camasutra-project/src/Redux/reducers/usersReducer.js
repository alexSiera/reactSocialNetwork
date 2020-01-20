import {usersAPI} from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SELECT_PAGE = 'SELECT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL-USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentSelectedPage: 1,
    isFetching: false,
    followingInProgress: [],
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u;
                })
            }
            break;
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
            }
            break;
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
            break;
        case SELECT_PAGE:
            return {
                ...state,
                currentSelectedPage: action.pageNum
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount - 1600
            }


        break;
        case TOGGLE_IS_FETCHING:
            if(action.fetching === true) {
                return {
                    ...state,
                    isFetching: true
                }
            }
            else {
                return {
                    ...state,
                    isFetching: false
                }
            }

            break;
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
                return {
                    ...state,
                    followingInProgress: action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id !== action.userId)
                }
            break

        default: return state;
    }
}
export const followAC = userId => ({type: FOLLOW, userId });
export const unfollowAC = userId => ({type: UNFOLLOW, userId});
export const setUsersAC = users => ({type: SET_USERS, users})
export const selectPageAC = pageNumber => ({type: SELECT_PAGE, pageNum: pageNumber});
export const setTotalUsersCountAC = usersCount => ({type:SET_TOTAL_USERS_COUNT, totalUsersCount: usersCount });
export const toggleFetchingAC = fetching => ({type: TOGGLE_IS_FETCHING, fetching});
export const toggleFollowingProgressAC = (userId, isFetching) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, userId, isFetching});

export default userReducer;

export const requestUsersThunkCreator = (page =1, pageSize = 4) => {
    return (dispatch) => {
        dispatch(toggleFetchingAC(true));
        dispatch(selectPageAC(page));
        usersAPI.getUsers(page, pageSize)
            .then(users => {
                dispatch(toggleFetchingAC(false));
                dispatch(setUsersAC(users.items));
                dispatch(setTotalUsersCountAC(users.totalCount));
            }).catch(e => (console.log(e)));
    }
}
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressAC(userId, true));
            usersAPI.subscribe(userId).then(statusCode => {
                if (statusCode === 0) dispatch(followAC(userId));
                dispatch(toggleFollowingProgressAC(userId, false));
            });
    }
}
export const unFollowThunkCreator = (userId) => {
    return (dispatch) => {
            dispatch(toggleFollowingProgressAC(userId, true));
            usersAPI.unSubscribe(userId).then(statusCode => {
                if (statusCode === 0) dispatch(unfollowAC(userId));
                dispatch(toggleFollowingProgressAC(userId, false));
            });
        }

    }





// const initialState  = {
//     users: [{
//         id: 1,
//         userName: {
//             firstName: 'Alex',
//             lastName: 'K',
//             nickname: 'AK'
//         },
//         photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg',
//         status: 'I am looking for a job right now',
//         creationTime: Date.now(),
//         followed: false,
//         location: {
//             country: 'Belarus',
//             region: '',
//             city: 'Minks',
//         },
//     },
//         {
//             id: 2,
//             userName: {
//                 firstName: 'German',
//                 lastName: 'Fauler',
//                 nickname: 'GF'
//             },
//             status: 'No i don\'t understand',
//             creationTime: Date.now(),
//             followed: true,
//             photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg',
//             subscribes: [],
//             location: {
//                 country: 'Chernobyl',
//                 region: '',
//                 city: 'Pripyat',
//             },
//         },
//         {
//             id: 3,
//             userName: {
//                 firstName: 'Danil',
//                 lastName: 'B',
//                 nickname: 'DB'
//             },
//             status: 'I\'am boss',
//             creationTime: Date.now(),
//             followed: true,
//             photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg',
//             location: {
//                 country: 'Russia',
//                 region: '',
//                 city: 'Yalta',
//             },
//         },
//         {
//             id: 4,
//             userName: {
//                 firstName: 'Tanya',
//                 lastName: 'Ogogo',
//                 nickname: 'TB'
//             },
//             status: 'Hello i\'am Tanya',
//             creationTime: Date.now(),
//             photoUrl: 'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602735.jpg',
//             followed: true,
//             location: {
//                 country: 'Russia',
//                 region: 'Rostov-on-Don',
//                 city: 'Taganrog',
//             },
//         }]
// }
// const initialState = {};