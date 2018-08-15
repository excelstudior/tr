import React from 'react'
import PropTypes from 'prop-types'
import SortButton from './sortButtion'
import StatusButton from './statusButton'
//import EditTodo from '../container/EditTodo'
import EditButton from './editButton'
import SaveButton from './editButton'
import { get_total_count_on_value } from '../../util/ud_functions'
import { TODO_STATUS } from '../constants'




const TodoList = ({ todos, updateTodoPriority, leastPriority, updateTodoStatus, modes,changeTodoMode }) => (
  <div>
    {todos.length > 0 && get_total_count_on_value(todos, "priority", 0) !== todos.length ?
      <table>
        <tbody>
          <tr>
            {modes.todo==='EDIT'?<th></th>:<th><EditButton modes={modes} onClick={()=>changeTodoMode('EDIT',todos)}/></th>}
            <th>Priority</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due</th>
            <th>Owner</th>
            <th>Update Priority</th>
            <th>Mark Completed</th>
          </tr>


          {todos.filter(todo => todo.priority > 0).map(todo => <tr key={todo.id}>
            {modes.todo!=='EDIT'?<td></td>:<td><SaveButton modes={modes} onClick={()=>changeTodoMode('SAVE')}/></td>}
            <td>{todo.priority}</td>
            {modes.todo!=="EDIT"?<td>{todo.text}</td>:<td><input type="text"  defaultValue={todo.text}/></td>}
            <td>{todo.status}</td>
            <td>{todo.dueDate.toLocaleDateString()} {todo.dueDate.toLocaleTimeString()}</td>
            <td>{todo.owner ? todo.owner.name : "Unassigned"}</td>
            
            <td><SortButton value="UP" action={() => updateTodoPriority(todo.id, todo.priority, "UP")} leastPriority={leastPriority} currentPriority={todo.priority} modes={modes}/>
              <SortButton value="DOWN" action={() => updateTodoPriority(todo.id, todo.priority, "DOWN")} leastPriority={leastPriority} currentPriority={todo.priority} modes={modes}/></td>
            <td><StatusButton value={TODO_STATUS.COMPLETED} action={() => updateTodoStatus(todo.id, todo.priority, TODO_STATUS.COMPLETED)} currentPriority={todo.priority} modes={modes} /></td>
          </tr>)
          }
        </tbody>

      </table> : <h3>No active task</h3>}


  </div>

)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      dueDate: PropTypes.instanceOf(Date).isRequired,
      owner: PropTypes.instanceOf(Object)
    })

  ),
  leastPriority: PropTypes.number.isRequired,
  updateTodoPriority: PropTypes.func.isRequired,
  updateTodoStatus: PropTypes.func.isRequired,
  changeTodoMode:PropTypes.func.isRequired
}

export default TodoList