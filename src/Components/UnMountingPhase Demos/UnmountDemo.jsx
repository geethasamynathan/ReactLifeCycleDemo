import React, { Component } from 'react';
class UnMountDemo extends Component {
    constructor(props)
    {
        super(props);
    this.state = {show:true,  } 
    }
    render() { 
        return (
            <div>
                <p> {this.state.show ?<Child />:null}</p>
                <button onClick={() => {this.setState({show:!this.state.show})}}>
                    Unmount 
                </button>
            </div>
        );
    }
}
 
class Child  extends Component {
    componentWillUnmount()
    {
        alert('This will unmount')
    }
    
    render() { 
        return (
            <>
            I am Child Compoent
            </>
        );
    }
}
 

export default UnMountDemo;