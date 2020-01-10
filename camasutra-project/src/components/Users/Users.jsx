import React from 'react';
import s from './Users.module.scss'
import userPhoto from '../../assets/images/maleAvatar.jpg'
import {NavLink} from "react-router-dom";

const Users = ({users, unfollow, follow,totalUsersCount,pageSize,onPageChanged,currentSelectedPage  }) => {

    const pagesCount  = Math.ceil(totalUsersCount / pageSize);
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
                            // <span id={el} onClick={this.selectPage}
                            //       className={el === this.props.currentSelectedPage ?
                            //           `${s.selectedPage} ${s.pageNum}` : s.pageNum}>
                            // {el}
                            // </span>
                            <span key={el} id={el} onClick={() => onPageChanged(el)}
                                  className={el === currentSelectedPage ?
                                      `${s.selectedPage} ${s.pageNum}` : s.pageNum}>
                            {el}
                        </span>
                        )


                    })
                }
            </div>
            {/*<button onClick={this.getUsers}>getUsers</button>*/}
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
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img className={s.usersAvatarImg}
                                         src={user.photos.small ? user.photos.small : userPhoto}/>
                                    </NavLink>
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