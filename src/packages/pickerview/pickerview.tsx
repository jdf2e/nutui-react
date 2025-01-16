import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { PickerViewProps } from './types'
// import { useConfig } from '@/packages/configprovider'
// import { useRtl } from '@/packages/configprovider'

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
    <div className={cls} style={style}>
      PickerView
    </div>
  )
}

PickerView.displayName = 'NutPickerView'
