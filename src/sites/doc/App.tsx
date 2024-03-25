import React, { useEffect, useMemo, useState } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import './App.scss'
import { nav } from '@/config.json'
import APPContext from './context'
import Nav from '@/sites/doc/components/nav'
import Header from '@/sites/doc/components/header'
import DemoPreview from '@/sites/doc/components/demo-preview'
import Issue from '@/sites/doc/components/issue'
import routers from './router'
import loadable from '@loadable/component'
import CodeBlock from './components/demoblock/codeblock'


const Title = () => {
  let location = useLocation()
  const s = window.location.hash.split('/')

  const getComponentName = () => {
    const cname = s[s.length - 1].toLowerCase().replace('-taro', '')
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
  const taros = useMemo(() => {
    const docs = {} as any
    const support = {} as any
    nav.forEach((navItem) => {
      return navItem.packages.forEach((pk: any) => {
        const lname = pk.name.toLowerCase()
        if (pk.tarodoc) {
          docs[lname] = true
        }
        if (pk.taro) {
          support[lname] = true
        }
      })
    })
    return { docs, support }
  }, [nav])

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

  const switchDoc = (name: string) => {
    const href = window.location.href
    if (name === 'react') {
      window.location.href = href.replace('-taro', '')
    } else {
      window.location.href = href.replace('-taro', '') + '-taro'
    }
    setDocName(name)
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollTitle)
  }, [])

  const [docname, setDocName] = useState('react')

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
                          {taros.docs[ru.name.replace('-taro', '')] ? (
                            <div className="doc-content-tabs ">
                              <div
                                className={`tab-item ${
                                  docname === 'react' ? 'cur' : ''
                                }`}
                                onClick={() => switchDoc('react')}
                              >
                                React
                              </div>
                              <div
                                className={`tab-item ${
                                  docname === 'taro' ? 'cur' : ''
                                }`}
                                onClick={() => switchDoc('taro')}
                              >
                                Taro
                              </div>
                            </div>
                          ) : (
                            <div
                              className="doc-content-tabs single"
                              style={{
                                display: `${
                                  taros.support[ru.name.replace('-taro', '')]
                                    ? 'inherit'
                                    : 'none'
                                }`,
                              }}
                            >
                              <div className="tab-item cur">React / Taro</div>
                            </div>
                          )}
                          <C />
                        </MDXProvider>
                      </APPContext.Provider>
                    }
                  ></Route>
                )
              })}
            </Routes>
          </div>
          {/*<div className="markdown-body">*/}
          <DemoPreview className={`${fixed ? 'fixed' : ''}`}></DemoPreview>
          {/*</div>*/}
        </div>
      </HashRouter>
    </div>
  )
}
export default App
