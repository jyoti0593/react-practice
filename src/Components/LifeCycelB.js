import React, { Component } from 'react'


class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'jyoti'
        }
        console.log('LifeCycleB constructur')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate()
    {
        console.log('LifeCycleB shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycelB componentDidUpdate')
    }
    render() {
        console.log('LifeCycleB rendered')
        return (
            <div>
               LifeCycleB
               
            </div>
        )
    }
}

export default LifeCycleB
