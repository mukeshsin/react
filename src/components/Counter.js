import React, { Component } from 'react';


class Counter extends Component {
  constructor(props){
  super(props)
   this.state = {
    Count: 0
   }
  }

  increament() {
   this.setState({
    Count:this.state.Count +1
   })
   console.log(this.state.Count)
  }


  render (){
    return (
    <div> 
     Count - {this.state.Count}<br></br>
     <button onClick={()=>this.increament()}>Increment</button>
    </div>
    )
    
   }
}

export default Counter;
