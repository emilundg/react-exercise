import React from 'react'
import TodoList from './TodoList'

class MainContent extends React.Component {
    state = {
        todoList: []
    }
    addTodo(item) {
        /* TODO implement
            1. assign todoList from state to a variable. aka const goodVariableName = this.state.todoList

            2. add item to the assigned array

            3. update state with this.setState({todoList: goodVariableName}) 
        */
    }
    render() {
        return (
            <div className="MainContent">
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}
export default MainContent