import React, { FunctionComponent, ReactNode, useState } from 'react'
import classNames from 'classnames'
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
    success:
      'https://img11.360buyimg.com/imagetools/jfs/t1/233690/33/17768/1251/66543101F2589003b/f5dcaea8e29c23aa.png',
    error:
      'https://img14.360buyimg.com/imagetools/jfs/t1/224715/38/17932/1426/66543101F1dbc50e8/eaffdb926b00584b.png',
    warning:
      'https://img13.360buyimg.com/imagetools/jfs/t1/200545/24/43507/1219/66543101Fe58cfbe4/c29054555f3bcb4b.png',
    info: 'https://img13.360buyimg.com/imagetools/jfs/t1/199421/5/44230/1320/66543100F23a9466e/0e9eadd5cebf07fb.png',
    waiting:
      'https://img11.360buyimg.com/imagetools/jfs/t1/226266/21/17859/1428/66543101F2dc4c3f3/44e2ae2b51c6e0ed.png',
  }
  const [imgStyle] = useState<any>({
    backgroundImage: `url(${typeof icon === 'string' && icon ? icon : defaultStatus[status]})`,
    backgroundSize: '100% 100%',
  })
  return (
    <div className={cls} style={style}>
      {typeof icon === 'string' ? (
        <div className={`${classPrefix}-icon`} style={imgStyle} />
      ) : (
        icon
      )}
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
                <Button {...rest}>{action?.text}</Button>
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
