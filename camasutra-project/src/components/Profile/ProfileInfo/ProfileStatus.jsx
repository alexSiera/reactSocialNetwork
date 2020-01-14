import React, {Component} from 'react';
import s from './ProfileInfo.module.scss';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        title: 'Yo!'
    }
    toggleEditMode = () => {
        if(this.state.editMode) {
            this.setState({
                editMode: false
            })
        } else {
            this.setState({
                editMode: true
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status} {this.state.title}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={s.profileInfoInput}>
                        <input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;