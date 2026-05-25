import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { Ask, Failure, Success, Tips, Warning } from '@nutui/icons-react-taro'
import { Text, View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { Button } from '@/packages/button/button.taro'
import { ResultPageStatusOptions, TaroResultPageProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  icon: '',
  status: 'info',
  actions: [],
} as TaroResultPageProps
export const ResultPage: FunctionComponent<
  Partial<TaroResultPageProps> & React.HTMLAttributes<HTMLDivElement>
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
