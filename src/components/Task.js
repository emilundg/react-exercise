import React from 'react'
import './styles/Task.css'
const Task = ({value, emitClick}) => {
    return <div className="Task" onClick={() => emitClick()}>{value}</div>
}
export default Task