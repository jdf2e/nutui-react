import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { Tips, Warning, Failure, Ask, Success } from '@nutui/icons-react'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { Button, ButtonFill, ButtonSize, ButtonType } from '../button/button'
import { ResultPageStatus, ResultPageStatusOptions } from './types'

export type ResultPageAction = {
  text: React.ReactNode
  type?: ButtonType
  size?: ButtonSize
  fill?: ButtonFill
  disabled?: boolean
  onClick?: () => () => void
}

export interface ResultPageProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  icon: ReactNode
  status: ResultPageStatus
  actions: ResultPageAction[]
}
const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  icon: '',
  status: 'info',
  actions: [],
} as ResultPageProps
export const ResultPage: FunctionComponent<
  Partial<ResultPageProps> & React.HTMLAttributes<HTMLDivElement>
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
    success: <Success color="#00D900" />,
    error: <Failure color="#FF0F23" />,
    warning: <Warning color="#FFBF00" />,
    info: <Tips color="#0073FF" />,
    waiting: <Ask color="#0073FF" />,
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
