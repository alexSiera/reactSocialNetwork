import React, { useEffect } from 'react';
import {
    followThunkCreator,
    unFollowThunkCreator,
    requestUsersThunkCreator,
    actions,
} from '../../Redux/reducers/usersReducer';

import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {
    getCurrentSelectedPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector,
} from '../../Redux/selectors/usersSelectors';
import { UserType } from '../../types/types';
import { AppStateType } from '../../Redux/reduxStore';

type MapStatePropsType = {
    currentSelectedPage: number;
    pageSize: number;
    isFetching: boolean;
    totalUsersCount: number;
    users: Array<UserType>;
    followingInProgress: Array<number>;
};
type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    getUsers: (currentSelectedPage: number, pageSize: number) => void;
    onPageChanged: (page: number) => void;
};
type OwnPropsType = {
    pageTitle: string;
};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;
const UsersContainer: React.FC<PropsType> = (props) => {
    const onPageChanged = (pageNumber: number): void => {
        props.getUsers(pageNumber, props.pageSize);
    };
    const onSubscribe = (userId: number): void => {
        props.follow(userId);
    };
    const onUnSubscribe = (userId: number): void => {
        props.unfollow(userId);
    };
    useEffect(() => {
        props.getUsers(props.currentSelectedPage, props.pageSize);
    }, [props.currentSelectedPage, props.pageSize]);

    return (
        <>
            <h2>{props.pageTitle}</h2>
            {props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={props.totalUsersCount}
                currentSelectedPage={props.currentSelectedPage}
                followingInProgress={props.followingInProgress}
                pageSize={props.pageSize}
                users={props.users}
                onPageChanged={onPageChanged}
                subscribe={onSubscribe}
                unSubscribe={onUnSubscribe}
            />
        </>
    );
};
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentSelectedPage: getCurrentSelectedPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};
const usersContainers = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    onPageChanged: actions.selectPageAC,
    getUsers: requestUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unFollowThunkCreator,
})(UsersContainer);
export default usersContainers;
