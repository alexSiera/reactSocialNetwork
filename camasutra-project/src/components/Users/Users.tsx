import React, { FC } from 'react';
import Pagination from '../Common/Pagination/Pagination';
import User from './User/User';
import { UserType } from '../../types/types';
type PropsType = {
    users: Array<UserType>;
    subscribe: (id: number) => void;
    unSubscribe: (id: number) => void;
    totalUsersCount: number;
    pageSize: number;
    onPageChanged: (page: number) => void;
    currentSelectedPage: number;
    followingInProgress: Array<number>;
};
const Users: FC<PropsType> = ({
    users,
    subscribe,
    unSubscribe,
    totalUsersCount,
    pageSize,
    onPageChanged,
    currentSelectedPage,
    followingInProgress,
}) => {
    return (
        <div>
            <Pagination
                onPageChanged={onPageChanged}
                currentSelectedPage={currentSelectedPage}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map((u) => {
                return (
                    <User
                        key={u.id}
                        {...u}
                        followingInProgress={followingInProgress}
                        subscribe={subscribe}
                        unSubscribe={unSubscribe}
                        followed={false}
                    />
                );
            })}
        </div>
    );
};
export default Users;
