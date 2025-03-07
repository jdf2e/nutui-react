import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import APPContext from '../../context'
import data from './contribution.json'

interface ContributionMDXProps {
  name: string
  children?: React.ReactNode
}

const Contribution: FunctionComponent<ContributionMDXProps> = (props) => {
  const name = props.name
  const { issues, logs } = data
  return (
    <>
      <h2>Contribution Records</h2>
      <h3>Issues</h3>
      <ul>
        {issues[name].map((item) => (
          <li key={item.number}>
            {item.title} (<a href={item.url}>#{item.number}</a>)
          </li>
        ))}
      </ul>
      <blockquote>
        <p>
          View more resolved{' '}
          <a href={`https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20${name.toLowerCase()}`}>
            issues
          </a>
        </p>
      </blockquote>

      <h3>Component Logs</h3>
      <ul>
        {logs[name].map((item) => (
          <li key={item.version}>
            <div style={{ display: 'inline' }} dangerouslySetInnerHTML={{ __html: item.content.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>') }} /> <code style={{ marginLeft: '4px' }}>{item.version}</code>
          </li>
        ))}
      </ul>
      <blockquote>
        <p>
          View more component{' '}
          <a href={`https://github.com/jdf2e/nutui-react/releases?q=${name.toLowerCase()}&expanded=true`}>
            releases
          </a>
        </p>
      </blockquote>
    </>
  )
}

export default Contribution
