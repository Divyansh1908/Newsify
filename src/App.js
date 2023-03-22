import './App.css';
import React, { Component } from 'react'
import NaviBar from './components/NaviBar';
import News from './components/News';
 //class based components - learning about that in this application
 export default class App extends Component {
  c = "Divyansh";
   render() {
     return (
       <div>
          <NaviBar/>
          <News/>
       </div>
     )
   }
 }
 