import './issue.scss'
import React from 'react'
import Icon from '@/packages/icon'

export function Issue() {
  return (
    <>
      <div className="doc-content-issue">
        <a
          className="issue-item"
          href="https://github.com/jdf2e/nutui/issues"
          target="_blank"
        >
          <Icon name="uploader"></Icon>
          Issue
        </a>
        <a
          className="issue-item"
          href="https://github.com/jdf2e/nutui/issues?q=is:issue+is:open"
          target="_blank"
        >
          <Icon name="issue"></Icon>
          Open
        </a>
        <a
          className="issue-item"
          href="'https://github.com/jdf2e/nutui/issues?q=is:issue+is:closed+' + component"
          target="_blank"
        >
          <Icon name="checklist"></Icon>
          Closed
        </a>
      </div>
    </>
  )
}
