import React, {Component} from 'react';
import s from './ProfileInfo.module.scss';

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    toggleEditMode = () => {
        if(this.state.editMode) {
            this.setState({
                editMode: false
            })
            this.props.updateUserStatus(this.state.status);
        } else {
            this.setState({
                editMode: true
            })
        }
    }

    onUpdateUserStatus = (e) => {
        this.setState({status: e.target.value});
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) this.setState({status: this.props.status})
        let a = this.state;
        let b = this.props;
        console.log(prevProps,prevState )
    }

    render() {
        console.log("render!!!")
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.toggleEditMode}>Status: {this.props.status || "No status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={s.profileInfoInput}>
                        <input autoFocus onBlur={this.toggleEditMode} value={this.state.status} onChange={this.onUpdateUserStatus}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;