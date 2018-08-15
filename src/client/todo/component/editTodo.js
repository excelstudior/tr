import React from 'react';
import Todo from '../container/Todo';
import SaveButton from '../component/editButton';
import todo from '../action/todo'

const EditTodo=({todos,changeTodoMode,modes})=>(
    <div>
        {todos.length>0&&modes.todo==='EDIT'?
                <div>
                <SaveButton modes={modes} onClick={()=>changeTodoMode('VIEW',null)}/>
                    <div>
                    {todos.map(todo=><Todo index={todos.indexOf(todo)}/>)} 
                    </div>
                </div>:<div></div>}
    </div>
)

export default EditTodo