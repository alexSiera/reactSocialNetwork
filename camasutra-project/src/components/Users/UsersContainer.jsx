import React from 'react';
import {followAC, selectPageAC, setUsersAC, unfollowAC} from "../../Redux/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentSelectedPage: state.usersPage.currentSelectedPage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch(followAC(userId)),
        unfollow: userId => dispatch(unfollowAC(userId)),
        setUsers: users => dispatch(setUsersAC(users)),
        selectPage: pageNum => dispatch(selectPageAC(pageNum))
    }
}
const usersContainers = connect(mapStateToProps, mapDispatchToProps)(Users);
export default usersContainers;