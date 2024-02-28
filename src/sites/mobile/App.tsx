import './App.scss'
import React, { useCallback, useState } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import loadable, { LoadableComponent } from '@loadable/component'
import { ArrowLeft } from '@nutui/icons-react'
import routes from './router'
import Links from './Links'
import logo from '@/sites/assets/images/logo-red.png'
import useLocale, { getLocale } from '@/sites/assets/locale/uselocale'
import Configprovider, { useConfig } from '@/packages/configprovider'
import zhTW from '@/locales/zh-TW'
import zhCN from '@/locales/zh-CN'
import enUS from '@/locales/en-US'
import { BaseLang } from '@/locales/base'
import { nav } from '@/config.json'

interface Languages {
  [key: string]: BaseLang
}

const languages: Languages = {
  zhTW,
  zhCN,
  enUS,
}

const defaultTheme = {}
const darkTheme = {
  nutuiColorPrimary: '#fa3725',
  nutuiColorPrimaryStop1: '#f54958',
  nutuiColorPrimaryStop2: '#fa3725',
  nutuiColorTextLink: '#396acc',
  nutuiBrand1: '#403635',
  nutuiBrand2: '#665452',
  nutuiBrand3: '#99706b',
  nutuiBrand4: '#cc5f52',
  nutuiBrand5: '#f2503d',
  nutuiBrand6: '#fa3725',
  nutuiBrand7: '#f24130',
  nutuiBrand8: '#e55446',
  nutuiBrand9: '#f26e61',
  nutuiBrand10: '#e5928a',
  nutuiGray1: '#1f1f1f',
  nutuiGray2: '#141414',
  nutuiGray3: '#0a0a0a',
  nutuiGray4: '#666666',
  nutuiGray5: '#818181',
  nutuiGray6: '#999999',
  nutuiGray7: '#cccccc',
  nutuiGray8: 'rgba(0, 0, 0, 0.4)',
  nutuiGray9: 'rgba(0, 0, 0, 0.08)',
  nutuiGray10: 'rgba(0, 0, 0, 0.02)',
  nutuiBlack1: 'rgba(255, 255, 255, 0)',
  nutuiBlack2: 'rgba(255, 255, 255, 0.2)',
  nutuiBlack3: 'rgba(255, 255, 255, 0.06)',
  // nutuiBlack4: 'rgba(0, 0, 0, 0.1)',
  // nutuiBlack5: 'rgba(0, 0, 0, 0.2)',
  // nutuiBlack6: 'rgba(0, 0, 0, 0.3)',
  // nutuiBlack7: 'rgba(0, 0, 0, 0.4)',
  // nutuiBlack8: 'rgba(0, 0, 0, 0.5)',
  // nutuiBlack9: 'rgba(0, 0, 0, 0.6)',
  nutuiBlack10: 'rgba(0, 0, 0, 0.7)',
  // nutuiBlack11: 'rgba(0, 0, 0, 0.8)',
  // nutuiBlack12: 'rgba(0, 0, 0, 0.9)',
  // nutuiBlack13: 'rgba(0, 0, 0, 1)',
  nutuiWhite1: 'rgba(31, 31, 31, 0)',
  // nutuiWhite2: 'rgba(255, 255, 255, 0.02)',
  // nutuiWhite3: 'rgba(255, 255, 255, 0.06)',
  // nutuiWhite4: 'rgba(255, 255, 255, 0.1)',
  // nutuiWhite5: 'rgba(255, 255, 255, 0.2)',
  // nutuiWhite6: 'rgba(255, 255, 255, 0.3)',
  nutuiWhite7: 'rgba(31, 31, 31, 0.4)',
  nutuiWhite8: 'rgba(31, 31, 31, 0.5)',
  // nutuiWhite9: 'rgba(255, 255, 255, 0.6)',
  // nutuiWhite10: 'rgba(255, 255, 255, 0.7)',
  // nutuiWhite11: 'rgba(255, 255, 255, 0.8)',
  nutuiWhite12: 'rgba(31, 31, 31, 0.9)',
  // nutuiWhite13: 'rgba(255, 255, 255, 1)',
  nutuiColorTextDisable: '#666666',
  boxShadow: '0px 1px 7px 0px #141414',
  pickerMaskBgImg:
    'linear-gradient(180deg,rgba(31, 31, 31, 1),rgba(31, 31, 31, 0.4)),linear-gradient(0deg, rgba(31, 31, 31, 1), rgba(31, 31, 31, 0.4))',
  rowContentBgColor: '#0a0a0a',
  rowContentLightBgColor: 'rgba(0, 0, 0, 0.4)',
}

const WithNavRouter = ({ C }: any) => {
  const context = useConfig()
  const handleSwitchLocale = () => {
    let locale = getLocale()
    let location = window.parent.location
    if (locale == 'zh-CN') {
      location.replace(location.href.replace('zh-CN', 'en-US'))
    } else {
      location.replace(location.href.replace('en-US', 'zh-CN'))
    }
  }
  const getComponentName = () => {
    const s = window.location.hash.split('/')
    const cname = s[s.length - 1].toLowerCase()
    const component: any = {}
    nav.forEach((item: any) => {
      item.packages.forEach((sItem: any) => {
        if (sItem.name.toLowerCase() == cname) {
          component.name = sItem.name
          component.cName = sItem.cName
          return
        }
      })
    })
    return component
  }
  const handleSwitchDarkModel = () => {
    context.changeTheme()
  }
  return (
    <>
      <div id="nav">
        <div className="back" onClick={() => window.parent.history.back()}>
          <ArrowLeft />
        </div>
        {getComponentName()['name']}
        <div className="translate">
          <img
            className={'dark-model'}
            src="https://storage.360buyimg.com/imgtools/71a2689855-ba1f4000-80cb-11ed-aa68-651117499129.png"
            alt=""
            onClick={() => handleSwitchDarkModel()}
          />
          <img
            className={'translate-icon'}
            src="https://img14.360buyimg.com/imagetools/jfs/t1/135168/8/21387/6193/625fa81aEe07cc347/55ad5bc2580c53a6.png"
            alt=""
            onClick={() => handleSwitchLocale()}
          />
        </div>
      </div>
      <C key={Math.random()} />
    </>
  )
}
const AppSwitch = () => {
  const [locale] = useLocale()
  const [theme, setTheme] = useState({})
  const changeTheme = useCallback(() => {
    if (!theme || !Object.keys(theme).length) {
      setTheme(darkTheme)
    } else {
      setTheme(defaultTheme)
    }
  }, [theme])
  return (
    <Configprovider
      locale={languages[((locale as string) || 'zh-CN').replace('-', '')]}
      theme={theme}
      changeTheme={changeTheme}
    >
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="index">
              <div className="index-header">
                <img src={logo} alt="" srcSet="" />
                <div className="info">
                  <h1>NutUI-React</h1>
                  <p>京东风格的轻量级移动端 React 组件库</p>
                </div>
              </div>
              <div className="index-components">
                <Links />
              </div>
            </div>
          }
        />

        {routes.map((item: any, index: number) => {
          const C = loadable(item.component)
          return (
            <Route
              key={Math.random()}
              path={`${item.path}`}
              element={<WithNavRouter C={C} />}
            />
          )
        })}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Configprovider>
  )
}
const App = () => {
  return (
    <>
      <HashRouter>
        <AppSwitch />
      </HashRouter>
    </>
  )
}
export default App
