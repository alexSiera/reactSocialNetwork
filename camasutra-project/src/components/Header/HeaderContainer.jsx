import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from 'redux';
import {logoutMeThunkCreator} from "../../Redux/thunks/auth/thunks";
import {getProfileAvatar} from "../../Redux/selectors/profileSelectors";
import {withRouter} from 'react-router-dom';

const HeaderContainer = (props) => {
    return (
        <Header {...props} photo={props.photo || ''} isOwner={!props.match.params.userId} />
    )
};

const mapStateToProps = ({auth, profilePage}) => ({...auth, photo: getProfileAvatar(profilePage)});
export default compose(withRouter, connect(mapStateToProps, {
    logOut: logoutMeThunkCreator,
}))(HeaderContainer)
