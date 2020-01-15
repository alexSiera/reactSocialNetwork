import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileStatus = (props) => {
    return (
        <>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}/>
            </div>
        </>
    )
}
export default ProfileStatus;