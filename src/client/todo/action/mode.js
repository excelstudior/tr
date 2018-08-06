export const todo = (mode) => (
    {
        type: 'TODO',
        mode
    })
export const updateSort = (sortBy,sortOrder) => (
    {
        type: 'SORT',
        sortBy,
        sortOrder
    })