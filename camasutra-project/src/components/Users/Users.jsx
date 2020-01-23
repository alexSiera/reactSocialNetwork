import React from 'react';
import s from './Users.module.scss'
import Pagination from "../Common/Pagination/Pagination";
import User from "./User/User";

const Users = ({users, subscribe, unSubscribe, totalUsersCount, pageSize, onPageChanged, currentSelectedPage, followingInProgress}) => {
    return (
        <div>
            <Pagination onPageChanged={onPageChanged} currentSelectedPage={currentSelectedPage} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            {users.map(u => {
                return <User key={u.id} {...u} followingInProgress={followingInProgress} subscribe={subscribe}
                             unSubscribe={unSubscribe}/>
            })}
        </div>
    )
}
export default Users;