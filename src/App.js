import './App.css';
import React, { Component } from 'react'
 //class based components - learning about that in this application
 export default class App extends Component {
  c = "Divyansh";
   render() {
     return (
       <div>
        {/* Calling class variable using this function */}
         Heellooo babes {this.c} 
       </div>
     )
   }
 }
 