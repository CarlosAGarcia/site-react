import React, { Component } from 'react';
import './App.css';

class Picture extends Component{
  render(){
    return(
      
      <img height="33%" width="33%" alt = {this.props.index} src={this.props.source}></img>
      
    );
  }
}

class App extends Component {
  render() {
    
   
    console.log(this.props.images);

    

    return (
      <div>
      {
        this.props.images.map((src, index)=>{
        return (
          <div key = {index}>
            <Picture source={src} alt={index+1} key={index}></Picture>
          </div>
        );
      }       
      )}
      </div>
    );
  }
}

export default App;
