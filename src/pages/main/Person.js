import React, { Component } from 'react'
import { Flex, List } from 'antd-mobile';

const Item = List.Item;
export default class Person extends Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: '#66CBFC', color: '#fff' }}>
                    <Flex style={{ padding: '30px 10px 20px' }}>
                        <img src={require('../../assets/imgs/Homeless.png')} style={{ width: 90, height: 90 }} />
                        <div style={{ flex: 1, marginLeft: 16 }}><h2>登录/注册</h2><p>可以与经纪人联系</p></div>
                        <span ><img src={require('../../assets/imgs/set.png')} style={{ width: 30, marginRight: 30 }} /></span>
                    </Flex>
                    <Flex style={{ fontSize: 18, paddingBottom: 20 }}>
                        <div style={{ flex: 1, textAlign: 'center' }}><p>0</p><Flex align='center' justify='center'>
                            <img src={require('../../assets/imgs/money.png')} style={{ width: 30, height: 30, marginRight: 8 }} />
                            钱包
                        </Flex></div>
                        <div style={{ flex: 1, textAlign: 'center', borderLeft: '2px solid #fff', borderRight: '2px solid #fff' }}><p>0</p><Flex align='center' justify='center'>
                            <img src={require('../../assets/imgs/price.png')} style={{ width: 30, height: 30, marginRight: 8 }} />
                            优惠
                        </Flex></div>
                        <div style={{ flex: 1, textAlign: 'center' }}><p>0</p><Flex align='center' justify='center'>
                            <img src={require('../../assets/imgs/icon.png')} style={{ width: 30, height: 30, marginRight: 8 }} />
                            我的积分
                        </Flex></div>
                    </Flex>
                </div>
                {/* 列表部分 */}
                <List style={{ marginTop: 10 }}>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/金币.png')} style={{ marginRight: 8 }} />我的积分</Item>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/订阅.png')} style={{ marginRight: 8 }} />我的订阅</Item>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/人数.png')} style={{ marginRight: 8 }} />微聊联系人</Item>
                </List>
                <List style={{ marginTop: 10 }}>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/计算器 (1).png')} style={{ marginRight: 8 }} />房贷计算器</Item>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/home_s.png')} style={{ marginRight: 8 }} />我的房子</Item>
                </List>
                <List style={{ marginTop: 10 }}>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/星.png')} style={{ marginRight: 8 }} />我的看房纪录</Item>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/问答.png')} style={{ marginRight: 8 }} />我的问答</Item>
                </List>
                <List style={{ marginTop: 10 }}>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/设置.png')} style={{ marginRight: 8 }} />设置</Item>
                    <Item arrow="horizontal" onClick={() => { }}> <img src={require('../../assets/imgs/反馈信息.png')} style={{ marginRight: 8 }} />意见反馈</Item>
                </List>
            </div>
        )
    }
}
