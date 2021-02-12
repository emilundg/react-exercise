import React from 'react'
import MyChildComponent from './MyChildComponent'

class MainContent extends React.Component {
    state = {
        mainContentHeader: 'MainContentHeader',
        loading: true
    }
    modifyHeader(value) {
        this.setState({mainContentHeader: value})
    }
    render() {
        const {mainContentHeader} = this.state
        return (
            <div>
                <div> {mainContentHeader} </div>
                <MyChildComponent title={"Child title!"}/>
                <button onClick={() => this.modifyHeader( 'Detta är ett nytt värde!')}>Change header</button>
                <button onClick={() => this.modifyHeader( 'Ändra mig till detta istället!')}>Change header</button>
            </div>
        )
    }
}
export default MainContent