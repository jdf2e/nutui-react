import React from 'react'
import Taro from '@tarojs/taro'
import { ArrowLeft } from '@nutui/icons-react-taro'
import './header.scss'
import config from '../../config.json'

const Header = () => {
  const navigateTo = () => {
    Taro.navigateBack({
      delta: 1,
    })
  }

  const compName = () => {
    let allComps: any = []
    let hashCompName = location.hash.split('pages/')[1].replace('/index', '')
    config.nav.map((item: any) => {
      allComps = [...allComps, ...item.packages]
    })

    let targetComp = allComps.filter(
      (item: any) => hashCompName === item.name.toLowerCase()
    )

    return targetComp[0]?.name
  }

  return (
    <>
      {Taro.getEnv() === 'WEB' ? (
        <div className="applets-demo-header">
          <div className="back" onClick={navigateTo}>
            <ArrowLeft />
          </div>
          <div className="applets-icon">
            <img src="https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png" />
          </div>
          <div>{compName()}</div>
        </div>
      ) : null}
    </>
  )
}

export default Header
