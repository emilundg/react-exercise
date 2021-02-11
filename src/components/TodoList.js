import React from 'react'

const TodoList = ({todos}) => {
    return (
        <div className="TodoList">
            {/* Currently this div does not return anything but we can see that a prop, aka data from the parent is 
            sent to TodoList.
            
            1. Assure that the type is array by checking the parent and see what data is sent to

            2. In order to render out array items we have to iterate and return e.g a div. This can be done by using the method map inside our return

            3. Make use of {todos.map(item => {
                return <div> { item } </div>
            }) }
            
            */}
        </div>
    )
}
export default TodoList