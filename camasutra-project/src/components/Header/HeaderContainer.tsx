import React from 'react';
import Header from './Header';
import { logoutMeThunkCreator, loginMeThunkCreator } from '../../Redux/reducers/authReducer';
import { connect } from 'react-redux';
import { AppStateType } from '../../Redux/reduxStore';
import { getIsAuth } from '../../Redux/selectors/authSelectors';
type PropsType = MapStateToPropsType & MapDispatchPropsType;
type MapStateToPropsType = {
    isAuth: boolean;
};
type MapDispatchPropsType = {
    logOut: () => void;
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
};
const HeaderContainer: React.FC<PropsType> = (props) => {
    return <Header {...props} />;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({ isAuth: getIsAuth(state) });
export default connect<MapStateToPropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    logOut: logoutMeThunkCreator,
    login: loginMeThunkCreator,
})(HeaderContainer);
