import React from 'react';

const EditButton = ({onClick,todo}) => (
    <button 
    onClick={onClick}
    //     disabled={((currentPriority === 1 && value === 'UP')
    //         || (currentPriority === leastPriority && value === 'DOWN')
    //         || (currentPriority === 0))}
    >Edit{todo.text}</button>
)

export default EditButton