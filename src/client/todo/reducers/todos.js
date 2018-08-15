import { TODO_STATUS } from '../../todo/constants';

const todos = (state = [], action) => {
    let maxPriority = (state.length !== 0) ? state.map(todo => todo.priority).reduce((a, b) => Math.max(a, b)) : 0;

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    status: TODO_STATUS.OPEN,
                    priority: maxPriority + 1,
                    dueDate: action.dueDate,
                    owner: null
                }
            ]
        case 'UPDATE_TODO_PRIORITY':
            console.log(state);
            return state.map(todo => {
                switch (action.change) {
                    case 'UP':
                        return (todo.id === action.id)
                            ? { ...todo, priority: todo.priority - 1 }
                            : ((todo.id !== action.id) && (action.currentPriority - todo.priority) === 1)
                                ? { ...todo, priority: todo.priority + 1 }
                                : todo

                    //return todo
                    case 'DOWN':
                        return (todo.id === action.id)
                            ? { ...todo, priority: todo.priority + 1 }
                            : ((todo.id !== action.id) && (action.currentPriority - todo.priority) === -1)
                                ? { ...todo, priority: todo.priority - 1 }
                                : todo
                    default:
                        return todo
                }
            })
        case 'UPDATE_TODO_STATUS':
            console.log(state);
            return state.map(todo => {
                switch (action.change) {
                    case TODO_STATUS.COMPLETED:
                        return (todo.id === action.id)
                            ? { ...todo, priority: 0, status: TODO_STATUS.COMPLETED }
                            : ((todo.id !== action.id) && (action.currentPriority < todo.priority) && todo.priority !== null)
                                ? { ...todo, priority: todo.priority - 1 }
                                : todo

                    case TODO_STATUS.REOPENED:
                        return (todo.id === action.id)
                            ? { ...todo, priority: maxPriority + 1 }
                            : todo
                    default:
                        return todo
                }
            })

        case 'SAVE_PENDING_TODOS':
            if (action.pendingTodos === null || action.pendingTodos === undefined) {
                return state
            } else {
                return [...action.pendingTodos]
            }

            
        default:
            return state
    }
}

export default todos;