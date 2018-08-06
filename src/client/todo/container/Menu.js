import { connect } from 'react-redux';
import {todo,updateSort} from '../action/mode';
import Menu from '../component/menu';
const mapStateToProps = state => ({
    modes: state.modes
  })

const mapDispatchToProps = dispatch => ({
  todo:(mode)=>dispatch(todo(mode)),
  updateSort:(sortBy,sortOrder)=>dispatch(updateSort(sortBy,sortOrder))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)