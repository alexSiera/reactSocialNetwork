import React, {Component} from 'react';
import {
    followAC as follow,
    selectPageAC as selectPage ,
    setTotalUsersCountAC as setTotalUsersCount,
    setUsersAC as setUsers, toggleFetchingAC as toggleFetching,
    unfollowAC as unfollow
} from "../../Redux/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from 'axios';
import Preloader from "../Common/Preloader/Preloader";
class UsersContainer extends Component {
    getUsers = async (pageNumber) => {
        try {
            this.props.toggleFetching(true);
            const baseUrl = 'https://social-network.samuraijs.com/api/1.0/users';
            const users = await axios.get(`${baseUrl}?page=${pageNumber}&count=${this.props.pageSize}`);
            this.props.toggleFetching(false);
            this.props.setUsers(users.data.items);
            this.props.setTotalUsersCount(users.data.totalCount);
        }
        catch (e) {
            console.log(e)
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.selectPage(pageNumber);
        this.getUsers(pageNumber);

    }
    componentDidMount() {
        this.getUsers();
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null }
            <Users
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentSelectedPage={this.props.currentSelectedPage}
        /></>
    }
}
const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentSelectedPage: state.usersPage.currentSelectedPage,
        isFetching: state.usersPage.isFetching
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
    toggleFetching
})(UsersContainer);
export default usersContainers;