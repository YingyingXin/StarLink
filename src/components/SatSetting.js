import React, {Component} from 'react';
import {Button, Form, InputNumber} from "antd"

class SatSettingForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const FormItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 11 }
            },
            wrapperCol: { span: 8 }
        }
        return (
            <Form {...FormItemLayout} className="sat-setting" onSubmit={this.showSatellite}>
                <Form.Item label="Longitude(degree)">
                    {
                        getFieldDecorator("longitude",{
                            rules:[{
                                required:true,
                                message: "Please input your Longitude"
                            }]
                        })(<InputNumber min={-180} max={180} style={{width:"100%"}} />)
                    }
                </Form.Item>

                <Form.Item label="Latitude(degree)">
                    {
                        getFieldDecorator("latitude",{
                            rules:[{
                                required:true,
                                message: "Please input your Latitude"
                            }]
                        })(<InputNumber min={-180} max={180} style={{width:"100%"}} />)
                    }
                </Form.Item>

                <Form.Item label="Elevation(meters)">
                    {
                        getFieldDecorator("elevation",{
                            rules:[{
                                required:true,
                                message: "Please input your Elevation"
                            }]
                        })(<InputNumber min={-180} max={180} style={{width:"100%"}} />)
                    }
                </Form.Item>

                <Form.Item label="Altitude(meters)">
                    {
                        getFieldDecorator("altitude",{
                            rules:[{
                                required:true,
                                message: "Please input your Altitude"
                            }]
                        })(<InputNumber min={-180} max={180} style={{width:"100%"}} />)
                    }
                </Form.Item>
                <Form.Item className="show-nearby">
                    <Button type="primary" htmlType="submit">
                        Find Nearby Satellite
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    showSatellite = e=>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                this.props.onShow(values);
            }
        })
    };
}
const SatSetting = Form.create()(SatSettingForm);
//Form.create返回函数，该函数接收SatSettingForm组件作为参数，最后返回一个新组件，这称为高级组件
//必须先定义该高级组件才能在第6行使用getFieldDecorator
export default SatSetting;