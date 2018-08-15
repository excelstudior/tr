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

export const updateFilter = (filterBy, value) => ({
    type: 'UPDATE_FILTER',
    filterBy,
    value
})

export const createPendingTodos = (pendingTodos) => ({
    type: 'CREATE_PENDING_TODOS',
    pendingTodos
})

