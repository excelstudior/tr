import { connect } from 'react-redux';
import {todo,updateSort} from '../action/mode';
import Menu from '../component/menu';
const mapStateToProps = state => ({
    modes: state.modes,
    todos:state.todos
  })

const mapDispatchToProps = dispatch => ({
  todo:(mode)=>dispatch(todo(mode)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)