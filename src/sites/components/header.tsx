import React, { useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ArrowLeft } from '@nutui/icons-react-taro'
import './header.scss'
import config from '../../config.json'

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const isWeb = Taro.getEnv() === 'WEB'

  const navigateTo = () => {
    if (isWeb) {
      Taro.navigateBack({ delta: 1 })
      return
    }
    try {
      const pages = Taro.getCurrentPages ? Taro.getCurrentPages() : []
      if (pages.length > 1) {
        Taro.navigateBack({ delta: 1 })
      } else {
        Taro.reLaunch({ url: '/pages/index/index' })
      }
    } catch (e) {
      Taro.navigateBack({ delta: 1 })
    }
  }

  const compTitle = useMemo(() => {
    if (title) return title

    let hashCompName = ''
    if (isWeb) {
      if (typeof location !== 'undefined' && location.hash) {
        const parts = location.hash.split('pages/')
        if (parts[1]) {
          hashCompName = parts[1].replace('/index', '').toLowerCase()
        }
      }
    } else {
      try {
        const pages = Taro.getCurrentPages ? Taro.getCurrentPages() : []
        const curr = pages[pages.length - 1]
        const route =
          curr?.route || Taro.getCurrentInstance()?.router?.path || ''
        const match = route.match(/pages\/([^/]+)\/index/)
        if (match && match[1]) {
          hashCompName = match[1].toLowerCase()
        }
      } catch (e) {}
    }

    if (!hashCompName) return ''

    let allComps: any[] = []
    config.nav.forEach((item: any) => {
      if (item.packages) {
        allComps = [...allComps, ...item.packages]
      }
    })

    const targetComp = allComps.find(
      (item: any) => hashCompName === item.name.toLowerCase()
    )

    return (
      targetComp?.name ||
      hashCompName.charAt(0).toUpperCase() + hashCompName.slice(1)
    )
  }, [isWeb, title])

  const navStyles = useMemo(() => {
    if (isWeb) return { statusBarHeight: 0, navBarHeight: 57 }

    let statusBarHeight = 44
    let navBarHeight = 44
    try {
      const windowInfo = Taro.getWindowInfo
        ? Taro.getWindowInfo()
        : Taro.getSystemInfoSync()
      if (windowInfo?.statusBarHeight) {
        statusBarHeight = windowInfo.statusBarHeight
      }
      if (Taro.getMenuButtonBoundingClientRect) {
        const rect = Taro.getMenuButtonBoundingClientRect()
        if (rect && rect.top && rect.height) {
          navBarHeight = (rect.top - statusBarHeight) * 2 + rect.height
        }
      }
    } catch (e) {}

    return {
      statusBarHeight,
      navBarHeight,
    }
  }, [isWeb])

  if (isWeb) {
    return (
      <div className="applets-demo-header">
        <div className="back" onClick={navigateTo}>
          <ArrowLeft />
        </div>
        <div className="applets-icon">
          <img src="https://img13.360buyimg.com/imagetools/jfs/t1/67106/30/23857/9375/63b4df85Fce5fd959/35265019206515fe.png" />
        </div>
        <div>{compTitle}</div>
      </div>
    )
  }

  return (
    <View
      className="mp-demo-header"
      style={{ paddingTop: `${navStyles.statusBarHeight}px` }}
    >
      <View
        className="mp-demo-header-bar"
        style={{ height: `${navStyles.navBarHeight}px` }}
      >
        <View className="mp-demo-header-back" onClick={navigateTo}>
          <ArrowLeft size={18} color="#333333" />
        </View>
        <View className="mp-demo-header-title">{compTitle}</View>
      </View>
    </View>
  )
}

export default Header
