import { connect } from 'react-redux'
//import { updateTodoPriority,updateTodoStatus } from '../action/todo'
import Todo from '../component/todo'

const mapStateToProps = (state,ownProps) => ({
    pendingTodo:state.modes.pendingTodos[ownProps.index]
  })

  export default connect(
    mapStateToProps,
  )(Todo)  