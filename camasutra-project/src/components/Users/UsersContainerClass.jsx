import React, {Component} from 'react';
import {
    followThunkCreator,
    unFollowThunkCreator,
    requestUsersThunkCreator,
    selectPageAC as selectPage,
} from "../../Redux/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {
    getCurrentSelectedPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "../../Redux/reducers/usersSelectors";

class UsersContainer extends Component {
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    onSubscribe = (userId) => {
        this.props.follow(userId);
    }
    onUnSubscribe = (userId) => {
        this.props.unfollow(userId);
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

// const mapStateToProps = state => {
//     return {
//         ...state.usersPage,
//     }
// }
const mapStateToProps = state => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentSelectedPage: getCurrentSelectedPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};
const usersContainers = connect(mapStateToProps, {
    selectPage,
    getUsers: requestUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unFollowThunkCreator
})(UsersContainer);
export default usersContainers;