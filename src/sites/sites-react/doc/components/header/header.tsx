import React, { useEffect, useState } from 'react'
// @ts-ignore
import { version } from '/package.json'
import config from '../../../../config/env'
import './header.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Search from '../search/search'
import {
  SiteReactTaro,
  nav,
  repository,
  reactGuide,
  moreGuide,
} from '../../../../config/index'
const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [currLang, setCurrLang] = useState<any>({})

  const toHome = () => {
    navigate('/')
  }

  useEffect(() => {
    let packages = [] as any[]
    nav.forEach((item) => {
      packages.push(...item.packages)
    })
  }, [])

  useEffect(() => {
    const lang = langs.filter(
      (l) => location.pathname.indexOf(l.locale) > -1
    )[0]
    setCurrLang(lang)
  }, [location])

  const langs = [
    { name: '中文', locale: 'zh-CN' },
    { name: 'English', locale: 'en-US' },
  ]
  const isZh = currLang?.locale === 'zh-CN'
  const toLink = (item: any) => {
    if (item) {
      if (isZh) {
        item.path = item.path.replace('en-US', 'zh-CN')
      } else {
        item.path = item.path.replace('zh-CN', 'en-US')
      }
      navigate(item.path)
    } else {
      navigate('/')
    }
  }
  useEffect(() => {
    const lang = langs.filter(
      (l) => location.pathname.indexOf(l.locale) > -1
    )[0]
    setCurrLang(lang)
  }, [location])
  const [activeLink, setActiveLink] = useState('指南')
  // const handleSwitchLocale = (e: any) => {
  //   const classList: string[] = [].slice.call(e.target.classList)
  //   if (classList.indexOf('curr-lang') > -1) {
  //     return setVisible(!visible)
  //   }
  //   const name = e.target.innerText
  //   setVisible(!visible)
  //   const [{ locale }] = langs.filter((l) => name == l.name)
  //   let link = ''
  //   if (config.locales.some((l) => window.location.href.indexOf(l) > -1)) {
  //     link = window.location.href.replace(/\#\/([a-z-]+)/gi, `#/${locale}`)
  //   } else {
  //     link = window.location.href.replace(/\#\//gi, `#/${locale}/`)
  //   }
  //   window.location.href = link
  // }
  const isReactTaro = window.location.href.includes('taro')
  const headerBck = SiteReactTaro.header
  const [isShowGuid, setIsShowGuid] = useState(false)
  const [isShowGuid4, setIsShowGuid4] = useState(false)
  const [selectedVersion, setSelectedVersion] = useState(version)
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const handleMouseHover = (isHovered) => {
    setIsShowGuid(isHovered)
  }
  useEffect(() => {
    if (location.pathname.includes('/component')) {
      setActiveLink('组件')
    }
  }, [location])
  const toAnother = () => {
    // 开发环境
    if (process.env.NODE_ENV === 'development') {
      if (window.location.href.includes('/react/#')) {
        window.location.href = window.location.href.replace(
          '/react/#',
          '/react/index.taro.html#'
        )
      } else if (window.location.href.includes('/react/index.taro.html#')) {
        window.location.href = window.location.href.replace(
          '/react/index.taro.html#',
          '/react/#'
        )
      }
      return
    }
    // 生产环境
    if (window.location.href.includes('taro')) {
      window.location.href = window.location.href.replace('taro', 'h5')
    } else if (window.location.href.includes('h5')) {
      window.location.href = window.location.href.replace('h5', 'taro')
    }
  }
  const checkGuidTheme = (item: any, type: string) => {
    setIsShowGuid(false)
    window.open(item.link)
  }
  const checkGuidTheme2 = (item: any, type: string) => {
    if (item.link) {
      setIsShowGuid(false)
      window.open(item.link)
    }
  }
  const handleClick = () => {
    setIsShowGuid(!isShowGuid)
  }

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
  }
  const onMouseHover4 = (isHovered) => {
    setIsShowGuid4(isHovered)
  }
  return (
    <div className="doc-header doc-header-black">
      <div className="header-logo">
        <a className={`logo-link react`} onClick={toHome}></a>
        <span className="logo-border"></span>
        <span>
          <span
            onClick={toAnother}
            className={`version link-title react ${isReactTaro ? 'taro' : ''}`}
            style={{ display: 'inline' }}
          >
            {isReactTaro ? '小程序' : 'H5'}
          </span>
        </span>
      </div>

      <div className="header-nav">
        <Search />

        <div className="nav-box">
          <ul className="nav-list">
            {headerBck.map((item) => (
              <li
                className={`nav-item ${item.cName === activeLink ? 'active' : ''}`}
                key={item.name}
                onClick={() => {
                  setActiveLink(item.cName)
                }}
              >
                <a
                  onClick={() => {
                    toLink(item)
                  }}
                >
                  {isZh ? item.cName : item.eName}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <div
                onMouseEnter={() => handleMouseHover(true)}
                onMouseLeave={() => handleMouseHover(false)}
                // tabIndex="0"
                className={
                  isShowGuid
                    ? 'header-select-box select-up'
                    : 'header-select-box select-down'
                }
                onClick={handleClick}
              >
                <div className="header-select-hd">
                  {selectedVersion}
                  <i className=""></i>
                </div>
                <div className="guild-line"></div>

                <CSSTransition
                  in={isShowGuid}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                >
                  <div
                    className={`guid-data ${isShowGuid ? 'fade-in' : 'fade-out'}`}
                  >
                    {reactGuide.map((item, indexKey) => (
                      <div
                        className={`info ${indexKey === 1 ? 'contentKey' : ''}`}
                        key={indexKey}
                      >
                        <div className="header">
                          <img src={item.icon} className="icon" />
                          <div className="type"> {item.type}</div>
                        </div>
                        <div>
                          {item.data.map((info, index) => (
                            <div
                              className="content"
                              onClick={() => checkGuidTheme(info, 'Basis')}
                              key={info.link}
                            >
                              <div className="version"> {info.name}</div>
                              <div className="list">
                                {info.language.map((lang, index) => (
                                  <div className="lang" key={lang}>
                                    <div className="name">{lang}</div>
                                  </div>
                                ))}
                              </div>
                              <div className="app"> {info.app}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CSSTransition>
              </div>
            </li>
            <li className="nav-item" style={{ marginLeft: '-15px' }}>
              <div
                onMouseEnter={() => onMouseHover4(true)}
                onMouseLeave={() => onMouseHover4(false)}
                // className="header-select-box"
                className={
                  isShowGuid4
                    ? 'header-select-box select-up'
                    : 'header-select-box select-down'
                }
                onClick={() => {
                  setIsShowGuid4(!isShowGuid4)
                }}
              >
                <div className="header-select-hd">
                  {isZh ? '更多' : 'More'}
                  <i className=""></i>
                </div>
                <div className="guild-line"></div>
                <CSSTransition
                  in={isShowGuid4}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                >
                  <div
                    className={`guid-data ${isShowGuid4 ? 'fade-in' : 'fade-out'}`}
                    style={{ width: '-346px' }}
                  >
                    {moreGuide.map((item, indexKey) => (
                      <div
                        className={`info ${indexKey === 1 ? 'contentKey' : ''}`}
                        key={indexKey}
                      >
                        <div className="header">
                          {item.icon && (
                            <img src={item.icon} className="icon" />
                          )}
                          <div className="type">
                            {' '}
                            {isZh ? item.type.cName : item.type.eName}
                          </div>
                        </div>
                        {item.datas.map((info, index) => (
                          <div key={index}>
                            {info.plat && (
                              <div className="plat">
                                {isZh ? info.plat.cName : info.plat.eName}
                              </div>
                            )}
                            {info.data.map((info2, index2) => (
                              <div
                                className="content"
                                key={index2}
                                onClick={() =>
                                  checkGuidTheme(info2, 'Advanced')
                                }
                              >
                                <div className="version"> {info2.name}</div>
                                <div
                                  className="list"
                                  style={{ width: '120px' }}
                                >
                                  {info2.language.map((lang, index2) => (
                                    <div className="lang" key={index2}>
                                      <div
                                        className="name"
                                        onClick={() =>
                                          handleLanguageSelect(lang)
                                        }
                                      >
                                        {lang}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                {/* <div className="app"> {info2.app}</div> */}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CSSTransition>
              </div>
            </li>
            {!isReactTaro && (
              <li
                className="nav-item"
                onClick={() => {
                  let location = window.location
                  if (currLang.locale == 'zh-CN') {
                    location.href = location.href.replace('zh-CN', 'en-US')
                    setCurrLang({
                      name: 'English',
                      locale: 'en-US',
                    })
                  } else {
                    location.href = location.href.replace('en-US', 'zh-CN')
                    setCurrLang({
                      name: '中文',
                      locale: 'zh-CN',
                    })
                  }
                }}
              >
                En/中
              </li>
            )}
            <li className="nav-item">
              {repository.git && (
                <a
                  className="user-link"
                  target="_blank"
                  href={repository.git}
                ></a>
              )}
              {repository.gitee && (
                <a
                  className="user-link gitee"
                  target="_blank"
                  href={repository.gitee}
                ></a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
