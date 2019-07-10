import React from 'react';
import GreetingContext from '../contexts/GreetingContext'

export default class GreetingContextConsumer extends React.Component{
    render(){
        return (<GreetingContext.Consumer>
            {(context)=>context.greeting}
      </GreetingContext.Consumer>)
    }
}