import React from 'react';
import SidebarItem from "./Sidebar-item/SidebarItem";
import styled from 'styled-components';

const SidebarItemsContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-content: space-around;
`;
const SidebarMainHeading = styled.h1`
    font-weight: 300;
    color: white;
    margin-top: 40px;
    margin-bottom: 8px;
`;
const Sidebar = ({sidebarData}) => {
    return (
        <div>
            <SidebarMainHeading>Friends</SidebarMainHeading>
            <SidebarItemsContainer>
                {sidebarData.sidebarData.map((el) => {
                    return <SidebarItem name={el.name} img={el.img} key={el.id}/>
                })}
            </SidebarItemsContainer>
        </div>
    )
};
export default Sidebar;