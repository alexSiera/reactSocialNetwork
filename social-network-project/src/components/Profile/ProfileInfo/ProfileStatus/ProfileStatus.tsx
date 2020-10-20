import React, { useState, useEffect } from 'react';
import s from './ProfileStatus.module.scss';

type PropsType = {
  isOwner: boolean;
  status: string;
  updateUserStatus: (newStatus: string) => void;
};
type StateType = {
  editMode: boolean;
  statusInput: string;
};
const ProfileStatus: React.FC<PropsType> = (props: PropsType) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [statusInput, setStatus] = useState<string>(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  const toggleEditMode = (): void => {
    if (!props.isOwner) return;
    if (!editMode) {
      setEditMode(true);
    } else {
      setEditMode(false);
      props.updateUserStatus(statusInput);
    }
  };
  const updateLocalStatus = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setStatus(e.target.value);
  };
  return (
    <div className={s.profileStatusBlock}>
      {!editMode && (
        <div>
          <span onDoubleClick={toggleEditMode}>
            <b>Status:</b> {props.status}
          </span>
        </div>
      )}
      {editMode && (
        <div className={s.profileInfoInput}>
          <input
            autoFocus
            onChange={updateLocalStatus}
            onBlur={toggleEditMode}
            value={statusInput}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
