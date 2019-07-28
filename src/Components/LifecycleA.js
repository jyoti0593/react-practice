import React, { Component } from 'react'
import LifecycleB from './LifeCycelB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'jyoti'
        }
        console.log('lifeCycelA constructur')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate()
    {
        console.log('LifeCycelA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycelA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'codeEvolution'
        })
    }
    render() {
        console.log('LifeCycle A rendered')
        return (
            <div>
               <div>LifeCycleA </div>
               <button onClick={this.changeState}>Change State</button>
               <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
