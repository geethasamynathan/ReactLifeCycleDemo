import React, { Component } from 'react';
class getSnapshotDemo extends Component {
    constructor(props)
    {
        console.log('Constructor')
        super(props);
    this.state = { name :'Constructor Method' } 
    }
    componentDidMount()
    {
        console.log('componentDidMount')
        setTimeout(() => {
           this.setState({name:'ComponentDidMount Method'}) 
        }, 5000);
    }
    getSnapshotBeforeUpdate(prevProps, PrevState)
    {
        console.log('getSnapshotBeforeUpdate')
        document.getElementById('previous-state').innerHTML="The Previous State was"
+PrevState.name;
    }
   componentDidUpdate()
       {
           console.log(' componentDidUpdate')
        document.getElementById('current-state').innerHTML="The Current  State is"
        +this.state.name;
       }

    render() { 
        console.log('Render Method')
        return (
            <div>
                <h5> This is {this.state.name}</h5>
                <h3 id="previous-state"></h3>
                <h4 id='current-state'></h4>
            </div>
        );
    }
}
 
export default getSnapshotDemo;