import React from 'react'
import './MainContentStyle.css'

class MainContent extends React.Component {
    state = {
        todoValues: [],
        value: ''
    }

    addTodo() {
        const currentTodos = this.state.todoValues
        currentTodos.push(this.state.value)
        this.setState({todoValues: currentTodos})
    }

    writeTodo(e) {
        const {value} = e.target
        this.setState({value})
    }

    render() {
        return (
            <div>
                {this.state.todoValues.map(todo => {
                    return <h2>{todo}</h2>
                })}
                <input onChange={(e) => this.writeTodo(e)}></input>
                <button className="buttonClass" onClick={() => this.addTodo()}>{"LÄGG TILL SAK"}</button>
            </div>
        )
    }
}

export default MainContent