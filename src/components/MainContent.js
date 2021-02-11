import React from 'react'
import TodoList from './TodoList'

class MainContent extends React.Component {
    state = {
        todoList: []
    }
    addTodo(item) {
        console.log(item)
        /* TODO implement
            1. assign todoList from state to a variable. aka const goodVariableName = this.state.todoList

            2. add item to the assigned array

            3. update state with this.setState({todoList: goodVariableName}) 
        */
    }

    render() {
        return (
            <div className="MainContent">
                <TodoList todos={this.state.todoList}/>
                {/* the function addTodo defined at row 8 has to be called 
                    in order to add item to our todoList.

                    A good way to add items is by having a button.
                    Make a button <button>En bra knapp text</button> with an onClick function that executes addTodo
                */}
            </div>
        )
    }
}
export default MainContent