import React from 'react';
import s from './Users.module.scss'
import userPhoto from '../../assets/images/maleAvatar.jpg'
import {NavLink} from "react-router-dom";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User/User";

const Users = ({users, subscribe, unSubscribe, totalUsersCount, pageSize, onPageChanged, currentSelectedPage, followingInProgress}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <Pagination onPageChanged={onPageChanged} currentSelectedPage={currentSelectedPage} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {users.map(u => {
                return <User key={u.id} {...u} followingInProgress={followingInProgress} subscribe={subscribe}
                             unSubscribe={unSubscribe}/>
            })}
        </div>
    )
}
export default Users;