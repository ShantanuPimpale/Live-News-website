
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
          <Routes>
            <Route exact path="/" element={<News  key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
            <Route exact path="/buisness" element={<News key="buisness" pageSize={this.pageSize} country="in" category="buisness" />}></Route>
            <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News  key="health" pageSize={this.pageSize} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News  key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News  key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          </Routes>
        </Router>


      </div>
    )
  }
}
