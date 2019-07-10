import React from 'react'
import GreetingContext from '../contexts/GreetingContext'

export default class GreetingsContextProvider extends React.Component {
    state = {
        greeting: "Good Morning"
    }

    render(){
        return (<GreetingContext.Provider value={this.state}>
            {this.props.children}
        </GreetingContext.Provider>)
    }
}