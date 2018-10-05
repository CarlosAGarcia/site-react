import React, { Component } from 'react';
import './App.css';
import {createStore} from 'redux';

class App extends Component {
  render() {
    
    //reducer counter takes past state, action and gives new state
    //never touch this const or aloter it
    const counter = (state = 0, action) => {
      switch (action.type){
        case 'INCREASE' :
          return state+1;
        case 'DECREASE' :
          return state-1;
        default:
          return state;
      }
    }

    const store = createStore(counter);
    console.log("state is "+store.getState());

    store.dispatch({type:'INCREASE'});
    console.log("state is "+store.getState());

    const render2 = ()=> store.getState();
     store.subscribe(render2);
     
     document.addEventListener('click', ()=>{store.dispatch({type: 'INCREASE'})});
    

    return (

      
      <div className="App">
        {render2}

      </div>
    );
  }
}

export default App;
