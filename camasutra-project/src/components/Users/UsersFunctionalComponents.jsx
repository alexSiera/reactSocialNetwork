import React from 'react';
import s from './Users.module.scss'
import * as axios from 'axios';
import userPhoto from '../../assets/images/maleAvatar.jpg'

const Users = ({users, unfollow, follow, setUsers}) => {
    const getUsers = async () => {
        if (users.length === 0) {
            const users = await axios.get('https://social-network.samuraijs.com/api/1.0/users?page=3');
            setUsers(users.data.items);
        }
    }
    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
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
                                        {/*{user.location.country}*/}
                                        Russia
                                    </div>
                                    <div>
                                        {/*{user.location.region ?*/}
                                        {/*    user.location.region : null*/}
                                        {/*}*/}
                                        {/*{*/}
                                        {/*    user.location.city*/}
                                        {/*}*/}
                                        Rostov on
                                    </div>
                                </span>
                            </span>
                            <span className={s.usersContainerItemLeft}>
                                <div>
                                    <img className={s.usersAvatarImg}
                                         src={user.photos.small ? user.photos.small : userPhoto}/>
                                </div>
                                <div>
                                    {
                                        user.followed ?
                                            <button onClick={() => unfollow(user.id)}>
                                                Followed
                                            </button> :
                                            <button onClick={() => follow(user.id)}>
                                                Unfollowed
                                            </button>
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
export default Users;