import React from "react";
import {Component} from "react/cjs/react.production.min"
import SatSetting from "./SatSetting"

class Main extends Component {
    render(){
        return(
            <div className="main">
                <div className="left-side">
                    <SatSetting />
                </div>
                <div className="right-side"> Right </div>
            </div>

        )
    }
}

export default Main;