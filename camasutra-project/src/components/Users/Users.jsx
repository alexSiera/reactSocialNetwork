import React, {Component} from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/maleAvatar.jpg';
import s from "./Users.module.scss";

class Users extends Component {
    getUsers = async () => {
        if (this.props.users.length === 0) {
            const baseUrl = 'https://social-network.samuraijs.com/api/1.0/users';
            const users = await axios.get(`${baseUrl}?page=${this.props.currentSelectedPage}&count=${this.props.pageSize}`);
            this.props.setUsers(users.data.items);
        }
    }

    componentDidMount() {
        this.getUsers();
    }
    render() {
        const {totalUsersCount, pageSize} = this.props;
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
                                <span id={el} onClick={() => {this.props.selectPage(el)}}
                            className={el === this.props.currentSelectedPage ?
                                           `${s.selectedPage} ${s.pageNum}` : s.pageNum}>
                            {el}
                        </span>
                            )


                        })
                    }
                </div>
                {/*<button onClick={this.getUsers}>getUsers</button>*/}
                {
                    this.props.users.map((user) => {
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
                                            <button onClick={() => this.props.unfollow(user.id)}>
                                                Followed
                                            </button> :
                                            <button onClick={() => this.props.follow(user.id)}>
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
}

export default Users;