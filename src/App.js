import React from "react"
import "./App.css"
import "materialize-css/dist/js/materialize"
import "materialize-css/dist/css/materialize.min.css"
import {Switch, Route} from "react-router-dom"
import Preloader from "./stateless/preloader"
import UnderDevelopmentPage from "./stateless/underDevelopmentPage"
import {Header} from "./components/header"
import {Main} from "./components/main"
import {AboutUs} from "./components/aboutUs"
import {Sip} from "./components/sip"
import {ContactUs} from "./components/contactUs"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            preloaderActive: true
        };

        this.togglePreloader = this.togglePreloader.bind(this)
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
        )
    }
    render() {
        return (
            <div className="App">
                <Preloader visible={this.state.preloaderActive}/>
                {/*<UnderDevelopmentPage/>*/}
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/sip-technology" component={Sip}/>
                    <Route path="/contact-us" component={ContactUs}/>
                </Switch>
            </div>
        )
    }
}

export default App