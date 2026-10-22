import React from 'react'
import './Links.scss'
import '../assets/styles/reset.scss'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@nutui/icons-react'
import pkg from '../../config.json'
import useLocale from '@/sites/assets/locale/uselocale'

const navs = pkg.nav

interface LinksProps {
  activeName?: string
}

const Links: React.FC<LinksProps> = ({ activeName }) => {
  const [lang] = useLocale()
  const normalizedActive = (activeName || '').toLowerCase()

  return (
    <>
      {navs.map((nav) => (
        <ol key={nav.enName}>
          {nav.enName !== 'dataentry' ? <li>{nav.name}</li> : null}
          <ul>
            {nav.packages.map((com) => {
              if (!com.show) return null
              const isActive = normalizedActive === com.name.toLowerCase()
              return (
                <li key={com.name} className={isActive ? 'active' : ''}>
                  <Link to={`/${lang}/component/${com.name.toLowerCase()}`}>
                    <span className="component-name">
                      {com.name}&nbsp;&nbsp;{com.cName}
                    </span>
                    <ArrowRight color={isActive ? '#fa3725' : '#979797'} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </ol>
      ))}
    </>
  )
}
export default Links
