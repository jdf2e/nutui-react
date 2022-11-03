import React from 'react'
import { HashRouter } from 'react-router-dom'
import './App.scss'
import Nav from '@/sites/theme/components/nav'
import Header from '@/sites/theme/components/header'
import DemoPreview from '@/sites/theme/components/demo-preview'
import ThemeSetting from '@/sites/theme/components/theme-setting'

const App = () => {
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  return (
    <div>
      <HashRouter>
        <Header></Header>
        <Nav></Nav>
        <div className="doc-content">
          <div className="doc-content-document">
            <ThemeSetting></ThemeSetting>
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
