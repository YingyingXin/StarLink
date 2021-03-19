import React from "react";
import {Component} from "react/cjs/react.production.min"


class Header extends Component {
    render(){
        return (
            <header className="App-header">
                <img src={space_logo} className="App-logo" alt="logo"/>
                {/*Img 等待import*/}
                <p className={"title"}> StarLink Tracker</p>
            </header>
        )
    }
}

export default Header;
