import React, {useState} from 'react'
import styled from 'styled-components';

const Paginator = styled.div`
    margin: 10px;
`;
const PaginationBlock = styled.div`
    margin: 20px 0px;
`;
const PageNum = styled.div`
    padding: 2px;
    border: 1px solid grey;
    font-weight: ${props => props.currentSelectedPage ? 'bold' : 'normal'};
    border-color: ${props => props.currentSelectedPage ? 'black' : 'grey'};
`;
const PagesBlock = styled.div`
    display: flex;
`;
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
        <PaginationBlock>
            <Paginator>
                {portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>}
                <PagesBlock>
                    {
                        pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                            .map((p) => {
                                return (
                                    <PaginationElement id={p}
                                                       key={p} onPageChanged={onPageChanged}
                                                       currentSelectedPage={currentSelectedPage}
                                    />
                                )
                            })
                    }
                </PagesBlock>
                {portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}
            </Paginator>
        </PaginationBlock>
    )
};

const PaginationElement = ({id, onPageChanged, currentSelectedPage}) => {
    return (
        <PageNum key={id} id={id} onClick={() => onPageChanged(id)} currentSelectedPage={currentSelectedPage}>
            {id}
        </PageNum>
    )

};
export default Pagination;