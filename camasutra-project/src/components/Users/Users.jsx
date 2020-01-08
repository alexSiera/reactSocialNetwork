import React,{Component} from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/maleAvatar.jpg';
import s from "./Users.module.scss";
class Users extends Component {
    constructor(props) {
        super(props);
        alert('ddwd')
            axios.get('https://social-network.samuraijs.com/api/1.0/users?page=3').then(res => {
                this.props.setUsers(res.data.items);
            })
    }
    // getUsers = async () => {
    //     if (this.props.users.length === 0) {
    //         const users = await axios.get('https://social-network.samuraijs.com/api/1.0/users?page=3');
    //         this.props.setUsers(users.data.items);
    //     }
    // }
    // componentDidMount() {
    //     this.getUsers();
    // }

    render () {
        return (
            <div>
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