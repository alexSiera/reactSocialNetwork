import React from 'react';
import styled from 'styled-components';

const OneNewListItem = styled.li`
    list-style-type: none;
`;
const OneNewImg = styled.img`
    max-width: 80px;
`;
const OneNews = ({id, img, author, message}) => {
    return (
        <OneNewListItem id={id}>
            <h1>
                {`AuthorName: ${author}`}
            </h1>
            <p>{message}</p>
            <OneNewImg src={img}/>
        </OneNewListItem>
    )
};
export default OneNews;