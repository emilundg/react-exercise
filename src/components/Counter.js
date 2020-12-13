import React from 'react'

class Counter extends React.Component {
    state = {
        counterValue: 0
    }
    increment = () => {
        const {counterValue} = this.state
        const incrementedValue = counterValue + 1
        this.setState({counterValue: incrementedValue})
    }
    decrement = () => {
        const {counterValue} = this.state
        const decrementedValue = counterValue - 1
        this.setState({counterValue: decrementedValue})
    }
    render() {
        const {counterValue} = this.state
        return (
            <div>
                <button onClick={this.decrement}>Decrement</button>
                <h1>
                    {counterValue}
                </h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
export default Counter
