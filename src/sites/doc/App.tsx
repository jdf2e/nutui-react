import React, { useEffect, useMemo, useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import './App.scss'
import APPContext from './context'
import Nav from '@/sites/doc/components/nav'
import Header from '@/sites/doc/components/header'
import DemoPreview from '@/sites/doc/components/demo-preview'
import Issue from '@/sites/doc/components/issue'
import { getComponentName } from '@/sites/assets/util'
import routers from './router'
import loadable from '@loadable/component'
import CodeBlock from './components/demoblock/codeblock'

const Title = () => {
  let location = useLocation()
  const s = window.location.hash.split('/')
  useEffect(() => {
    const componentName = getComponentName()
    setComponentName(componentName)
  }, [location])
  const [componentName, setComponentName] = useState({ name: '', cName: '' })
  return (
    <div className="title">
      {componentName.name}&nbsp;{s[1] === 'zh-CN' && componentName.cName}
    </div>
  )
}
const components = {
  CodeBlock,
}
const App = () => {
  const [fixed, setFixed] = useState(false)
  const [hidden, setHidden] = useState(false)

  const scrollTitle = () => {
    let top = document.documentElement.scrollTop
    if (top > 127) {
      setFixed(true)
      if (top < 142) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    } else {
      setFixed(false)
      setHidden(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollTitle)
  }, [])

  return (
    <div>
      <HashRouter>
        <Header></Header>
        <Nav></Nav>
        <div className="doc-content">
          <div className="doc-title">
            <div
              className={`doc-title-position ${fixed ? 'fixed' : ''} ${
                hidden ? 'hidden' : ''
              }`}
            >
              <Title></Title>
              <Issue></Issue>
            </div>
          </div>
          <div className="doc-content-document isComponent">
            <Routes>
              {routers.map((ru, k) => {
                const path = ru.component.name?.substring(
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
          <DemoPreview className={`${fixed ? 'fixed' : ''}`}></DemoPreview>
        </div>
      </HashRouter>
    </div>
  )
}
export default App
