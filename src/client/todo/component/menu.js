import React from 'react';
import AddTodo from '../container/AddTodo'
import PropTypes from 'prop-types'
import {SORT_ORDER} from '../constants'
import SortList from '../../commonContainer/sortList'
import Filter from '../../commonContainer/filter'
import {TODO_STATUS} from '../constants'
import {updateFilter} from '../action/mode'
const Menu = ({ modes, todo,todos}) => (

    <div>
        <div>
            <button disabled={modes.todo === 'ADD'}
                onClick={() => todo('ADD')}>Add</button>
            <SortList values={SORT_ORDER}/>
            <Filter values={TODO_STATUS} filterType={"TODO_STATUS"} actions={updateFilter}/>
        </div>

        {modes.todo === 'ADD' && <AddTodo />}
    </div>
)

Menu.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
          priority: PropTypes.number.isRequired,
          dueDate: PropTypes.instanceOf(Date).isRequired,
          owner: PropTypes.instanceOf(Object)
        })
    
      ),
    todo: PropTypes.func.isRequired,
    modes: PropTypes.instanceOf(Object).isRequired,
}
export default Menu;