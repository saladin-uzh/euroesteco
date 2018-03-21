import React, { Component } from 'react';
import './App.css';
import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";
import {Switch, Route} from 'react-router-dom';
import {Preloader} from "./stateless/preloader";
import {UnderDevelopmentPage} from "./stateless/underDevelopmentPage";
import {Header} from "./components/header";
import {Main} from "./components/main";
import {AboutUs} from "./components/aboutUs";
import {Sip} from "./components/sip";
import {ContactUs} from "./components/contactUs";

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Preloader/>*/}
          {/*<UnderDevelopmentPage/>*/}
          <Header/>
          <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/about-us" component={AboutUs}/>
              <Route path="/sip-technology" component={Sip}/>
              <Route path="/contact-us" component={ContactUs}/>
          </Switch>
      </div>
    );
  }
}

export default App;
