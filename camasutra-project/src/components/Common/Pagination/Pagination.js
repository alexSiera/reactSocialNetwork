import React from 'react'
import s from "../../Users/Users.module.scss";

const Pagination = ({id, onPageChanged, currentSelectedPage }) => {
    return (
        <span key={id} id={id} onClick={() => onPageChanged(id)}
              className={id === currentSelectedPage ?
                  `${s.selectedPage} ${s.pageNum}` : s.pageNum}>
                            {id}
        </span>
    )


}
export default Pagination;