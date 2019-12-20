import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex, WhiteSpace, List, InputItem, WingBlank, Button, Toast } from 'antd-mobile';
import { loginApi } from '../apis/userApi'
export default class Login extends Component {
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
    // 登录后发出响应，并生成token值
    login = () => {
        const { pwd, username } = this.state;
        loginApi({
            password: pwd,
            phoneNum: username
        }).then((res) => {
            console.log(res)
            const { token, data } = res;
            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('phone', data.phoneNum);
                this.props.history.replace('/')
            } else {
                console.log('登录失败')
            }
        }).catch(e => { console.log(e) });
        Toast.success('Load success !!!', 1);
    }
    render() {
        const { username, pwd } = this.state;
        return (
            <div style={{ background: '#fff', position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}>
                <Flex justify="center">
                    <img src={require('../assets/imgs/logo.png')} style={{ width: '110px', height: '110px', marginTop: '100px' }} />
                </Flex>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <List >
                        <InputItem
                            value={username}
                            onChange={this.userChange}
                            placeholder="请输入用户名"
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
                    </List>
                    <WhiteSpace size="lg" />
                    <Button type="primary" style={{ background: '#00BC5B', color: '#fff' }} onClick={this.login}>登录</Button>
                    <WhiteSpace size="md" />
                    <Flex justify="between">
                        <Link to='/reg' style={{ color: '#00BC5B' }}>手机快速注册</Link>
                        <Link to='/' style={{ color: '#00BC5B', float: 'right' }}>忘记密码</Link>
                    </Flex>
                </WingBlank >
                <p style={{ position: 'absolute', bottom: 0, textAlign: 'center', width: '100%' }}>登录/注册代表同意《源码房产用户协议》</p>
            </div>
        )
    }
}
