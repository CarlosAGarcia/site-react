import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

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

    //dumb component, doesnt need to know anything
    const Counter = props => {
        
    console.log(props);
    return(
    <div>
        <h1>{props.value}</h1>
        <button onClick = {props.onIncrement}>INC</button>
        <button onClick = {props.onDecrement}>DEC</button>
    </div>
)}

const render = () => {
    ReactDOM.render(
    <Counter 
        value = {store.getState()}
        onIncrement = {() => store.dispatch({type:'INCREASE'})}
        onDecrement = {() => store.dispatch({type: 'DECREASE'})}
    />, 
        document.getElementById('root')
    );
};
registerServiceWorker();
render();