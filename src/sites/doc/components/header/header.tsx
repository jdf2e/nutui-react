import React, { useEffect, useState } from 'react'
import { nav } from '@/config.json'
// @ts-ignore
import { version } from '/package.json'
import config from '@/sites/config/env'
import './header.scss'
import { useHistory } from 'react-router-dom'
import '@/packages/popover/popover.scss'
import Popover from '@/packages/popover'

const Header = () => {
  const history = useHistory()
  const toHome = () => {
    history.replace('/')
  }
  console.log(history.location.pathname)
  useEffect(() => {
    let packages = [] as any[]
    nav.forEach((item) => {
      packages.push(...item.packages)
    })
  }, [])

  const langs = [
    { name: '中文', locale: 'zh-CN' },
    { name: '中文(繁体)', locale: 'zh-TW' },
    { name: 'English', locale: 'en-US' },
    { name: 'Thai', locale: 'th' },
  ]

  const [visible, setVisible] = useState(false)
  const handleSwitchLocale = (e: any) => {
    const classList: string[] = [].slice.call(e.target.classList)
    if (classList.indexOf('curr-lang') > -1) {
      setVisible(!visible)
      return
    }
    const name = e.target.innerText
    setVisible(!visible)
    const [{ locale }] = langs.filter((l) => name == l.name)

    let link = ''
    if (config.locales.some((l) => window.location.href.indexOf(l) > -1)) {
      link = window.location.href.replace(/\#\/([a-z-]+)/gi, `#/${locale}`)
    } else {
      link = window.location.href.replace(/\#\//gi, `#/${locale}/`)
    }
    window.location.href = link
  }

  const currLang = langs.filter((l) => history.location.pathname.indexOf(l.locale) > -1)[0]

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
      <div className={'switch'}>
        <div className={'switch-content'}>
          <Popover visible={visible} theme={'dark'} onClick={handleSwitchLocale} list={langs}>
            <span className={'curr-lang'}>{currLang ? currLang['name'] : '中文'}</span>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Header
