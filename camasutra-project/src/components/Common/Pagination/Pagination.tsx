import React, {useState} from 'react'
import s from "./Pagination.module.scss";
import cn from 'classnames';

const Pagination = ({onPageChanged, currentSelectedPage, totalItemsCount, pageSize, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={s.paginationBlock}>
            <div className={cn(s.paginator)}>
                {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}
                {
                    pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                        return (
                            <PaginationElement id={p}
                                               key={p} onPageChanged={onPageChanged}
                                               currentSelectedPage={currentSelectedPage}
                            />
                        )
                    })
                }
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
            </div>
        </div>
    )
};

const PaginationElement = ({id, onPageChanged, currentSelectedPage}) => {
    return (
        <span key={id} id={id} onClick={() => onPageChanged(id)}
              className={cn({[s.selectedPage]: currentSelectedPage === id}, s.pageNum)}>
        {id}
        </span>
    )

}
export default Pagination;