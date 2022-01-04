import React, { useState } from 'react'
import { nav } from '@/config.json'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
  const [cNav] = useState<any>(nav)

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
                    <NavLink key={'navlink' + cp.name} activeClassName="selected" to={cp.name}>
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
