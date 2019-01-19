import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './../Home/home';
import About from './../About/about';
import Gallery from './../Gallery/gallery';
import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/home" className="nav-items">Home</Link>
              </li>
              <li>
                <Link to="/about" className="nav-items">About</Link>
              </li>
              <li>
                <Link to="/gallery" className="nav-items">Gallery</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>
    );
  }
}

export default Navigation;