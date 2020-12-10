import React, {useState} from 'react'
import './styles/Modal.css'

const Modal = ({emitCancel, emitValue}) => {
    const [taskName,
        setTaskName] = useState("")
    
    const clearTask = () => {
        setTaskName("")
    }
    const handleCancel = () => {
        clearTask()
        emitCancel()
    }
    const handleSubmit = () => {
        clearTask()
        emitValue(taskName)
    }
    return (
        <div className="Modal">
            <div className="Modal__contentWrapper">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}/>
                <div>
                    <button onClick={() => handleCancel()}>Cancel</button>
                    <button onClick={() => handleSubmit()}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default Modal