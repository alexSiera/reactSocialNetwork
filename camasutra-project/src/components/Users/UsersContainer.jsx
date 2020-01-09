import React, {Component} from 'react';
import {followAC, selectPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/reducers/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from 'axios';
class UsersContainer extends Component {
    getUsers = async (pageNumber) => {
        try {
            const baseUrl = 'https://social-network.samuraijs.com/api/1.0/users';
            const users = await axios.get(`${baseUrl}?page=${pageNumber}&count=${this.props.pageSize}`);
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
        return <Users
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentSelectedPage={this.props.currentSelectedPage}/>
    }
}
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
        selectPage: pageNum => dispatch(selectPageAC(pageNum)),
        setTotalUsersCount: usersCount => dispatch(setTotalUsersCountAC(usersCount))
    }
}
const usersContainers = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
export default usersContainers;