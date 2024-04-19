import React, { Fragment, useEffect, useState } from 'react'
import { nav } from '@/config.json'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import useLocale from '@/sites/assets/locale/uselocale'

const Nav = () => {
  const [cNav] = useState<any>(nav)
  const [lang] = useLocale()
  const [fixed, setFixed] = useState(false)
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
  return (
    <div className={`doc-nav ${fixed ? 'fixed' : ''}`}>
      <ol>
        {cNav.map((cn: any) => {
          return (
            <Fragment key={cn.enName}>
              {cn.enName === 'dentry1' ? null : (
                <li>{lang === 'zh-CN' ? cn.name : cn.enName}</li>
              )}

              <ul>
                {cn.packages.map((cp: any) => {
                  if (!cp.show) return null
                  return (
                    <NavLink
                      key={Math.random()}
                      className={({ isActive, isPending }) =>
                        isPending ? '' : isActive ? 'selected' : ''
                      }
                      to={`${lang ? `/${lang}` : ''}/component/${cp.name}`}
                    >
                      <li>
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
                      </li>
                    </NavLink>
                  )
                })}
              </ul>
            </Fragment>
          )
        })}
      </ol>
    </div>
  )
}

export default Nav
