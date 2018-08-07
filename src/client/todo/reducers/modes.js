const modes = (state = { todo: 'VIEW', sortBy: 'priority', sortOrder: 1, filters: [] }, action) => {
    switch (action.type) {
        case 'TODO':
            return { ...state, todo: action.mode }

        case 'SORT':
            if (action.sortBy === null && action.sortOrder !== null) {
                return { ...state, sortOrder: action.sortOrder }
            }
            if (action.sortBy !== null && action.sortOrder === null) {
                return { ...state, sortBy: action.sortBy }
            }
            return { ...state, sortBy: action.sortBy, sortOrder: action.sortOrder }


        case 'UPDATE_FILTER':
            console.log(state);
            return {
                ...state, filters: filters.filter(f => f.filterBy === action.filterBy).length === 0
                    ? filters.push({ filterBy: action.filterBy, value: action })
                    : filters.map(f => { f.filterBy === action.filterBy ? f.value = aciton.value : f})
            }
        default:
            return state
    }

}

export default modes;