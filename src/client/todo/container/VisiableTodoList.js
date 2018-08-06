import { connect } from 'react-redux'
import { updateTodoPriority,updateTodoStatus } from '../action/todo'
import TodoList from '../component/todoList'
import {get_max_value} from '../../util/ud_functions'




const mapStateToProps = state => ({
  todos: state.todos,
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