import React, { useEffect, useState } from 'react'
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
        <li>全局样式</li>
        <ul>
          <NavLink key={'navlinkbase'} activeClassName="selected" to={'base'}>
            <li>
              <b>基础样式</b>
            </li>
          </NavLink>
        </ul>
      </ol>
      <ol>
        {cNav.map((cn: any) => {
          return (
            <>
              <li>{cn.name}</li>
              <ul>
                {cn.packages.map((cp: any) => {
                  if (!cp.show) return null
                  return (
                    <NavLink
                      key={Math.random()}
                      activeClassName="selected"
                      to={`${lang ? `/${lang}` : ''}/component/${cp.name}`}
                    >
                      <li>
                        {cp.name}&nbsp;&nbsp;<b>{cp.cName}</b>
                      </li>
                    </NavLink>
                  )
                })}
              </ul>
            </>
          )
        })}
      </ol>
    </div>
  )
}

export default Nav
