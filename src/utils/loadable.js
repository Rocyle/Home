import React from 'react'
import Loadabel from 'react-loadable'

const LoaddingComponent = () => {
  return (
    <div>
      <div style={{ marginTop: '20%', marginLeft: '20%' }}>
        <img src={require('../assets/imgs/load.gif')} style={{ width: '50%', height: '50%' }} /> 
        <p style={{textAlign:'center'}}>加载中。。。</p>
        </div>
    </div>
  )
}
export default (loader, loading = LoaddingComponent) => {
  return Loadabel({
    loader,
    loading
  })
}