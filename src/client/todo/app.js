import React, { Component } from 'react';
import Menu from '../todo/container/Menu'
import TodoList from './container/VisiableTodoList'
import EditTodo from './container/EditTodo'


class Todo extends Component {

    render() {
        return (
            <div>
                <div>
                    <Menu />
                </div>
                <div>
                    <TodoList />
                </div>
                <div>
                    <EditTodo/>
                </div>
            </div>

        );
    }
}

export default Todo;