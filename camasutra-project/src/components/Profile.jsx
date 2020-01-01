import React from 'react';
import s from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img src="https://images.unsplash.com/photo-1473158912295-779ef17fc94b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        </div>
        <div>
          {/* <img src="https://www.thoughtco.com/thmb/JhuPr0_SbnnIXiTm1PrQ5nfjdvQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/acat-874e4928f96e4e96bec0b1723ca5a909.jpg" /> */}
          Avatar + description

        </div>
      <div>
        My post
        <div>
          New Post
        </div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>

        </div>
      </div>
      </div>
    )
}
export default Profile;