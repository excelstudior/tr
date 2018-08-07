const modes = (state = { todo: 'VIEW', sortBy: 'priority', sortOrder: 1, filters: [] }, action) => {
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
            console.log(state);
            console.log(typeof(state.filters));
            
            return{
                ...state, filters:[{filterBy:action.filterBy,value:action.value}]
            }



        default:
            return state
    }

}

export default modes;