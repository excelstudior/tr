const modes = (state = { todo: 'VIEW', sortBy: 'priority', sortOrder: 1, filters: [], pendingTodos: [] }, action) => {
    switch (action.type) {
        case 'TODO':
            return { ...state, todo: action.mode }

        case 'SORT':
            console.log(state)
            if (action.sortBy === null && action.sortOrder !== null) {
                return { ...state, sortOrder: action.sortOrder }
            }
            if (action.sortBy !== null && action.sortOrder === null) {
                return { ...state, sortBy: action.sortBy }
            }
            return { ...state, sortBy: action.sortBy, sortOrder: action.sortOrder }


        case 'UPDATE_FILTER':
            let isFiltersEmpty = (state.filters.length === 0)
            let doesFilterExists = !isFiltersEmpty && (state.filters.filter(f => f.filterBy === action.filterBy)).length === 1

            if (isFiltersEmpty || !doesFilterExists) {
                return { ...state, filters: [...state.filters, { filterBy: action.filterBy, value: action.value }] }
            } else {
                return { ...state, filters: state.filters.map(f => (f.filterBy === action.filterBy) ? { ...f, value: action.value } : f) }
            }

        case 'CREATE_PENDING_TODOS':
            if (action.pendingTodos === null) {
                return { ...state, pendingTodos: [] }
            }
            return { ...state, pendingTodos: [...action.pendingTodos] }

        case 'UPDATE_PENDING_TODOS':
            let isPendingTodosEmpty = (state.pendingTodos.length === 0)
            let doesTodoExist = !isPendingTodosEmpty && (state.pendingTodos.filter(pt => pt.id === action.id)).length === 1
            let keyToUpdate = action.key
            let value;
            if (keyToUpdate==='dueDate'){
                value=new Date(action.value)
            } else {
                value=action.value
            }
            if (doesTodoExist) {
                return { ...state, pendingTodos: state.pendingTodos.map(pt => (pt.id === action.id) ? { ...pt, [keyToUpdate]: value } : pt) }
            }

            return state

        
        default:
            return state
    }

}

export default modes;