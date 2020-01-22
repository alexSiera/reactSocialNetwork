import React from 'react'
import s from "./Pagination.module.scss";

const Pagination = ({onPageChanged, currentSelectedPage, totalUsersCount, pageSize}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.paginationBlock}>
        {
            pages.map((el) => {
                return (
                    <PaginationElement id={el}
                                key={el} onPageChanged={onPageChanged}
                                currentSelectedPage={currentSelectedPage}
                    />
                )
            })
        }
        </div>
    )
};

const PaginationElement = ({id, onPageChanged, currentSelectedPage}) => {
    return (
        <span key={id} id={id} onClick={() => onPageChanged(id)}
              className={id === currentSelectedPage ?
                  `${s.selectedPage} ${s.pageNum}` : s.pageNum}>
                            {id}
        </span>
    )

}
export default Pagination;