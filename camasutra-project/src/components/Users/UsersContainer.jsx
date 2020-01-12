    import React, {Component} from 'react';
import {
    followThunkCreator,
    unFollowThunkCreator,
    getUsersThunkCreator,
    selectPageAC as selectPage,
} from "../../Redux/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

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