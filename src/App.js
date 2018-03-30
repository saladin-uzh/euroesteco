import React from "react"
import "./App.css"
import "materialize-css/dist/css/materialize.min.css"
import {Switch, Route} from "react-router-dom"
import Preloader from "./stateless/preloader"
import Header from "./components/header"
import {Footer} from "./components/footer"
import {Main} from "./components/main"
import {AboutUs} from "./components/aboutUs"
import {Sip} from "./components/sip"
import {SmartHouse} from "./components/smartHouse"
import * as M from "materialize-css"
import * as $ from "jquery"

export const Files = {
    logo: "img/logo.png",
    mainBg: "../img/List_01.jpg",
    footerBg: "../img/List_02.jpg",
    googleMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519.6568110875512!2d22" +
    ".28015005484492!3d48.612068816378326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739" +
    "19aaac640cd9%3A0x65f95d97b0fa751e!2z0YPQuy4g0JfQsNC90YzQutC-0LLQtdGG0LrQvtC5LCAzNiwg0KPQttCz0L7RgNC" +
    "-0LQsINCX0LDQutCw0YDQv9Cw0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgODgwMDA!5e0!3m2!1sru!2sua!4v1521821513555"
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            preloaderActive: true
        };

        this.togglePreloader = this.togglePreloader.bind(this);
    }
    togglePreloader() {
        this.setState({
            preloaderActive: !this.state.preloaderActive
        })
    }
    componentDidMount() {
        setTimeout(
            this.togglePreloader,
            1000
        );
    }
    componentDidUpdate() {
        M.Dropdown.init($(".dropdown-trigger"));
        M.Collapsible.init($(".collapsible"));
    }
    render() {
        return (
            <div className="App">
                <Preloader visible={this.state.preloaderActive}/>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/sip-technology" component={Sip}/>
                    <Route path="/smart-house" component={SmartHouse}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App