import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, WhiteSpace, List, InputItem, WingBlank, Button, Checkbox } from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;

export default class Reg extends Component {
    state = {
        username: '',
        pwd: ''
    }
    userChange = (val) => {

        this.setState({
            username: val
        })
    }
    pwdChange = (val) => {
        this.setState({
            pwd: val
        })
    }
    render() {
        const { username, pwd } = this.state;
        return (
            <div style={{ background: '#fff', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
                <Flex justify="center">
                    <img src={require('../assets/imgs/logo.png')} style={{ width: '110px', height: '110px', marginTop: '70px' }} />
                </Flex>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <List >
                        <InputItem
                            value={username}
                            onChange={this.userChange}
                            placeholder="请输入用户名/手机号"
                        >
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/phone.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>

                        <InputItem
                            value={pwd}
                            onChange={this.pwdChange}
                            placeholder="请输入密码"
                        >
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <InputItem
                            onChange={this.pwdChange}
                            placeholder="请再次确认密码"
                        >
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <div style={{float:'right',color:'#333',lineHeight:'41px',fontSize:'18px',marginRight:'5px'}}>获取验证码</div>
                        <InputItem
                            value={username}
                            onChange={this.userChange}
                            placeholder="请输入手机验证码"
                        >
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/phone.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                        </InputItem>
                        <Flex>
                            <Flex.Item>
                                <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                                    我已同意 <a onClick={(e) => { e.preventDefault(); alert('agree it'); }} style={{ color: '#00BC5B' }} >《用户服务协议》和《隐私协议》</a>
                                </AgreeItem>
                            </Flex.Item>
                        </Flex>
                    </List>
                    <WhiteSpace size="lg" />
                    <Button type="primary" style={{ background: '#00BC5B', color: '#fff' }}>立即注册</Button>
                    <WhiteSpace size="lg" />
                    <Link to='/' style={{ color: '#00BC5B' }}>已有账号</Link>
                </WingBlank >

            </div>
        )
    }
}
