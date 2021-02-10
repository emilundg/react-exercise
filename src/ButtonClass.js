import React from 'react'
import './ButtonClassStyle.css'

class ButtonClass extends React.Component {
    state = {
        counterValue: 0
    }

    componentDidUpdate() {
        console.log('UPDATE!')
    }

    increaseCounter = () => {
        const increasedValue = this.state.counterValue + 1
        this.setState({
            counterValue: increasedValue
        })
    }

    render() {
        const {title} = this.props
        return (
            <div>
                {this.state.counterValue}
                <button className="buttonClass" onClick={() => this.increaseCounter()}>{title}</button>
            </div>
        )
    }
}

export default ButtonClass