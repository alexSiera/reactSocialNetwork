import React, {Component} from 'react';
import {
    followAC as follow,
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
    // getUsers = async (pageNumber) => {
    //     try {
    //         this.props.toggleFetching(true);
    //         const baseUrl = 'https://social-network.samuraijs.com/api/1.0/users';
    //         const users = await axios.get(`${baseUrl}?page=${pageNumber}&count=${this.props.pageSize}`);
    //         this.props.toggleFetching(false);
    //         this.props.setUsers(users.data.items);
    //         this.props.setTotalUsersCount(users.data.totalCount);
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }
    onPageChanged = (pageNumber) => {
        this.props.selectPage(pageNumber);
        this.props.toggleFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(users => {
                this.props.toggleFetching(false);
                this.props.setUsers(users.items);
                this.props.setTotalUsersCount(users.totalCount);
            }).catch(e => (console.log(e)));
    }
    onSubscribe = (userId) => {
        this.props.toggleFollowingProgress(true);
        usersAPI.subscribe(userId).then(statusCode => {
            if (statusCode === 0) this.props.follow(userId);
            this.props.toggleFollowingProgress(false);
        });
    }
    onUnSubscribe = (userId) => {
        this.props.toggleFollowingProgress(true);
        usersAPI.unSubscribe(userId).then(statusCode => {
            if (statusCode === 0) this.props.unfollow(userId);
            this.props.toggleFollowingProgress(false);
        })
    }

    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.getUsers(this.props.currentSelectedPage, this.props.pageSize)
            .then(users => {
                this.props.toggleFetching(false);
                this.props.setUsers(users.items);
                this.props.setTotalUsersCount(users.totalCount);
            }).catch(e => (console.log(e)));
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentSelectedPage={this.props.currentSelectedPage}
                subscribe={this.onSubscribe}
                unSubscribe={this.onUnSubscribe}
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress
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
    follow,
    unfollow,
    setUsers,
    selectPage,
    setTotalUsersCount,
    toggleFetching,
    toggleFollowingProgress
})(UsersContainer);
export default usersContainers;