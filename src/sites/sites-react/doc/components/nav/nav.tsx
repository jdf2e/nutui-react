import React, { Fragment, useEffect, useState } from 'react'
import { nav, docs } from '@/config.json'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './nav.scss'
import useLocale from '@/sites/assets/locale/uselocale'

const Nav = () => {
  const [cNav] = useState<any>(nav)
  const [lang] = useLocale()
  const [fixed, setFixed] = useState(false)
  const [isGuide, setIsGuide] = useState(false)
  const [activeName, setActiveName] = useState<string>('intro-react')
  const scrollNav = () => {
    let top = document.documentElement.scrollTop
    if (top > 64) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', scrollNav)
  }, [])

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname.includes('/guide')) {
      setIsGuide(true)
    } else {
      setIsGuide(false)
    }
    if(location.pathname.includes('/intro-react')) {
      setActiveName('intro-react')
    }
  }, [location])
  const changeNav = (_nav: any) => {
    setActiveName(_nav.name)
    navigate(`${isZh ? '/zh-CN/' : '/en-US/'}guide/${_nav.name.toLowerCase()}${isTaro? '-taro' : ''}`)
  }
  const isTaro = location.pathname.includes('-taro')
  const isZh = lang === 'zh-CN'
  return (
    <div className={`doc-nav ${fixed ? 'fixed' : ''}`}>
      {isGuide ? (
        <ol>
          <ul>
            {docs.packages.map((_package) => (
              <li
                key={_package.name}
                className={activeName === _package.name ? 'active' : ''}
              >
                {_package.show && (
                  <>
                    {_package.isLink ? (
                      <a href={_package.name} target="_blank">
                        {isZh ? _package.cName : _package.eName}
                      </a>
                    ) : (
                      <div onClick={() => changeNav(_package)}>
                        {isZh ? _package.cName : _package.eName}
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </ol>
      ) : (
        <ol>
          {cNav.map((cn: any) => {
            return (
              <Fragment key={cn.enName}>
                {cn.enName === 'dataentry' ? null : (
                  <li>{lang === 'zh-CN' ? cn.name : cn.enName}</li>
                )}
                <ul>
                  {cn.packages.map((cp: any) => {
                    if (!cp.show) return null
                    return (
                      <li key={Math.random()}>
                        <NavLink
                          key={Math.random()}
                          className={({ isActive, isPending }) =>
                            isPending ? '' : isActive ? 'active' : ''
                          }
                          to={`${lang ? `/${lang}` : ''}/component/${cp.name}${isTaro ? '-taro' : ''}`}
                        >
                          {cp.name}&nbsp;&nbsp;
                          <b>{lang === 'zh-CN' && cp.cName}</b>
                          {cp.version !== '2.0.0' ? (
                            <b
                              style={{
                                background: 'rgb(250, 205, 205)',
                                padding: '0px 5px',
                                borderRadius: '5px',
                                color: 'rgb(255, 255, 255)',
                                transform: 'scale(0.8)',
                                height: '20px',
                                lineHeight: '20px',
                                display: 'inline-block',
                              }}
                            >
                              🛠
                            </b>
                          ) : null}
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              </Fragment>
            )
          })}
        </ol>
      )}
    </div>
  )
}

export default Nav
