import React, { Component } from 'react';
import './App.css';
import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";
import {Preloader} from "./stateless/preloader";
import {UnderDevelopmentPage} from "./stateless/underDevelopmentPage";
import {Header} from "./stateless/header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Preloader/>
          <UnderDevelopmentPage/>
          <Header/>
      </div>
    );
  }
}

export default App;
