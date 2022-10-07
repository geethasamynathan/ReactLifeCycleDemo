import React, { Component } from 'react';
class APICallsDemo extends Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            data :[] 
         } 

    }
    
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            (response) => response.json()
        ).then(data => this.setState({data:data}))

    }
    render() { 
        return (
            <div> 
                <h2>User Details From FakeAPI</h2> 
                  {this.state.data.map(d => <h3 key={d.id}> {d.username}</h3>) }
            </div>
        );
    }
}
 
export default APICallsDemo;