import React, {Component} from 'react';
import {
    followAC as follow, followThunkCreator,unFollowThunkCreator, getUsersThunkCreator,
    selectPageAC as selectPage,
    setTotalUsersCountAC as setTotalUsersCount,
    setUsersAC as setUsers, toggleFetchingAC as toggleFetching, toggleFollowingProgressAC as toggleFollowingProgress,
    unfollowAC as unfollow
} from "../../Redux/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends Component {
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    onSubscribe = (userId) => {
        this.props.follow(userId);
        // this.props.toggleFollowingProgress(userId, true);
        // usersAPI.subscribe(userId).then(statusCode => {
        //     if (statusCode === 0) this.props.follow(userId);
        //     this.props.toggleFollowingProgress(userId, false);
        // });
    }
    onUnSubscribe = (userId) => {
        this.props.unfollow(userId);
        // this.props.toggleFollowingProgress(userId,true );
        // usersAPI.unSubscribe(userId).then(statusCode => {
        //     if (statusCode === 0) this.props.unfollow(userId);
        //     this.props.toggleFollowingProgress(userId,false);
        // })
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentSelectedPage, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                {...this.props}
                onPageChanged={this.onPageChanged}
                subscribe={this.onSubscribe}
                unSubscribe={this.onUnSubscribe}
            /></>
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentSelectedPage: state.usersPage.currentSelectedPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         follow: userId => dispatch(followAC(userId)),
//         unfollow: userId => dispatch(unfollowAC(userId)),
//         setUsers: users => dispatch(setUsersAC(users)),
//         selectPage: pageNum => dispatch(selectPageAC(pageNum)),
//         setTotalUsersCount: usersCount => dispatch(setTotalUsersCountAC(usersCount)),
//         toggleFetching: fetching => dispatch(toggleFetchingAC(fetching))
//     }
// }
const usersContainers = connect(mapStateToProps, {
    selectPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unFollowThunkCreator
})(UsersContainer);
export default usersContainers;