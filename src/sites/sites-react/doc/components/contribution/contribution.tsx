import React, { FunctionComponent } from 'react'
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
      <h3>Bugs & Tips</h3>
      <div style={{ margin: 0 }}>
        {issues[name].map((item) => (
          <div key={item.number} style={{ margin: 2 }}>
            <a
              href={item.url}
              target="_blank"
              style={{
                display: 'block',
                textDecoration: 'none',
                color: '#576b95',
                fontSize: 14,
              }}
            >
              {item.title}
            </a>
          </div>
        ))}
        {logs[name].map((item) => (
          <div key={item.version} style={{ margin: 2 }}>
            <a
              href={item.content.match(/\(\[(#\d+)\]\(([^)]+)\)\)/)?.[2]}
              style={{
                display: 'inline',
                textDecoration: 'none',
                color: '#576b95',
                fontSize: 14,
              }}
            >
              {item.content
                .replace(/@[^\s]+$/, '')
                .replace(/\(\[(#\d+)\]\([^)]+\)\)/, '$1')
                .replace(/`/g, '')
                .replace(
                  /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu,
                  ''
                )}
            </a>
            <span
              style={{
                fontSize: 14,
                color: '#666',
                backgroundColor: '#f5f5f5',
                padding: '0 4px',
                borderRadius: 5,
              }}
            >
              {item.version}
            </span>
          </div>
        ))}
      </div>
      {issues[name].length > 0 ||
        (logs[name].length > 0 && (
          <div style={{ fontSize: '14px', color: '#666', marginTop: '16px' }}>
            <span>View more resolved </span>
            <a
              href={`https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20${name.toLowerCase()}`}
              style={{ color: '#1677ff', textDecoration: 'none' }}
            >
              issues
            </a>
            <span> and </span>
            <a
              href={`https://github.com/jdf2e/nutui-react/releases?q=${name.toLowerCase()}&expanded=true`}
              style={{ color: '#1677ff', textDecoration: 'none' }}
            >
              releases
            </a>
            <span> for {name}</span>
          </div>
        ))}
    </>
  )
}

export default Contribution
