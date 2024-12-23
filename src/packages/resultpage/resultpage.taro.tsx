import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { Tips, Warning, Failure, Ask, Success } from '@nutui/icons-react-taro'
import { View, Text } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import {
  Button,
  ButtonFill,
  ButtonSize,
  ButtonType,
} from '@/packages/button/button.taro'
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
    <View className={cls} style={style}>
      <View className={`${classPrefix}-icon`}>
        {icon || defaultStatus[status]}
      </View>
      {typeof title === 'string' && title ? (
        <View className={`${classPrefix}-title`}>{title}</View>
      ) : (
        title
      )}
      {typeof description === 'string' && description ? (
        <Text numberOfLines={2} className={`${classPrefix}-description`}>
          {description}
        </Text>
      ) : (
        description
      )}
      {actions.length ? (
        <View className={`${classPrefix}-actions`}>
          {actions.map((action, index) => {
            const { text, ...rest } = action
            return (
              <View className={`${classPrefix}-action`} key={index}>
                <Button {...rest} size="large">
                  {action?.text}
                </Button>
              </View>
            )
          })}
        </View>
      ) : null}
      {children}
    </View>
  )
}

ResultPage.displayName = 'NutResultPage'
