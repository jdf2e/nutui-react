import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { Ask, Failure, Success, Tips, Warning } from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import { Button } from '../button/button'
import { ResultPageStatusOptions, WebResultPageProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  icon: '',
  status: 'info',
  actions: [],
} as WebResultPageProps
export const ResultPage: FunctionComponent<
  Partial<WebResultPageProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    title,
    description,
    icon,
    status,
    actions,
    children,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = `nut-resultpage`
  const cls = classNames(classPrefix, className)

  const defaultStatus: ResultPageStatusOptions = {
    success: <Success color="var(--nutui-color-success, #0acc2a)" />,
    error: <Failure color="var(--nutui-color-primary, #ff0f23)" />,
    warning: <Warning color="var(--nutui-color-warning, #ffaa00)" />,
    info: <Tips color="var(--nutui-color-info, #0c82f7)" />,
    waiting: <Ask color="var(--nutui-color-info, #0c82f7)" />,
  }
  return (
    <div className={cls} style={style}>
      <div className={`${classPrefix}-icon`}>
        {icon || defaultStatus[status]}
      </div>
      {typeof title === 'string' && title ? (
        <div className={`${classPrefix}-title`}>{title}</div>
      ) : (
        title
      )}
      {typeof description === 'string' && description ? (
        <div className={`${classPrefix}-description`}>{description}</div>
      ) : (
        description
      )}
      {actions.length ? (
        <div className={`${classPrefix}-actions`}>
          {actions.map((action, index) => {
            const { text, ...rest } = action
            return (
              <div className={`${classPrefix}-action`} key={index}>
                <Button {...rest} size="large">
                  {action?.text}
                </Button>
              </div>
            )
          })}
        </div>
      ) : null}
      {children}
    </div>
  )
}

ResultPage.displayName = 'NutResultPage'
