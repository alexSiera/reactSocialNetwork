import React from 'react';
import s from './OneNew.module.scss';
const OneNews = ({id, img,author, message}) => {
    return (
        <li id={id} className={s.oneNewListItem}>
            <h1>
                {`AuthorName: ${author}`}
            </h1>
            <p>{message}</p>
            <img className={s.oneNewImg} src={img} />
        </li>
    )
}
export default OneNews;