import React, { FunctionComponent, ReactNode, useState } from 'react'
import classNames from 'classnames'
import { View, Text, Image } from '@tarojs/components'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { Button } from '@/packages/button/button.taro'
import { ResultPageStatus, statusOptions } from './types'

export interface ResultPageProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  icon: ReactNode
  status: ResultPageStatus
  primaryButtonText: ReactNode
  secondaryButtonText: ReactNode
  onPrimaryButtonClick?: () => void
  onSecondaryButtonClick?: () => void
}
const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  icon: null,
  status: 'info',
  primaryButtonText: null,
  secondaryButtonText: null,
} as ResultPageProps
export const ResultPage: FunctionComponent<
  Partial<ResultPageProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    title,
    description,
    icon,
    status,
    primaryButtonText,
    secondaryButtonText,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = `nut-resultpage`
  const cls = classNames(classPrefix, className)

  const defaultStatus: statusOptions = {
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
  const [imgStyle] = useState<any>(`${defaultStatus[status]}`)
  return (
    <View className={cls} style={style}>
      <Image src={imgStyle} className={`${classPrefix}-icon`} />
      {typeof title === 'string' ? (
        <View className={`${classPrefix}-title`}>{title}</View>
      ) : (
        title
      )}
      {typeof description === 'string' ? (
        <Text numberOfLines={2} className={`${classPrefix}-description`}>
          {description}
        </Text>
      ) : (
        description
      )}
      {primaryButtonText || secondaryButtonText ? (
        <View className={`${classPrefix}-actions`}>
          {secondaryButtonText && (
            <Button
              className={`${classPrefix}-action`}
              onClick={props?.onSecondaryButtonClick}
            >
              {secondaryButtonText}
            </Button>
          )}
          {primaryButtonText && (
            <Button
              type="primary"
              className={`${classPrefix}-action`}
              onClick={props?.onPrimaryButtonClick}
            >
              {primaryButtonText}
            </Button>
          )}
        </View>
      ) : null}
    </View>
  )
}

ResultPage.displayName = 'NutResultPage'
