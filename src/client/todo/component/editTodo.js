import React from 'react';
import Todo from '../container/Todo';
import SaveButton from '../component/editButton';

const EditTodo=({todos,saveTodos,modes,updatePendingTodo})=>(
    <div>
        {todos.length>0&&modes.todo==='EDIT'?
                <div>
                <SaveButton modes={modes} onClick={()=>saveTodos('VIEW',todos)}/>
                    <div>
                    {todos.map(todo=><Todo index={todos.indexOf(todo)} updatePendingTodo={updatePendingTodo} />)} 
                    </div>
                </div>:<div></div>}
    </div>
)

export default EditTodo