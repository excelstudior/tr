const modes = (state = { todo: 'VIEW',sortBy:'Priority',sortOrder:1 }, action) => {
    switch (action.type) {
        case 'TODO':
            return { ...state, todo: action.mode }

        case 'SORT':
        console.log(state);
            if (action.sortBy===null&& action.sortOrder!==null){
                return { ...state,sortOrder:action.sortOrder }
            } 
            if (action.sortBy!==null&& action.sortOrder===null){
                return { ...state,sortBy:action.sortBy }
            }
            return { ...state, sortBy:action.sortBy,sortOrder:action.sortOrder }
        default:
            return state
    }

}

export default modes;