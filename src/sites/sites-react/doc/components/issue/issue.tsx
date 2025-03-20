import './issue.scss'
import React, { useEffect, useState } from 'react'
import { Tips, Check, Add, Plus } from '@nutui/icons-react'
import { useLocation } from 'react-router-dom'
import { getComponentName } from '@/sites/assets/util'

export function Issue() {
  let location = useLocation()

  useEffect(() => {
    const componentName = getComponentName()
    setComponentName(componentName)
  }, [location])
  const [componentName, setComponentName] = useState({ name: '', cName: '' })
  return (
    <>
      <div className="doc-content-issue">
        <a
          className="issue-item"
          href="https://github.com/jdf2e/nutui-react/issues"
          target="_blank"
        >
          <Add className='icon issue'/>
          Issue
        </a>
        <a
          className="issue-item"
          href="https://github.com/jdf2e/nutui-react/issues?q=is:issue+is:open"
          target="_blank"
        >
          <Tips />
          Open
        </a>
        <a
          className="issue-item"
          href={`https://github.com/jdf2e/nutui-react/issues?q=is:issue+is:closed+${componentName.name}`}
          target="_blank"
        >
          <Check />
          Closed
        </a>
      </div>
    </>
  )
}
