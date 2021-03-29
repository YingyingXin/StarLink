import React, {Component} from "react"
import {Avatar, Button, Checkbox, List, Spin} from "antd"
import satellite from "../assets/images/satellite.jpg"

class SatelliteList extends Component {
    constructor() {
        super();
        this.state={
            selected: [],
            isLoading: false
        }
    }
    onChange = e=>{
        const {dataInfo, checked} = e.target;
        const { selected } = this.state;
        const list = this.addOrRemove(dataInfo, checked, selected);
        this.setState({selected:list})
    }
    addOrRemove = (item, status, list) => {
        //js中判断一个元素是否在一个list当中，用list.some
        const found = list.some(entry => entry.satid === item.satid);
        if (status && !found) {
            list = [...list, item];
        }
        if (!status && found) {
            //js中删除元素用filter， filter是将目标元素保留，而我们想要取反所以用!==： 删filter访map增...
            list = list.filter(entry => {
                return entry.satid !== item.satid;
            });
        }
        return list;
    };
    onShowSatMap = () => {
        this.props.onShowMap(this.state.selected);
    };

    render(){
        const satList = this.props.satInfo ? this.props.satInfo.above : [];
        const { isLoading } = this.props;
        const { selected } = this.state;

        return(
            <div className="sat-list-box">
                <Button className="sat-list-btn" size="large" type='primary' onClick={this.onShowSatMap}
                        disabled={selected.length ===0}
                >Track on the map</Button>
                <hr/>

                {
                    isLoading ?
                        <div>
                            <Spin tip="loading..." size="large" />
                        </div>
                        :
                        <List
                            className="sat-list"
                            itemLayout="horizontal"
                            size="small"
                            dataSource={satList}
                            renderItem={item => (
                                //dataInfo是自定义属性，让checkbox与对用的item一一对应，这样可以监测是哪一颗卫星被点击
                                <List.Item actions={[<Checkbox dataInfo={item} onChange={this.onChange} />]} >
                                    <List.Item.Meta
                                        avatar={<Avatar size={50} src={satellite} />}
                                        title={<p>{item.satname}</p>}
                                        description={`Launch Date: ${item.launchDate}`}
                                    />

                                </List.Item>
                            )}
                        />


                }

            </div>

        );
    }
}

export default SatelliteList;