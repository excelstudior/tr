import React from 'react';

const EditButton = ({onClick,modes}) => (
    <button 
    onClick={onClick}
    //     disabled={((currentPriority === 1 && value === 'UP')
    //         || (currentPriority === leastPriority && value === 'DOWN')
    //         || (currentPriority === 0))}
    >{modes.todo==='EDIT'?'Save':'Edit'}</button>
)

export default EditButton