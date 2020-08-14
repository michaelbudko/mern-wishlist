import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/AppNavbar";
import WishList from "./components/WishList";
import ItemModal from "./components/itemModal";
import './App.css';
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <AppNavbar/>
        <Container>
        <ItemModal/>
        <WishList/>
        </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
