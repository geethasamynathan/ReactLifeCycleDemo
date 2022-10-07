import React, { Component } from 'react';
class DidMountDemo extends Component {
    constructor(props)
    {
        super(props);
    
    this.state = { name :'This name will change after 5 sec' } 
    }
    componentDidMount()
    {
        setTimeout( ()=> {
            this.setState({name:"This is a ComponentDidMount Method"})
        },5000)
    }
    render() { 
        return (
            <div>
                <h3>{this.state.name}</h3>
            </div>
        );
    }
}
 
export default DidMountDemo;
