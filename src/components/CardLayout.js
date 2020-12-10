import React from 'react'
import Task from './Task'
import * as css from './styles/CardLayout'

const CardLayout = ({id, header, tasks, moveTask}) => {
    return (
        <div style={{...css.containerStyle, ...id === 'DONE' ? css.containerStyleDone: null}}>
            <h1>{header}</h1>
            <div>{tasks.map(task => <Task key={task.id} value={task.title} emitClick={() => moveTask(task)}/>)}</div>
        </div>
    )
}
export default CardLayout