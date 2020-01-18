import React from 'react';
import s from './User.module.scss'
import userPhoto from '../../../assets/images/maleAvatar.jpg'
import {NavLink} from "react-router-dom";

const User = ({followed, id, name, status, photos, subscribe, unSubscribe, followingInProgress}) => {
    return (
        <div>
                            <span className={s.usersContainer}>
                                <span>
                                    <div>
                                        {name}
                                    </div>
                                    <div>
                                        {status}
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
                                    <NavLink to={`/profile/${id}`}>
                                        <img className={s.usersAvatarImg}
                                             src={photos.small ? photos.small : userPhoto}/>
                                    </NavLink>
                                    </div>
                                <div>
                                    {
                                        !followed ?

                                            <button disabled={followingInProgress.some(userId => userId === id)}
                                                    onClick={() => {
                                                        subscribe(id)
                                                    }}>
                                                Follow
                                            </button> :
                                            <button disabled={followingInProgress.some(userId => userId === id)}
                                                    onClick={() => {
                                                        unSubscribe(id)
                                                    }}>
                                                Unfollow
                                            </button>
                                    }
                                </div>
                            </span>
        </div>
    );
}

export default User;