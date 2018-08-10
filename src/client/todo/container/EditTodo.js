import React from 'react';
import { connect } from 'react-redux';
//import { cancelEditTodoPopup,saveTodo } from '../actions'

const EditTodo = ({ todo, dispatch }) => {
        let text;
        let status;
        let priority;
        let dueDate;
        return (
                <div>
                        <h6>You are editing {todo.text}</h6>
                        <form
                                // onSubmit={e => {
                                //         e.preventDefault()
                                //         if (!input.value.trim()) {
                                //                 return
                                //         }
                                //       //  dispatch(saveTodo(todo.id,input.value));
                                //       //  dispatch(cancelEditTodoPopup());
                                //         input.value = ''
                                // }}
                        >
                                <input type="text" ref={node => text = node} defaultValue={todo.text} />
                                <label>{todo.status}</label>
                                <label>{todo.priority}</label>
                                <label>{todo.dueDate}</label>
                                <button type="submit">
                                        Save
                                </button>
                                <button >Cancel</button>
                        </form>
                </div>
        )
}

export default connect()(EditTodo)