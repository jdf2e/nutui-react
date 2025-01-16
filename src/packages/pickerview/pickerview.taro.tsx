import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { PickerViewProps } from './types'

// import { useConfig } from '@/packages/configprovider/configprovider.taro'
// import { useRtl } from '@/packages/configprovider/index.taro'

const defaultProps = {
  ...ComponentDefaults,
} as PickerViewProps
export const PickerView: FunctionComponent<
  Partial<PickerViewProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  //   const { locale } = useConfig()
  //   const rtl = useRtl()
  const { className, style } = { ...defaultProps, ...props }
  const classPrefix = 'nut-pickerview'
  const cls = classNames(classPrefix, className)
  return (
    <View className={cls} style={style}>
      PickerView
    </View>
  )
}

PickerView.displayName = 'NutPickerView'
