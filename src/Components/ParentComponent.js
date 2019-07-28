import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoCompo from './MemoCompo';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'jyoti'
        }
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: 'jyoti'
            })
        },2000 )
    }
    
    render() {
        console.log('ParentComponnetRender')
        return (
            <div>
                Parent Component
                <MemoCompo name={this.state.name}/>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComponent
