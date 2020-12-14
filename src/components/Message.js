import React from 'react'

class Message extends React.Component {
    render() {
        const {title, message, buttons} = this.props
        return (
            <div>
                <h1>{title}</h1>
                <p>{message}</p>
                {buttons.map(button => <button onClick={() => console.log('CLICK')}>{button.action}</button>)}
            </div>
        )
    }

}
export default Message