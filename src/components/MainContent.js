import React from 'react'
import Loader from './Loader'
import Message from './Message'

class MainContent extends React.Component {
    render() {
        return (
            <>
                <Loader/>
                <Message
                    title={"Snyggt jobbat!"}
                    message={"Nu har du lyckats skapa en conditionally rendered component"}
                    buttons={[
                    {
                        action: 'Tack'
                    }, {
                        action: 'Usch!'
                    }
                ]}/>
            </>
        )
    }
}
export default MainContent