import React from 'react'

class MyChildComponent extends React.Component {
    render() {
        const {title} = this.props
        return (
            <div>
                {title}
            </div>
        )
    }
}
export default MyChildComponent