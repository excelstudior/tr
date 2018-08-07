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

export const updateFilter = (fileterBy, value) => ({
    type: 'UPDATE_FILTER',
    fileterBy,
    value
})