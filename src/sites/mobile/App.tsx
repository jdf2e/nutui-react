import './App.scss'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import loadable, { LoadableComponent } from '@loadable/component'
import routes from './router'
import Links from './Links'
import logo from '@/sites/assets/images/logo-red.png'

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
const App = () => {
  return (
    <>
      <HashRouter>
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
            return <Route key={index} path={item.path} component={WithNavRouter(C)} />
          })}

          <Route path="*">
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          </Route>
        </Switch>
      </HashRouter>
    </>
  )
}
export default App
