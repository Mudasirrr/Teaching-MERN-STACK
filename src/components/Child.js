import React,{Component}from 'react';

class Child extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Ansa Abbasi"
        }
    }
    UpdateName=()=>{
        this.setState({name:"Ansa Amjad"})
    }
    render(){
        return(
            <div>

                    <h1> Name:{this.state.name}</h1>
                    <button onClick={this.UpdateName}>updateName</button>

        </div>
        )
    }

}
export default Child;
