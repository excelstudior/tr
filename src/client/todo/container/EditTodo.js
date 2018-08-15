import { connect } from 'react-redux';
import EditTodo from '../component/editTodo'


const mapStateToProps = state => ({
    todos:state.modes.pendingTodos,
  })
const mapDispatchToProps = dispatch => ({
    changeTodoMode:(mode,todos)=>{
        dispatch(todo(mode));
        dispatch(createPendingTodos(todos))},
  
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditTodo)