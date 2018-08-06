import React from 'react';

const StatusButton = ({ value, action, currentPriority}) => (
    <button onClick={action}
        disabled={ (currentPriority === 0)}
    >{value}</button>
)

export default StatusButton