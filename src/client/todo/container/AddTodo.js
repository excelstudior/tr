import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action/todo'
import { todo } from '../action/mode'

const AddTodo = ({ dispatch }) => {
  let newTodo;
  let dueDate;
  
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!newTodo.value.trim()) {
            return
          }
          let due=new Date(dueDate.value)
          dispatch(addTodo(newTodo.value,due));
          newTodo.value = ''
          

        }}
      >
        <input ref={node => newTodo = node} />
        <input type='datetime-local' ref={node => dueDate = node} defaultValue="2018-08-02T06:13"/>
        <button type="submit">
          Save
        </button>
        <button onClick={()=>dispatch(todo('VIEW'))}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)