import React from 'react';
import {followAC, setUsersAc, unfollowAC} from "../../Redux/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = state => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch(followAC(userId)),
        unfollow: userId => dispatch(unfollowAC(userId)),
        setUsers: users => dispatch(setUsersAc(users))
    }
}
const usersContainers = connect(mapStateToProps, mapDispatchToProps)(Users);
export default usersContainers;