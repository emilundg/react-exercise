import React from 'react'
import { connect } from 'react-redux';

class Counter extends React.Component {
    increment = () => {
        this
            .props
            .dispatch({type: 'INCREMENT_COUNTER'});
    }

    decrement = () => {
        this
            .props
            .dispatch({type: 'DECREMENT_COUNTER'});
    }
    render() {
        const {counter} = this.props
        return (
            <div>
                <button onClick={this.decrement}>Decrement</button>
                <h1>
                    {counter.count}
                </h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

// Add this function to the bottom of the file:
function mapStateToProps(state) {
    return {counter: state.counter};
}

// Then replace this: export default Counter; With this:
export default connect(mapStateToProps)(Counter);
