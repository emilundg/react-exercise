import React from 'react'
import TodoList from './TodoList'

class MainContent extends React.Component {
    render() {
        return (
            <div className="MainContent">
                <TodoList/>
            </div>
        )
    }
}
export default MainContent