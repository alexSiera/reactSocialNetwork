import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {getUserProfileThunkCreator} from "../../Redux/reducers/profileReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
class ProfileContainer extends Component {
    componentDidMount() {
        let userId = parseInt(this.props.match.params.userId);
        if(!userId) userId = 2;
        this.props.getUserProfile(userId)
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
export default compose(
    connect(mapStateToProps, {getUserProfile: getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);