import uuidv1 from 'uuid/v1';

export const addTodo = (text, dueDate) => (
    {
        type: 'ADD_TODO',
        id: uuidv1(),
        text,
        dueDate
    })

export const updateTodoPriority = (id, currentPriority, change) => ({
    type: 'UPDATE_TODO_PRIORITY',
    id,
    currentPriority,
    change
})

export const updateTodoStatus= (id, currentPriority,change) => ({
    type: 'UPDATE_TODO_STATUS',
    id,
    currentPriority,
    change
})