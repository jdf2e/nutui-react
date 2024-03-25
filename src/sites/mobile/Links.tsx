import React from 'react'
import './Links.scss'
import '../assets/styles/reset.scss'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@nutui/icons-react'
import pkg from '../../config.json'
import useLocale from '@/sites/assets/locale/uselocale'

const navs = pkg.nav

const Links = () => {
  const [lang] = useLocale()
  return (
    <>
      {navs.map((nav) => (
        <ol key={nav.enName}>
          {nav.enName !== 'dentry1' ? <li>{nav.name}</li> : null}
          <ul>
            {nav.packages.map((com) =>
              com.show ? (
                <li key={com.name}>
                  <Link key={com.name} to={`${lang}/component/${com.name}`}>
                    {com.name}&nbsp;&nbsp;{com.cName}
                  </Link>
                  <ArrowRight color="#979797"></ArrowRight>
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
