import './App.scss'
import React, { FunctionComponent, PropsWithChildren, useState } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import loadable, { LoadableComponent } from '@loadable/component'
import routes from './router'
import Links from './Links'
import logo from '@/sites/assets/images/logo-red.png'
import useLocale from '@/sites/assets/locale/uselocale'
import Configprovider from '@/packages/configprovider'
import zhTW from '@/locales/zh-TW'
import zhCN from '@/locales/zh-CN'
import enUS from '@/locales/en-US'
import { BaseLang } from '@/locales/base'
import Popover from '@/packages/popover'

interface Languages {
  [key: string]: BaseLang
}

const languages: Languages = {
  zhTW,
  zhCN,
  enUS,
}

const WithNavRouter = (C: LoadableComponent<any>) => {
  const WithNav: FunctionComponent = (props: PropsWithChildren<any>) => {
    return (
      <>
        <div id="nav">
          <div className="back"></div>
          {props.location.pathname.replace('/', '')}
        </div>
        <C key={Math.random()} />
      </>
    )
  }
  return WithNav
}
const AppSwitch = () => {
  const [locale] = useLocale()

  return (
    <Configprovider locale={languages[((locale as string) || 'zh-CN').replace('-', '')]}>
      <Switch>
        <Route path="/" exact>
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
        </Route>

        {routes.map((item: any, index: number) => {
          const C = loadable(item.component)
          return (
            <Route
              key={Math.random()}
              path={`${locale ? `/${locale}` : ''}${item.path}`}
              component={WithNavRouter(C)}
            />
          )
        })}

        <Route path="*">
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        </Route>
      </Switch>
    </Configprovider>
  )
}
const App = () => {
  return (
    <>
      <HashRouter>
        <AppSwitch></AppSwitch>
      </HashRouter>
    </>
  )
}
export default App
