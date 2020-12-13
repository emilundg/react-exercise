import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const Todos = ({dispatch}) => {
    let input

    const addTodoItem = (e) => {
        e.preventDefault()
        dispatch(addTodo(input.value))
        input.value = ''
    }

    return (
        <div>
            <form onSubmit={(e) => addTodoItem(e)}>
                <input ref={node => input = node}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {todos: state.todos};
}


export default connect(mapStateToProps)(Todos)
