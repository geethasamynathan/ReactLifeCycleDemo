import React, { Component } from 'react';
class ShouldUpdateDemo extends Component {
    constructor(props){
        super(props);
    
    this.state = { name:'ShouldComponentUpdate Method'  } 
    }
    shouldComponentUpdate()
    {
        return true;
    }
    componentDidMount()
    {
        setTimeout(() => {
            this.setState({name:"ComponentDidMount Method"})
        }, 5000);
    }
    render() { 
        return (
            <div>
                <h3>{this.state.name}</h3>
            </div>
        );
    }
}
 
export default ShouldUpdateDemo;