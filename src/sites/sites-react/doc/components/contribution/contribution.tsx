import React, { FunctionComponent } from 'react'
import data from './contribution.json'
import './contribution.scss'

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
      <div className='qa-container'>
        {issues[name].map((item) => (
          <div key={item.number} className='qa-list'>
            <a
              href={item.url}
              target="_blank"
              className='qa-list-item'
            >
              {item.title}
            </a>
          </div>
        ))}
        {logs[name].map((item) => (
          <div key={item.version} className='qa-list'>
            <a
              href={item.content.match(/\(\[(#\d+)\]\(([^)]+)\)\)/)?.[2]}
               className='qa-list-item'
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
            <span className='version-tag'>
              {item.version}
            </span>
          </div>
        ))}

        <div className='qa-tips'>
          <span>查看更多 </span>
          <a
            href={`https://github.com/jdf2e/nutui-react/issues?q=is%3Aissue%20state%3Aclosed%20${name.toLowerCase()}`}
            className='qa-tips-link'
          >
            issues
          </a>
          <span> and </span>
          <a
            href={`https://github.com/jdf2e/nutui-react/releases?q=${name.toLowerCase()}&expanded=true`}
            className='qa-tips-link'
          >
            releases
          </a>
          ，欢迎提交 PR。
        </div>
      </div>
      
    </>
  )
}

export default Contribution
