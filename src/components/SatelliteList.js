import React, {Component} from "react"
import {Button, Checkbox, List, Spin} from "antd"


class SatelliteList extends Component {
    render(){
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        const { isLoading } = this.props;

        return(
            <div className="sat-list-box">
                <Button className="sat-list-btn" size="large" type='primary'>Track on the map</Button>
                <hr/>

                {
                    isLoading ?
                        <div>
                            <Spin tip="loading..." size="large" />
                        </div>
                        :
                            <div>data</div>

                }

            </div>

        );
    }
}

export default SatelliteList;