import React from 'react'
import './Links.scss'
import { Link } from 'react-router-dom'
import { Right } from '@nutui/icons-react'
import pkg from '../../config.json'

const navs = pkg.nav

const Links = () => {
  return (
    <>
      {navs.map((nav) => (
        <ol key={nav.name}>
          <li>{nav.name}</li>
          <ul>
            {nav.packages.map((com) =>
              com.show ? (
                <li key={com.name}>
                  <Link key={com.name} to={`${com.name}`}>
                    {com.name}&nbsp;&nbsp;{com.cName}
                  </Link>
                  <Right color="#979797" name="right"></Right>
                </li>
              ) : null
            )}
          </ul>
        </ol>
      ))}
    </>
  )
}
export default Links
