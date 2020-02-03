import React from 'react';
import styled from 'styled-components';
const SideBarImg = styled.img`
    max-width: 30px;
    border-radius: 50%;
`;
const SideBarList = styled.li`
    text-decoration: none;
    list-style-type: none;
    margin-right: 10px;
`;

const SidebarItem = ({name, img,id}) => {
    return (
            <SideBarList>
                <SideBarImg src={img} id={id}/>
                <div>{name}</div>
            </SideBarList>
    )
};
export default SidebarItem;