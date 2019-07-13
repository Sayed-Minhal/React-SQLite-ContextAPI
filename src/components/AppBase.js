import React from 'react'

import ResourceContext from '../contexts/ResourceContext'
import ResourceContextProvider from '../contexts/ResourceContextProvider'
import ResourceContextConsumer from '../components/ResourceContextConsumer'


export default class AppBase extends React.Component{
    constructor(props){ 
        super(props);
    }

    render(){
        return(
		<div>
			<ResourceContextProvider>
				<ResourceContextConsumer></ResourceContextConsumer>
			</ResourceContextProvider>
        </div>
        )

    }
}