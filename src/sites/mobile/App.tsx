import './App.scss'
import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import loadable from '@loadable/component'
import { ArrowLeft } from '@nutui/icons-react'
import routes from './router'
import Links from './Links'
import logo from '@/sites/assets/images/logo-red.png'
import useLocale, { getLocale } from '@/sites/assets/locale/uselocale'
import Configprovider, { useConfig } from '@/packages/configprovider'
import { AppThemeProvider, useAppTheme } from './theme-context'
import { getComponentName } from '@/sites/assets/util'
import zhTW from '@/locales/zh-TW'
import zhCN from '@/locales/zh-CN'
import enUS from '@/locales/en-US'
import { BaseLang } from '@/locales/base'

interface Languages {
  [key: string]: BaseLang
}

const languages: Languages = {
  zhTW,
  zhCN,
  enUS,
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
            onClick={() => handleSwitchDarkModel()}
          />
          <img
            className={'translate-icon'}
            src="https://img14.360buyimg.com/imagetools/jfs/t1/135168/8/21387/6193/625fa81aEe07cc347/55ad5bc2580c53a6.png"
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
  const { theme, changeTheme } = useAppTheme()
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
    <AppThemeProvider>
      <HashRouter>
        <AppSwitch />
      </HashRouter>
    </AppThemeProvider>
  )
}
export default App
