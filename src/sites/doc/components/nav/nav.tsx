import React, { useState } from 'react'
import { nav } from '@/config.json'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import useLocale from '@/sites/assets/locale/uselocale'

const Nav = () => {
  const [cNav] = useState<any>(nav)
  const [lang] = useLocale()
  return (
    <div className="doc-nav">
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
                      to={`/${lang}/${cp.name}`}
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
