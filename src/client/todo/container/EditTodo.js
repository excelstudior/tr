import { connect } from 'react-redux';
import EditTodo from '../component/editTodo'
import {todo,createPendingTodos} from '../action/mode'


const mapStateToProps = state => ({
    todos:state.modes.pendingTodos,
    modes:state.modes
  })
const mapDispatchToProps = dispatch => ({
    changeTodoMode:(mode,todos)=>{
      console.log('dispatch',mode,todos)
        dispatch(todo(mode));
        dispatch(createPendingTodos(todos))},
  
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditTodo)