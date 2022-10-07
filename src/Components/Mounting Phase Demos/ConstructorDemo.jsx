import React, { Component } from 'react';
class ConstructorDemo extends Component {
    constructor(props)
    {
        super(props)
        this.state={name :'Constructor called'}
    }
    
    render() { 
        return (
            <div> 
                <h3> {this.state.name}</h3>
            </div>
        );
    }
}
 

export default ConstructorDemo;
