import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.scss';
import userPhoto from '../../../assets/images/maleAvatar.jpg';
import { PhotosProfileType } from '../../../types/types';

type PropsType = {
  followed: boolean;
  id: number;
  name: string;
  status: string;
  photos: PhotosProfileType;
  subscribe: (id: number) => void;
  unSubscribe: (id: number) => void;
  followingInProgress: Array<number>;
};
const User: React.FC<PropsType> = ({
  followed,
  id,
  name,
  status,
  photos,
  subscribe,
  unSubscribe,
  followingInProgress,
}) => {
  return (
    <div>
      <span className={s.usersContainer}>
        <span>
          <div>{name}</div>
          <div>{status}</div>
        </span>
        <span className={s.usersContainerItemRight}>
          <div>Russia</div>
          <div>Rostov on</div>
        </span>
      </span>
      <span className={s.usersContainerItemLeft}>
        <div>
          <NavLink to={`/profile/${id}`}>
            <img
              className={s.usersAvatarImg}
              src={photos.small ? photos.small : userPhoto}
              alt="avatar"
            />
          </NavLink>
        </div>
        <div>
          {!followed ? (
            <button
              disabled={followingInProgress.some((userId) => userId === id)}
              onClick={(): void => {
                subscribe(id);
              }}
            >
              Follow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((userId) => userId === id)}
              onClick={(): void => {
                unSubscribe(id);
              }}
            >
              Unfollow
            </button>
          )}
        </div>
      </span>
    </div>
  );
};

export default User;
