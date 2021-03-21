import React from "react";
import {Component} from "react/cjs/react.production.min"
import SatSetting from "./SatSetting"
import { Row, Col } from 'antd';

class Main extends Component {
    render(){
        return(
            <Row className="main">
                <Col span={8} className="left-side">
                    <SatSetting />
                </Col>
                <Col span={16} className="right-side">right</Col>
            </Row>

        )
    }
}

export default Main;