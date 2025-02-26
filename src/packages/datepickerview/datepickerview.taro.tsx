import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { DatePickerViewProps } from './types'

// import { useConfig } from '@/packages/configprovider/configprovider.taro'
// import { useRtl } from '@/packages/configprovider/index.taro'

const defaultProps = {
  ...ComponentDefaults,
} as DatePickerViewProps
export const DatePickerView: FunctionComponent<
  Partial<DatePickerViewProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  //   const { locale } = useConfig()
  //   const rtl = useRtl()
  const { className, style } = { ...defaultProps, ...props }
  const classPrefix = 'nut-datepickerview'
  const cls = classNames(classPrefix, className)
  return (
    <View className={cls} style={style}>
      DatePickerView
    </View>
  )
}

DatePickerView.displayName = 'NutDatePickerView'
