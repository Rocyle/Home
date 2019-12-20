import React, { Component } from 'react'
import { Flex, Carousel, Grid } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import '../../assets/styles/home.css'

class Home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 220,
        city: '定位中...',
        // card:[{icon:}]
    }
    componentDidMount() {
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    console.log('result',result)
                    const { city } = result;
                    this.setState({
                        city
                    })
                }
            })
        })
    }
    goToCity = () => {
        this.props.history.replace('/cityList')
    }
    goToSearch = () => {
        this.props.history.replace('/search')
    }
    goToMap = () => {
        this.props.history.replace('/mapPage')
    }
    render() {
        const data = Array.from(new Array(8)).map((_val, i) => ({
            icon: `${require('../../assets/imgs/Homeless.png')}`,
            text: `出租房${i}`,
        }));
        return (
            <div>
                {/* 头部栏 */}
                <Flex justify="center" style={{ height: 50, backgroundColor: '#00BC5B' }}>
                    <Flex style={{ width: 70, color: '#fff' }} justify="center" onClick={this.goToCity}>
                        {this.state.city} ▼
                      </Flex>
                    <Flex style={{ flex: 1, height: 40, borderRadius: 20, border: '1px solid #ccc', backgroundColor: '#fff' }} onClick={this.goToSearch}>
                        <img src={require('../../assets/imgs/search.png')} style={{ width: 22, height: 22, marginLeft: 15 }} />
                        <span style={{ marginLeft: 10, color: '#666' }}>找好房，上房源App</span>
                    </Flex>
                    <Flex justify="center" align="center" style={{ width: 60 }} onClick={this.goToMap} >
                        <img src={require('../../assets/imgs/map.png')} style={{ width: 28, height: 28 }} />
                    </Flex>

                </Flex>
                {/* 轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}

                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`${require(`../../assets/imgs/banner${val}.jpg`)}`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 220});
                                }}

                            />
                        </a>
                    ))}
                </Carousel>
                {/* 扁平化菜单 */}
                <div>
                    <Grid data={data} activeStyle={false} />
                </div>
                {/* <Flex>
                    <div><img src={require('../../assets/imgs/Homeless.png')}/></div>
                    <div><img src={require('../../assets/imgs/Homeless.png')}/></div>
                    <div><img src={require('../../assets/imgs/Homeless.png')}/></div>
                    <div><img src={require('../../assets/imgs/Homeless.png')}/></div>
                </Flex> */}
                {/* 百科全 */}
                <div className='title' style={{ marginTop: '8px', backgroundColor: '#fff' }}>
                    <h2 style={{ color: '#00BC5B', padding: '10px 0', margin: 0 }}>房产全百科<span style={{ fontSize: "16px", color: '#ccc', fontWeight: "normal" }}>专业的买房攻略</span></h2>
                    <Flex>
                        <div><img src={require('../../assets/imgs/daikuan.png')} /><p>我要贷款</p> </div>
                        <div><img src={require('../../assets/imgs/jisuanqi2.png')} /><p>房贷计算</p> </div>
                        <div><img src={require('../../assets/imgs/zhishi.png')} /><p>知识</p> </div>
                        <div><img src={require('../../assets/imgs/saoyisao.png')} /><p>扫一扫</p> </div>
                    </Flex>
                </div>
                {/* 猜你喜欢 */}
                <div style={{ marginTop: '8px', backgroundColor: '#fff' }}>
                    <p style={{ color: '#333', padding: '10px', margin: 0, fontSize: '18px' }}>猜你喜欢</p>
                    <Flex>
                        <img src={require('../../assets/imgs/banner1.jpg')} style={{ width: 90, height: 90, margin: 10 }} />
                        <Flex style={{ flex: 1 }}><div style={{ flex: 1 }}><h2>绿地锦天府</h2><p style={{ color: '#999', fontSize: 16, margin: '10px 0' }}>锦江区  攀成钢</p><p style={{ color: '#999', fontSize: 16, margin: '10px 0' }}>三室一厅</p></div> <h2 style={{ color: '#f00', width: '90px' }}>1900/平</h2></Flex>
                    </Flex>
                    <Flex>
                        <img src={require('../../assets/imgs/banner1.jpg')} style={{ width: 90, height: 90, margin: 10 }} />
                        <Flex style={{ flex: 1 }}><div style={{ flex: 1 }}><h2>绿地锦天府</h2><p style={{ color: '#999', fontSize: 16, margin: '10px 0' }}>锦江区  攀成钢</p><p style={{ color: '#999', fontSize: 16, margin: '10px 0' }}>三室一厅</p></div> <h2 style={{ color: '#f00', width: '90px' }}>1900/平</h2></Flex>
                    </Flex>
                    <Flex>
                        <img src={require('../../assets/imgs/banner1.jpg')} style={{ width: 90, height: 90, margin: 10 }} />
                        <Flex style={{ flex: 1 }}><div style={{ flex: 1 }}><h2>绿地锦天府</h2><p style={{ color: '#999', fontSize: 16, margin: '10px 0' }}>锦江区  攀成钢</p><p style={{ color: '#999', fontSize: 16, margin: '10px 0' }}>三室一厅</p></div> <h2 style={{ color: '#f00', width: '90px' }}>1900/平</h2></Flex>
                    </Flex>

                </div>

            </div>
        )
    }
}
export default withRouter(Home);