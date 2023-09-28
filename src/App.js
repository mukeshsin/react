import React, { Component } from 'react';
import './App.css';
// import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
// import Hello from  './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'

class App extends Component {
  render (){
  return (
    <div className="App">
     {/* <Greet name="Mayank" section="A"></Greet>
     <Greet  name="Ravan"section="B"></Greet>
     <Greet  name="Ramesh"section="C"></Greet> */}
     {/* <Greet  name="Monu" section="A"></Greet>
     <Welcome  name="America"></Welcome>
     <Welcome  name="London"></Welcome> */}
      <Welcome name="newyork"section="A"></Welcome>
     <Message></Message>
     <Counter></Counter>
     <FunctionClick></FunctionClick>
     {/* <Hello></Hello> */}
    </div>
  )
  }
}

export default App;
