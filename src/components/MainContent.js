import React, {Component} from 'react'
import CardLayout from './CardLayout'
import Modal from './Modal'
import './styles/MainContent.css'
import {v4 as uuidv4} from 'uuid';
export default class MainContent extends Component {
    state = {
        todoTasks: {
            id: 'TODO',
            data: []
        },
        inProgressTasks: {
            id: 'IN_PROGRESS',
            data: []
        },
        doneTasks: {
            id: 'DONE',
            data: []
        }
    }
    populateData() {
        const {todoTasks, inProgressTasks, doneTasks} = this.state
        todoTasks.data = [
            {
                id: `task-${uuidv4()}`,
                title: 'Task1'
            }, {
                id: `task-${uuidv4()}`,
                title: 'Task2'
            }, {
                id: `task-${uuidv4()}`,
                title: 'Task3'
            }
        ]
        inProgressTasks.data = [
            {
                id: `task-${uuidv4()}`,
                title: 'Task1'
            }, {
                id: `task-${uuidv4()}`,
                title: 'Task2'
            }
        ]
        doneTasks.data = [
            {
                id: `task-${uuidv4()}`,
                title: 'Task1'
            }, {
                id: `task-${uuidv4()}`,
                title: 'Task2'
            }, {
                id: `task-${uuidv4()}`,
                title: 'Task3'
            }
        ]

        this.setState({todoTasks, inProgressTasks, doneTasks})
    }
    componentDidMount() {
        // this.populateData()
    }
    moveToInProgress(task) {
        const {todoTasks, inProgressTasks} = this.state
        const {data} = todoTasks
        let i = 0
        const filteredArrray = []
        do {
            if (data[i].id !== task.id) {
                filteredArrray.push(data[i])
            } else {
                inProgressTasks
                    .data
                    .unshift(data[i])
            }
            i++
        } while (i < data.length);
        todoTasks.data = filteredArrray
        this.setState({todoTasks})
    }
    moveToDone(task) {
        const {inProgressTasks, doneTasks} = this.state
        const {data} = inProgressTasks
        let i = 0
        const filteredArrray = []
        do {
            if (data[i].id !== task.id) {
                filteredArrray.push(data[i])
            } else {
                doneTasks
                    .data
                    .unshift(data[i])
            }
            i++
        } while (i < data.length);
        inProgressTasks.data = filteredArrray
        this.setState({inProgressTasks})
    }
    moveTask(listId, task) {
        if (listId === 'TODO') {
            return this.moveToInProgress(task)
        }
        else if (listId === 'IN_PROGRESS') {
            return this.moveToDone(task)
        }
    }
    showDialog() {
        this.setState({showModal: true})
    }
    addTask(title) {
        const {todoTasks} = this.state
        todoTasks
            .data
            .unshift({id: `task-${uuidv4()}`, title})
        this.setState({todoTasks, showModal: false})
    }
    render() {
        const {todoTasks, inProgressTasks, doneTasks, showModal} = this.state
        return (
            <div>
                {showModal && <Modal
                    emitCancel={() => this.setState({showModal: false})}
                    emitValue={(value) => this.addTask(value)}/>}
                <h1>{`${doneTasks.data.length} done items!`}</h1>
                <button onClick={() => this.showDialog()}>New task</button>
                <div className="MainContent">
                    <CardLayout
                        header={"Todo"}
                        id={todoTasks.id}
                        tasks={todoTasks.data}
                        moveTask={(task) => this.moveTask(todoTasks.id, task)}/>
                    <CardLayout
                        header={"In Progress"}
                        id={inProgressTasks.id}
                        tasks={inProgressTasks.data}
                        moveTask={(task) => this.moveTask(inProgressTasks.id, task)}/>
                    <CardLayout
                        header={"Done"}
                        id={doneTasks.id}
                        tasks={doneTasks.data}
                        moveTask={(task) => this.moveTask(doneTasks.id, task)}/>
                </div>
            </div>
        )
    }
}