import React from "react"
import {Component} from "react/cjs/react.production.min"
import SatSetting from "./SatSetting"
import { Row, Col } from 'antd'
import SatelliteList from "./SatelliteList"
import {SAT_API_KEY, STARLINK_CATEGORY, NEARBY_SATELLITE} from "../constants"
import axios from "axios"
import WorldMap from "./WorldMap"

class Main extends Component {
    constructor(){
        super();
        this.state = {
            satInfo: null,
            satList: null,
            setting: null,
            isLoadingList: false
        };
    }
    render(){
        const { satInfo, satList, setting, isLoadingList } = this.state;
        return(
            <Row className="main">
                <Col span={6} className="left-side">
                    <SatSetting onShow={this.showNearbySatellite} />
                    <SatelliteList
                        satInfo={satInfo}
                        isLoading={isLoadingList}
                        onShowMap = {this.showMap} />
                </Col>
                <Col span={16} className="right-side">
                    <WorldMap satData={satList} observerData={setting} />
                </Col>
            </Row>

        )
    }


    showNearbySatellite = (setting)=>{
        this.setState({
            setting:setting
        })
        this.fetchSatellite(setting);
    }

    fetchSatellite = (setting)=>{
        const {latitude, longitude, elevation, altitude} = setting;
        const url=`/api/${NEARBY_SATELLITE}/${latitude}/${longitude}/${elevation}/${altitude}/${STARLINK_CATEGORY}/&apiKey=${SAT_API_KEY}`;
        this.setState({
            isLoadingList: true
        });
        axios
            .get(url)
            .then(response=> {
                console.log(response.data)
                this.setState({
                    satInfo: response.data,
                    isLoadingList: false
                });
            })
            .catch(error=>{
                console.log("err in fetch satellite -> ", error);
                this.setState({
                    isLoadingList: false
                });
            });
    };


    showMap = selected => {
        this.setState(preState => ({
            ...preState,
            satList: [...selected]
        }));
    };

}

export default Main;