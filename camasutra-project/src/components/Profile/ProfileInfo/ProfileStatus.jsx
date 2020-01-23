import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.scss';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [statusInput, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    const toggleEditMode = () => {
        if(!editMode) {
            setEditMode(true);
        }
        else {
            setEditMode(false);
            props.updateUserStatus(statusInput);
        }
    };
    const updateLocalStatus = (e) => {
        setStatus(e.target.value)
    };
    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={toggleEditMode}>Status: {props.status}</span>
            </div>
            }
            {editMode &&
            <div className={s.profileInfoInput}>
                <input autoFocus onChange={updateLocalStatus} onBlur={toggleEditMode} value={statusInput}/>
            </div>
            }
        </div>
    )
};


export default ProfileStatus;