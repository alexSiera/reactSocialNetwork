
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