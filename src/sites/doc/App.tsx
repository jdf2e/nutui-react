import React, { FunctionComponent, useEffect, useState } from 'react'
import { HashRouter, Switch, Route, useHistory } from 'react-router-dom'
import './App.scss'
import Header from '@/sites/doc/components/header'
import Nav from '@/sites/doc/components/nav'
import DemoPreview from '@/sites/doc/components/demo-preview'

import routes from './router'

const Dynamic: FunctionComponent<any> = ({ code, ...rest }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: code }}></div>
}

const App = () => {
  const [url] = useState('/')

  return (
    <div>
      <HashRouter>
        <Header></Header>
        <Nav></Nav>
        <div className="doc-content">
          <div className="doc-content-document">
            <Switch>
              {routes.map((item: any, index: number) => {
                return (
                  <Route
                    key={index}
                    path={item.path}
                    component={(props: any) => <Dynamic code={item.component.html} {...props} />}
                  />
                )
              })}
            </Switch>
          </div>
          <div className="markdown-body">
            <DemoPreview></DemoPreview>
          </div>
        </div>
      </HashRouter>
    </div>
  )
}
export default App
