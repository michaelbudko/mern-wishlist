import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import WishList from "./components/WishList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavbar/>
      <WishList/>
      </div>
    );
  }
}

export default App;
