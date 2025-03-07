import React, { useEffect, useMemo, useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import './App.scss'
import APPContext from '../doc/context'
import Nav from '../doc/components/nav'
import Header from '../doc/components/header'
import DemoPreview from '../doc/components/demo-preview'
import Issue from '..//doc/components/issue'
import { getComponentName } from '../../assets/util'
import { routes as routers, guideEnTaroRoutes, guideTaroRoutes } from './router'
import loadable from '@loadable/component'
import CodeBlock from '../doc/components/demoblock/codeblock'
import { BackTop } from '../../../packages/backtop/backtop'
import { Navigate } from 'react-router-dom'

const Title = () => {
  console.log(routers)
  let location = useLocation()
  const isTaro = window.location.pathname.includes('taro')
  const s = window.location.hash.split('/')
  useEffect(() => {
    const componentName = getComponentName()
    setComponentName(componentName)
  }, [location])
  const [componentName, setComponentName] = useState({ name: '', cName: '' })
  return (
    <div className="doc-title-content">
      <div className="title">
        {componentName.name}&nbsp;{s[1] === 'zh-CN' && componentName.cName}
      </div>
      {isTaro ? (
        <div className="npm-package">
          <a href="https://www.npmjs.com/package/@nutui/nutui-react-taro">
            <img
              src="https://img.shields.io/badge/npm-%40nutui%2Fnutui--react--taro-brightgreen"
              alt="@nutui/nutui-react-taro"
            />
          </a>
          <img
            src="https://img13.360buyimg.com/imagetools/jfs/t1/169186/5/33010/1762/639703a1E898bcb96/6c372c661c6dddfe.png"
            width="20"
            height="20"
          />
        </div>
      ) : (
        <div className="npm-package">
          <a href="https://www.npmjs.com/package/@nutui/nutui-react">
            <img
              src="https://img.shields.io/badge/npm-%40nutui%2Fnutui--react-brightgreen"
              alt="@nutui/nutui-react"
            />
          </a>
          <img
            src="https://img12.360buyimg.com/imagetools/jfs/t1/192500/27/37524/4524/649d5065F7e5fbef6/afe567692acba3b0.png"
            width="20"
            height="20"
          />
        </div>
      )}
    </div>
  )
}

const components = {
  CodeBlock,
}

const Content = () => {
  const [fixed, setFixed] = useState(false)
  const location = useLocation()
  const scrollTitle = () => {
    let top = document.documentElement.scrollTop
    if (top > 127) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }
  const isGuide = location.pathname.includes('/guide')
  useEffect(() => {
    document.addEventListener('scroll', scrollTitle)
  }, [])
  const routes = [...routers, ...guideTaroRoutes, ...guideEnTaroRoutes]
  return (
    <div className="doc-content">
      {!isGuide && (
        <div className="doc-title">
          <div className={`doc-title-position ${fixed ? 'fixed' : ''}`}>
            <Title />
          </div>
        </div>
      )}
      <div
        className={`doc-content-document ${isGuide ? 'full' : 'isComponent'}`}
      >
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/zh-CN/guide/intro-react" />}
          />
          {routes.map((ru, k) => {
            const path = ru.component?.name?.substring(
              0,
              ru.component.name.lastIndexOf('/')
            )
            const C = useMemo(() => loadable(ru.component), [ru.component])
            return (
              <Route
                key={k}
                path={ru.path}
                element={
                  <APPContext.Provider value={{ path }}>
                    <MDXProvider components={components}>
                      <C />
                    </MDXProvider>
                  </APPContext.Provider>
                }
              ></Route>
            )
          })}
        </Routes>
      </div>
      {!isGuide && (
        <>
          <DemoPreview className={`${fixed ? 'fixed' : ''}`}></DemoPreview>
          <BackTop className={`${fixed ? 'doc-backtop' : ''}`} />
        </>
      )}
    </div>
  )
}

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Nav />
        <Content />
      </HashRouter>
    </div>
  )
}

export default App
