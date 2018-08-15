import React from 'react';
import Todo from '../container/Todo';

const EditTodo=({todos})=>(
    <div>
        {todos.length>0?todos.map(todo=><Todo index={todos.indexOf(todo)}/>):<div></div>}
    </div>
)

export default EditTodo