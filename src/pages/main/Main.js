import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Wechat from './WeChat';
import History from './History';
import Person from './Person';

export default class TabBarExample extends React.Component {
  state = {
    selectedTab: 0,
    list: [
      { id: 0, title: '首页', icon: 'home' },
      { id: 1, title: '微聊', icon: 'wechat' },
      { id: 2, title: '历史', icon: 'history' },
      { id: 3, title: '我的', icon: 'my' },

    ]
  }
  renderContent(id) {
    // console.log('id', id)
    switch (id) {
      case 0:
        return <Home />;
      case 1:
        return <Wechat />
      case 2:
        return <History />
      case 3:
        return <Person />
      default: return <Home />;
    }
    /* return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
          {id}
      </div>
  ); */
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"//未选中的字体颜色
          tintColor="#00BC5B"//选中的字体颜色
          barTintColor="#fff"//tabbar 背景色
        >
          {
            this.state.list.map((item) => {
              const { title, icon, id } = item;
              return (
              <TabBar.Item
                title={title}
                key={id}
                icon={<div style={{
                  width: '26px',
                  height: '26px',
                  background: `url(${require('../../assets/imgs/' + icon + '_s.png')}) center center /  25px 25px no-repeat`
                }}
                />
                }
                selectedIcon={<div style={{
                  width: '26px',
                  height: '26px',
                  background: `url(${require('../../assets/imgs/' + icon + '.png')}) center center /  25px 25px no-repeat`
                }}
                />
                }
                selected={this.state.selectedTab === id}
                onPress={() => {
                  this.setState({
                    selectedTab: id,
                  });
                }}

              >
                {this.renderContent(id)}
              </TabBar.Item>

              )
            })
          }
        </TabBar>
      </div>
    );
  }
}