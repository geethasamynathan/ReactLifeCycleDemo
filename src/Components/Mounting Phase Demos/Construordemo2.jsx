import React, { Component } from 'react';
class ChildComponent extends Component {
    constructor(props)
    {
        console.log('Child component Contructor called')
        super(props);
    this.state = {name:'Constructor Method'  } 
    }
    static getDerivedStateFromProps(props,state)
    {
    return {name:props.nameFromParent}
    }
    render() { 
        console.log('render method of child component')
        return (
            <div>
                <h1> Child Component</h1>
                <h2> {this.state.name}</h2>
               
            </div>
        );
    
    }
}
 
class ParentComponent extends Component {
    constructor()
    {
        super();
        console.log('Parent class Contructor called')
    }
    state = {  } 
    render() { 
        console.log('Parent Class Render method')
        return (
            <div>
                <ChildComponent nameFromParent=" Parent Component Message" />
            </div>
        );
    }
}
 
export default ParentComponent ;
