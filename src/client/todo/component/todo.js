import React from 'react';

const Todo=(props)=>(
    <div>
    <label>{props.index}</label>
    <label for={props.pendingTodo.priority}>{props.pendingTodo.priority}</label>
    <input type='text' defaultValue={props.pendingTodo.text} />
    </div>
)

export default Todo