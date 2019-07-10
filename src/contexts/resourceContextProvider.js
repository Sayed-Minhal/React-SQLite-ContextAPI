import React from 'react'
import ResourceContext from '../contexts/resourceContext'
 
 class ResourceContextProvider extends React.Component {
	 state={name:"Sayed Minhal",setName:(e,value)=>{this.setState({name:value})}}
	 
	 componentDidMount(){
		 let that = this;
		 fetch('http://localhost:3030/api/data').then((res)=>res.json()).then((data)=>{
			console.log(data);
			that.setState({data:data});
		 });
	 }
	 
	render(){	 
		return(
			<ResourceContext.Provider value={this.state}>{this.props.children}</ResourceContext.Provider>
		);
	}
 };
 export default ResourceContextProvider; 