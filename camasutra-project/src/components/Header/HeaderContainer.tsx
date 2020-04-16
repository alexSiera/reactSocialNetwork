import React from 'react';
import Header, { PropsType } from './Header';
import { logoutMeThunkCreator, setAuthUserDataAC as setAuthUserData } from '../../Redux/reducers/authReducer';
import { connect } from 'react-redux';

const HeaderContainer: React.FC<PropsType> = (props) => {
    return <Header {...props} />;
};

// @ts-ignore
const mapStateToProps = ({ auth }) => ({ ...auth });
export default connect(mapStateToProps, {
    setAuthUserData,
    logOut: logoutMeThunkCreator,
})(HeaderContainer);