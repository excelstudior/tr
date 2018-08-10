import { connect } from 'react-redux'
import { updateTodoPriority,updateTodoStatus } from '../action/todo'
import {todo} from '../action/mode'
import TodoList from '../component/todoList'
import {sort_by_key,get_max_value} from '../../util/ud_functions'

const getVisiableTodo=state=>{
  return sort_by_key(state.todos, state.modes.sortBy,state.modes.sortOrder)
}


const mapStateToProps = state => ({
  todos:getVisiableTodo(state),
  modes:state.modes,
  leastPriority:state.todos.length>=1?get_max_value(state.todos,"priority"):0
})

const mapDispatchToProps = dispatch => ({
  updateTodoPriority: (id,currentPriorty,change) => dispatch(updateTodoPriority(id,currentPriorty,change)),
  updateTodoStatus: (id,currentPriorty,change) => dispatch(updateTodoStatus(id,currentPriorty,change)),
  changeTodoMode:(mode)=>dispatch(todo(mode)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)