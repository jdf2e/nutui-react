import './App.scss'
import React, {
  useCallback,
  useState,
} from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import loadable, { LoadableComponent } from '@loadable/component'
import { Left } from '@nutui/icons-react'
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
  nutuiBrandColor: '#fa2c19',
  nutuiBrandColorStart: '#ff404f',
  nutuiBrandColorEnd: '#fa2c19',
  nutuiBrandLinkColor: '#396acc',
  nutuiGray0: '#000000',
  nutuiGray1: '#e6e6e6',
  nutuiGray2: '#828282',
  nutuiGray3: '#404040',
  nutuiGray4: '#0a0a0a',
  nutuiGray5: '#141414',
  nutuiGray6: '#1f1f1f',
  nutuiGray7: 'rgba(0, 0, 0, 0.7)',
  nutuiGray8: 'rgba(0, 0, 0, 0.4)',
  nutuiGray9: 'rgba(0, 0, 0, 0.08)',
  nutuiGray10: 'rgba(0, 0, 0, 0.02)',
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
          <Left />
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
            className={'dark-model'}
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
