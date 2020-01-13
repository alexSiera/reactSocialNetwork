import React from 'react';
import s from './Users.module.scss'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import User from "./User/User";


const Users = ({users, subscribe, unSubscribe, totalUsersCount, pageSize, onPageChanged, currentSelectedPage, followingInProgress}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.usersContainer}>
            <div className={s.paginationBlock}>
                <ButtonGroup size="small" aria-label="small outlined button group" color="primary" variant="contained">
                    {
                        pages.map((el) => {
                            return (
                                <Button key={el} id={el}
                                        onClick={() => {
                                            onPageChanged(el);
                                        }}
                                        className={el === currentSelectedPage ?
                                            `${s.selectedPage} ${s.pageNum}` : s.pageNum}>
                                    {el}

                                </Button>
                            )
                        })
                    }
                </ButtonGroup>
            </div>
            <div className={s.usersMainContainer}>
                <User users={users} subscribe={subscribe} unSubscribe={unSubscribe}
                      followingInProgress={followingInProgress}/>
            </div>
        </div>
    )
}
export default Users;