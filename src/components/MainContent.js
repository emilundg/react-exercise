import React from 'react'
import Loader from './Loader'
import Message from './Message'

class MainContent extends React.Component {
    render() {
        return (
            <div>
                <Loader/>
                <Message/>
            </div>
        )
    }
}
export default MainContent