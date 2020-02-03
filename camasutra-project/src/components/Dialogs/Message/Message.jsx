import React from 'react';

const Message = ({message, id, likesCount}) => {
    return (
        <div id={id} >{message}</div>
    )
}

export default Message;