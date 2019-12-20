import React from 'react';
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
// import Loadable from 'react-loadable'
import Loadable from './utils/loadable'
import Main from './pages/main/Main'
//懒加载语句
// const Load = () => { return (<div>加载中。。。</div>) }
// const Mian = Loadable({
//   loader: () => import(/*webpackChunkName:'home'*/'./pages/main/Main'),
//   loading: Load
// })

const Login = Loadable(() => import(/*webpackChunkName:'login'*/'./pages/Login'))
const Reg = Loadable(() => import(/*webpackChunkName:'reg'*/'./pages/Reg'))
const ErrorPage = Loadable(() => import(/*webpackChunkName:'errorPage'*/'./pages/ErrorPage'))
const CityList = Loadable(() => import(/*webpackChunkName:'cityList'*/'./pages/header/CityList'))
const Search = Loadable(() => import(/*webpackChunkName:'search'*/'./pages/header/Search'))
const MapPage = Loadable(() => import(/*webpackChunkName:'mapPage'*/'./pages/header/MapPage'))


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path='/reg' component={Reg} />
        <Route path='/login' component={Login} />
        <Route path='/cityList' component={CityList} />
        <Route path='/search' component={Search} />
        <Route path='/mapPage' component={MapPage} />
        <Route component={ErrorPage} />
        {/* <Redirect to='/'/> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
