export const todo = (mode) => (
    {
        type: 'TODO',
        mode
    })
export const updateSort = (sortBy, sortOrder) => (
    {
        type: 'SORT',
        sortBy,
        sortOrder
    })

export const updateFilter = (id,filterBy, value) => ({
    type: 'UPDATE_FILTER',
    id,
    filterBy,
    value
})

export const createPendingTodos = (pendingTodos) => ({
    type: 'CREATE_PENDING_TODOS',
    pendingTodos
})

export const updatePendingTodo = (id,key,value) => ({
    type: 'UPDATE_PENDING_TODOS',
    id,
    key,
    value
})
