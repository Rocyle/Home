import React, { Component } from 'react'
import { Button } from 'antd-mobile';

export default class Wechat extends Component {
    render() {
        return (
            <div style={{ height: '100%', paddingTop: 180 }}>
                <div style={{ backgroundColor: '#fff', borderRadius: "8px", width: 340, height: 300, margin: 'auto', textAlign: 'center' }}>
                    <img src={require('../../assets/imgs/Homeless.png')} style={{ margin: '20px 0', width: 100, height: 100 }} />
                    <h3>置业顾问：<span style={{ color: '#00BC5B' }}>张小妹</span></h3>
                    <h3>专心为企业做事服务</h3>
                    <Button style={{ width: '120px', margin: '0 auto', color: '#fff', backgroundColor: '#00BC5B' }}>我要聊天</Button>
                </div>
            </div>
        )
    }
}
