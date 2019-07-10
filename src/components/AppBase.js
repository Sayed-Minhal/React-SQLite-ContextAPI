import React from 'react'
import GreetingsContextProvider from '../contexts/GreetingsContextProvider'
import GreetingContextConsumer from './GreetingContextConsumer';
import ResourceContext from '../contexts/ResourceContext'
import ResourceContextProvider from '../contexts/ResourceContextProvider'
import ResourceContextConsumer from '../components/ResourceContextConsumer'
import DuplicateResourceContextConsumer from '../components/DuplicateResourceContextConsumer'

export default class AppBase extends React.Component{
    constructor(props){ 
        super(props);
    }

    render(){
        return(
		<div>
            <GreetingsContextProvider>
                <GreetingContextConsumer></GreetingContextConsumer>
            </GreetingsContextProvider>&nbsp;&ndash;&nbsp; 
			<ResourceContextProvider>
				<ResourceContextConsumer></ResourceContextConsumer>
				<DuplicateResourceContextConsumer></DuplicateResourceContextConsumer>
			</ResourceContextProvider>
        </div>
        )

    }
}