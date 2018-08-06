import React from 'react';
import AddTodo from '../container/AddTodo'
import PropTypes from 'prop-types'

const Menu = ({ modes, todo, updateSort }) => (

    <div>
        <div>
            <button disabled={modes.todo === 'ADD'}
                onClick={() => todo('ADD')}>Add</button>
            
        </div>

        {modes.todo === 'ADD' && <AddTodo />}
    </div>
)

Menu.propTypes = {
    todo: PropTypes.func.isRequired,
    modes: PropTypes.instanceOf(Object).isRequired,
    updateSort: PropTypes.func.isRequired
}
export default Menu;