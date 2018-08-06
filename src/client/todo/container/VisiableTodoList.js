import { connect } from 'react-redux'
import { updateTodoPriority,updateTodoStatus } from '../action/todo'
import TodoList from '../component/todoList'
import {sort_by_key,get_max_value} from '../../util/ud_functions'

const mapStateToProps = state => ({
  todos: sort_by_key(state.todos, state.modes.sortBy,state.modes.sortOrder),
  modes:state.modes,
  leastPriority:state.todos.length>=1?get_max_value(state.todos,"priority"):0
})

const mapDispatchToProps = dispatch => ({
  updateTodoPriority: (id,currentPriorty,change) => dispatch(updateTodoPriority(id,currentPriorty,change)),
  updateTodoStatus: (id,currentPriorty,change) => dispatch(updateTodoStatus(id,currentPriorty,change)),

})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)