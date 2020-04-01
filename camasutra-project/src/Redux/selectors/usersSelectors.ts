import { createSelector } from 'reselect';
import { AppStateType } from '../reduxStore';
export const getUsersSelector = (state: AppStateType): typeof state.usersPage.users => {
    return state.usersPage.users;
};

export const getPageSize = (state: AppStateType): typeof state.usersPage.pageSize => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state: AppStateType): typeof state.usersPage.totalUsersCount => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentSelectedPage = (state: AppStateType): typeof state.usersPage.currentSelectedPage => {
    return state.usersPage.currentSelectedPage;
};
export const getIsFetching = (state: AppStateType): typeof state.usersPage.isFetching => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress = (state: AppStateType): typeof state.usersPage.followingInProgress => {
    return state.usersPage.followingInProgress;
};
export const getUsers = createSelector(getUsersSelector, getIsFetching, (users, isFetching): typeof users => {
    return users;
});

// export const countSomethingDifficult= (state) => {
//     //for... math... big array
//     let count = 23;
//     return count;
//     return state.usersPage.followingInProgress;
// };
// export const getTempUsers= (state) => {
//     return state.usersPage.users.filter(u => true //that are in temperedArray);
// };
