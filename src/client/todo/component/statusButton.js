import React from 'react';

const StatusButton = ({ value, action, currentPriority,modes}) => (
    <button onClick={action}
        disabled={ (currentPriority === 0)||modes.todo==="EDIT"}
    >{value}</button>
)

export default StatusButton