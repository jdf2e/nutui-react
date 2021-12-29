import React, { useEffect } from 'react'
import { nav } from '@/config.json'
// @ts-ignore
import { version } from '/package.json'
import './header.scss'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const toHome = () => {
    history.replace('/')
  }
  useEffect(() => {
    let packages = [] as any[]
    nav.forEach((item) => {
      packages.push(...item.packages)
    })
  }, [])

  return (
    <div className="doc-header doc-header-black">
      <div className="header-logo">
        <a className="logo-link" href="#/" onClick={toHome}></a>
        <span className="logo-border"></span>
        <span className="version">{version}</span>
      </div>
      <div className="header-nav">
        <a href="https//github.com/jdf2e/nutui-docs" target="_blank">
          当前环境：development ,代码 PR 合并后，文档会自动同步至 https//github.com/jdf2e/nutui-docs
        </a>
      </div>
    </div>
  )
}

export default Header
