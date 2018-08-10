import React from 'react';

const SortButton = ({ value, action, currentPriority,leastPriority,modes }) => (
    <button onClick={action}
        disabled={((currentPriority === 1 && value === 'UP')
            || (currentPriority === leastPriority && value === 'DOWN')
            || (currentPriority === 0))
            ||modes.todo==="EDIT"}

    >{value}</button>
)

export default SortButton