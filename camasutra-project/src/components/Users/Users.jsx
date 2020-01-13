import React from 'react';
import s from './Users.module.scss'
import userPhoto from '../../assets/images/maleAvatar.jpg'
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';

const Users = ({users, subscribe, unSubscribe, totalUsersCount, pageSize, onPageChanged, currentSelectedPage, followingInProgress}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={s.paginationBlock}>
                {
                    pages.map((el) => {
                        return (
                            <span key={el} id={el} onClick={() => onPageChanged(el)}
                                  className={el === currentSelectedPage ?
                                      `${s.selectedPage} ${s.pageNum}` : s.pageNum}>
                            {el}
                        </span>
                        )
                    })
                }
            </div>
            <div className={s.usersMainContainer}>
            {
                users.map((user) => {
                    return (
                        <div key={user.id}>
                            <span className={s.usersContainer}>
                                <span>
                                    <div>
                                        {user.name}
                                    </div>
                                    <div>
                                        {user.status}
                                    </div>
                                </span>
                                <span className={s.usersContainerItemRight}>
                                    <div>
                                        Russia
                                    </div>
                                    <div>
                                        Rostov on
                                    </div>
                                </span>
                            </span>
                            <span className={s.usersContainerItemLeft}>
                                <div>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img className={s.usersAvatarImg}
                                             src={user.photos.small ? user.photos.small : userPhoto}/>
                                    </NavLink>
                                    </div>
                                <div>
                                    {
                                        !user.followed ?
                                            <Button variant="contained"
                                                    color="primary"
                                                    disabled={followingInProgress.some(id => id === user.id)}
                                                    onClick={() => {
                                                        subscribe(user.id)
                                                    }}>
                                                Follow
                                            </Button> :
                                            <Button variant="contained"
                                                    color="primary"
                                                    disabled={followingInProgress.some(id => id === user.id)}
                                                    onClick={() => {
                                                        unSubscribe(user.id)
                                                    }}>
                                                Unfollow
                                            </Button>
                                    }
                                </div>
                            </span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Users;