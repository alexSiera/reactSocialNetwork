import React, {useEffect} from 'react';
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
} from "../../Redux/selectors/usersSelectors";

const UsersContainer = (props) => {
    const onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize)
    };
    const onSubscribe = (userId) => {
        props.follow(userId);
    };
    const onUnSubscribe = (userId) => {
        props.unfollow(userId);
    };
    useEffect(() => {
        props.getUsers(props.currentSelectedPage, props.pageSize)
    }, [props.currentSelectedPage, props.pageSize]);

    return <>
        {props.isFetching ? <Preloader/> : null}
        <Users
            {...props}
            onPageChanged={onPageChanged}
            subscribe={onSubscribe}
            unSubscribe={onUnSubscribe}
        /></>
};
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