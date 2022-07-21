import React, { useEffect, useState } from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom'
import './App.scss'
import { nav } from '@/config.json'
import useLocale from '../assets/locale/uselocale'
import remarkGfm from 'remark-gfm'
import { routers, raws } from './docs'
import { visit } from 'unist-util-visit'
import ReactMarkdown from 'react-markdown'
import Nav from '@/sites/doc/components/nav'
import remarkDirective from 'remark-directive'
import Header from '@/sites/doc/components/header'
import Demoblock from '@/sites/doc/components/demoblock'
import DemoPreview from '@/sites/doc/components/demo-preview'
import Issue from '@/sites/doc/components/issue'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

function myRemarkPlugin() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        if (node.name !== 'demo') return

        const data = node.data || (node.data = {})

        data.hName = 'div'
        data.hProperties = {
          class: 'nutui-react--demo-wrapper',
        }
      }
    })
  }
}

const Title = () => {
  let location = useLocation()

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
  useEffect(() => {
    const componentName = getComponentName()
    setComponentName(componentName)
  }, [location])
  const [componentName, setComponentName] = useState({ name: '', cName: '' })
  return (
    <div className="title">
      {componentName.name}&nbsp;{componentName.cName}
    </div>
  )
}

const App = () => {
  const [lang] = useLocale()

  const getMarkdownByLang = (ru: string) => {
    if (lang === 'zh-CN' || lang === '') {
      // @ts-ignore
      return raws[ru]
    } else {
      // @ts-ignore
      return raws[`${ru}${lang.replace('-', '')}`]
    }
  }
  // useEffect(() => {}, [lang])

  const [fixed, setFixed] = useState(false)
  const [hidden, setHidden] = useState(false)

  const scrollTitle = () => {
    let top = document.documentElement.scrollTop
    // console.log('state.hidden', state.hidden)
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
            <Switch>
              {routers.map((ru, k) => {
                return (
                  <Route
                    key={Math.random()}
                    path={`${lang ? `/${lang}` : ''}/${ru}`}
                  >
                    <ReactMarkdown
                      children={getMarkdownByLang(ru)}
                      remarkPlugins={[
                        remarkGfm,
                        remarkDirective,
                        myRemarkPlugin,
                      ]}
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <Demoblock
                              text={String(children).replace(/\n$/, '')}
                            >
                              <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                              />
                            </Demoblock>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        },
                      }}
                    />
                  </Route>
                )
              })}
              {/*<Route path="*">*/}
              {/*  <Redirect*/}
              {/*    to={{*/}
              {/*      pathname: '/zh-CN111',*/}
              {/*    }}*/}
              {/*  />*/}
              {/*</Route>*/}
            </Switch>
          </div>
          <div className="markdown-body">
            <DemoPreview className={`${fixed ? 'fixed' : ''}`}></DemoPreview>
          </div>
        </div>
      </HashRouter>
    </div>
  )
}
export default App
