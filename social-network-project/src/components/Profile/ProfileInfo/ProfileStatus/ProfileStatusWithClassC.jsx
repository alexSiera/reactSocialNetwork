import React, {Component} from 'react';
import s from '../ProfileInfo.module.scss';

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }
    // toggleEditMode = () => {
    //     if (this.state.editMode) {
    //         this.setState({
    //             editMode: false
    //         });
    //         this.props.updateUserStatus(this.state.status);
    //     } else {
    //         this.setState({
    //             editMode: true
    //         })
    //     }
    // };

    onUpdateUserStatus = (e) => {
        this.setState({status: e.target.value});
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) this.setState({status: this.props.status})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>Status: {this.props.status || "No status"}</span>
                </div>
                }
                {this.state.editMode &&
                <div className={s.profileInfoInput}>
                    <input autoFocus onBlur={this.deActivateEditMode} value={this.state.status}
                           onChange={this.onUpdateUserStatus}/>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;