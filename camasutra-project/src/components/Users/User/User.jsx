import React from 'react';
import s from './User.module.scss'
import userPhoto from '../../../assets/images/maleAvatar.jpg'
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';

const User = ({users, subscribe, unSubscribe, followingInProgress}) => {
    return (
        <div className={s.usersMainContainer}>
            {
                users.map((user) => {
                    return (
                        <div key={user.id} className={s.oneUserContainer}>

                            <span className={s.usersContainerItemLeft}>
                                <div>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img className={s.usersAvatarImg}
                                             src={user.photos.small ? user.photos.small : userPhoto}/>
                                    </NavLink>
                                </div>
                                <div className={s.userContainer}>
                                    <div className={s.userName}>
                                        <h4>Name: {user.name}</h4>
                                    </div>
                                    <div className={s.userStatus}>
                                        <h5>Status: {user.status ? user.status : "No status" }</h5>
                                    </div>
                            </div>
                                <div className={s.userFollowUnfollowBtn}>
                                    {
                                        !user.followed ?
                                            <Button variant="contained"
                                                    color="primary"
                                                    disabled={followingInProgress.some(id => id === user.id)}
                                                    onClick={() => {
                                                        subscribe(user.id);
                                                    }}>
                                                Follow
                                            </Button> :
                                            <Button variant="contained"
                                                    color="primary"
                                                    disabled={followingInProgress.some(id => id === user.id)}
                                                    onClick={() => {
                                                        unSubscribe(user.id);
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
    )
}
export default User;