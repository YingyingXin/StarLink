import React from "react"
import {Component} from "react/cjs/react.production.min"
import spacex_logo from "../assets/images/spacex_logo.svg"

class Header extends Component {
    render(){
        return (
            <header className="App-header">
                <img src={spacex_logo} className="App-logo" alt="logo"/>
                <p className="title"> StarLink Tracker</p>
            </header>
        )
    }
}

export default Header;
