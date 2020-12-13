let nextTodoId = 0

export const increment = () => ({type: 'INCREMENT_COUNTER'})

export const decrement = () => ({type: 'DECREMENT_COUNTER'})

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})
