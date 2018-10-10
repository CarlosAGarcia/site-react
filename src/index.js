import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import  rootReducer  from "./Reducers/reducers";

let images = [
    'https://i.imgur.com/AmsbGLZ.jpg',
    'https://i.imgur.com/vSsoBLV.jpg',
    'https://i.imgur.com/Xhvza3y.jpg',
    'https://i.imgur.com/3Z8ecQ9.jpg',
    'https://i.imgur.com/0UepuwF.jpg',
    'https://i.imgur.com/j6SwRkn.jpg',
    'https://i.imgur.com/t1OSSqn.jpg',
    'https://i.imgur.com/gJLuQJf.jpg',
    'https://i.imgur.com/4xlLkHa.jpg',
    'https://i.imgur.com/8mKKX7p.jpg',
    'https://i.imgur.com/Wnf4VEf.jpg',
    'https://i.imgur.com/FAxG6mD.jpg',
    'https://i.imgur.com/RX4b6Be.jpg',
    'https://i.imgur.com/LJhTRbT.jpg'

];
      
const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App images={images} store = {store}/>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();













    /*dumb component, doesnt need to know anything
    const Counter = props => {

    console.log(props);
    return(
    <div>
        <h1>{props.value}</h1>
        <button onClick = {props.onIncrement}>INC</button>
        <button onClick = {props.onDecrement}>DEC</button>
    </div>
)}*/

        /*
    <Counter 
        value = {store.getState()}
        onIncrement = {() => store.dispatch({type:'INCREASE'})}
        onDecrement = {() => store.dispatch({type: 'DECREASE'})}
    />, 
        document.getElementById('root')
    );*/

