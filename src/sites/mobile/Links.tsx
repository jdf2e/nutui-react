import React from 'react'
import './Links.scss'
import { Link } from 'react-router-dom'
import pkg from '../../config.json'
import useLocale from '@/sites/assets/locale/uselocale'

const navs = pkg.nav

const Links = () => {
  const [lang] = useLocale()
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
                    {com.name}
                  </Link>
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
