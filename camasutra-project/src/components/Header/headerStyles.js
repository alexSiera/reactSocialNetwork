import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
export const HeaderElement = styled.header`
   grid-area: header;
   background-color: green;
   display: flex;
   align-items: center;
    img {
      width: 75px;
   }
`;
export const LogoContainer = styled.div `
    padding-top: 10px;
`;
export const LoginBlock = styled.div`
    margin-left: auto;
    margin-right: 20px;
    a {
        margin:auto;
        color: white;
        text-decoration: none;
    }
`;
export const ProfileMenuLinks = styled(NavLink)`
    text-decoration: none;
    color: black;
    &:hover {
        color: red;
     }
`;