import React from 'react';
import AddTodo from '../container/AddTodo'
import PropTypes from 'prop-types'
import {SORT_ORDER} from '../constants'
import SelectList from '../../commonContainer/selectList'
const Menu = ({ modes, todo}) => (

    <div>
        <div>
            <button disabled={modes.todo === 'ADD'}
                onClick={() => todo('ADD')}>Add</button>
            <SelectList values={SORT_ORDER}/>
        </div>

        {modes.todo === 'ADD' && <AddTodo />}
    </div>
)

Menu.propTypes = {
    todo: PropTypes.func.isRequired,
    modes: PropTypes.instanceOf(Object).isRequired,
}
export default Menu;