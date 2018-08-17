import React from 'react';
import {TODO_STATUS} from '../constants'
//import Filter from '../../commonContainer/filter'
const Todo=(props)=>(
    <div>
    <label for={props.pendingTodo.priority}>{props.pendingTodo.priority}</label>
    <input type='text' defaultValue={props.pendingTodo.text} onChange={(e)=>props.updatePendingTodo(props.pendingTodo.id,'text',e.target.value)}/>
    <input type='datetime-local' defaultValue={props.pendingTodo.dueDate.toISOString().substring(0,16)} onChange={(e)=>props.updatePendingTodo(props.pendingTodo.id,'dueDate',e.target.value)} />
    {/* <Filter values={TODO_STATUS} filterType={"status"} actions={props.updatePendingTodo} id={props.pendingTodo.id}/> */}
    <select onChange={(e)=>props.updatePendingTodo(props.pendingTodo.id,'status',e.target.value)}>
            {Object.keys(TODO_STATUS).map(t => TODO_STATUS[t]===props.pendingTodo.status?<option key={t} value={TODO_STATUS[t]} selected >{TODO_STATUS[t]}</option>:<option key={t} value={TODO_STATUS[t]} >{TODO_STATUS[t]}</option>)}
    </select>
    </div>
)

export default Todo