import React, {Component} from 'react';
import {
    followThunkCreator,
    unFollowThunkCreator,
    getUsersThunkCreator,
    selectPageAC as selectPage,
} from "../../Redux/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';

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
            {this.props.isFetching ? null : null}
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
        ...state.usersPage,
    }
}
const usersContainers = connect(mapStateToProps, {
    selectPage,
    getUsers: getUsersThunkCreator,
    follow: followThunkCreator,
    unfollow: unFollowThunkCreator
})(UsersContainer);
export default usersContainers;