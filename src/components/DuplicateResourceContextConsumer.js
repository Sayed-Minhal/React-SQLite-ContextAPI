import React from 'react'
import ResourceContext from '../contexts/resourceContext'

class DuplicateResourceContextConsumer extends React.Component {
	static contextType = ResourceContext;
	
	render(){
		return (
		<ResourceContext.Consumer>{
			(context)=>
			<div>
				{context.name}
			</div>
			
			}</ResourceContext.Consumer>);
		
	}
}

export default DuplicateResourceContextConsumer;