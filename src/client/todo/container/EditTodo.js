import { connect } from 'react-redux';
import EditTodo from '../component/editTodo'
import { todo, createPendingTodos, updatePendingTodo } from '../action/mode'
import {savePendingTodos} from '../action/todo'


const mapStateToProps = state => ({
  todos: state.modes.pendingTodos,
  modes: state.modes
})
const mapDispatchToProps = dispatch => ({
  saveTodos: (mode, todos) => {
    console.log('dispatch', mode, todos)
    dispatch(todo(mode));
    dispatch(savePendingTodos(todos))
  },
  updatePendingTodo: (id, key, value) => {
    console.log(id, key, value)
    dispatch(updatePendingTodo(id, key, value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodo)