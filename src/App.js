import React from "react"
import "./App.css"
import "materialize-css/dist/css/materialize.min.css"
import {Switch, Route} from "react-router-dom"
import Preloader from "./stateless/preloader"
import Header from "./components/header"
import {Footer} from "./components/footer"
import {Main} from "./components/main/main"
import {Projects} from "./components/projects"
import {Gallery} from "./components/gallery"
import {Price} from "./components/price"
import {ContactUs} from "./components/contact-us"
import {TechContainer} from "./components/technology/techContainer"
import * as M from "materialize-css"
import * as $ from "jquery"
import {Calculator} from "./components/calculator"
import {AboutUs} from "./components/main/aboutUs";
import {Sip} from "./components/technology/sip";
import {MiTek} from "./components/technology/miTek";
import {MythBusters} from "./components/technology/mythBusters";
import {SmartHouse} from "./components/technology/smartHouse";

export const Files = {
    logo: "/img/logo.png",
    mainBg: "../img/List_01.jpg",
    aboutUsBg: "../img/List_02.jpg",
    sipPg: "../img/List_04.jpg",
    smartHouseBg: "../img/List_05.jpg",
    googleMapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d519.6568110875512!2d22" +
    ".28015005484492!3d48.612068816378326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739" +
    "19aaac640cd9%3A0x65f95d97b0fa751e!2z0YPQuy4g0JfQsNC90YzQutC-0LLQtdGG0LrQvtC5LCAzNiwg0KPQttCz0L7RgNC" +
    "-0LQsINCX0LDQutCw0YDQv9Cw0YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgODgwMDA!5e0!3m2!1sru!2sua!4v1521821513555"
};

export const backgroundImg = (imgSrc) => {
    return {
        backgroundColor: "#5d6068",
        backgroundImage: `url(${imgSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% auto",
        backgroundBlendMode: "multiply"
    }
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
        M.Dropdown.init($(".dropdown-trigger:not(.btn)"), {
            coverTrigger: false
        });
        M.Dropdown.init($(".dropdown-trigger.btn"));
        M.Collapsible.init($(".collapsible"));
        M.Tabs.init($(".tabs"));
    }
    render() {
        return (
            <div className="App">
                <Preloader visible={this.state.preloaderActive}/>
                <Header/>
                <Switch>
                    <Route exact path="/" component={AboutUs}/>
                    <Route exact path="/news" component={Main}/>
                    <Route exact path="/technology/sip" component={Sip}/>
                    <Route exact path="/technology/mitek" component={MiTek}/>
                    <Route exact path="/technology/myths" component={MythBusters}/>
                    <Route exact path="/technology/smarthouse" component={SmartHouse}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/gallery" component={Gallery}/>
                    <Route path="/price" component={Price}/>
                    <Route path="/contact-us" component={ContactUs}/>
                </Switch>
                <Calculator/>
                <Footer/>
            </div>
        )
    }
}

export default App