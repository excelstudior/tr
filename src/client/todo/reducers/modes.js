import todo from './todos';

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

            console.log(isFiltersEmpty, doesFilterExists)

            if (isFiltersEmpty || !doesFilterExists) {
                return { ...state, filters: [...state.filters, { filterBy: action.filterBy, value: action.value }] }
            } else {
                return { ...state, filters: state.filters.map(f => (f.filterBy === action.filterBy) ? { ...f, value: action.value } : f) }
            }

        case 'CREATE_PENDING_TODOS':          
            return {...state,pendingTodos:[...action.pendingTodos]}
        default:
            return state
    }

}

export default modes;