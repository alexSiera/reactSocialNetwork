import React from 'react';
import s from './OneNew.module.scss';
const OneNews = ({id, img,autor, message}) => {
    return (
        <li id={id} className={s.oneNewListItem}>
            <h1>
                {`AuthorName: ${autor}`}
            </h1>
            <p>{message}</p>
            <img className={s.oneNewImg} src={img} />
        </li>
    )
}
export default OneNews;