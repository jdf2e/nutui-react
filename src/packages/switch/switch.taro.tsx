import React, { FunctionComponent } from 'react'

import { ITouchEvent, View } from '@tarojs/components'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { useRtl } from '@/packages/configprovider/index.taro'

export interface SwitchProps extends BasicComponent {
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  activeText: React.ReactNode
  inactiveText: React.ReactNode
  onChange: (
    val: boolean,
    event: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => void
}
const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  activeText: '',
  inactiveText: '',
} as SwitchProps
export const Switch: FunctionComponent<Partial<SwitchProps>> = (props) => {
  const {
    checked,
    defaultChecked,
    disabled,
    activeText,
    inactiveText,
    className,
    style,
    onChange,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-switch'

  const rtl = useRtl()

  const [value, setValue] = usePropsValue<boolean>({
    value: checked,
    defaultValue: defaultChecked,
  })

  const classes = () => {
    return classNames([
      classPrefix,
      className,
      {
        [`${classPrefix}-close`]: !value,
        [`${classPrefix}-disabled`]: disabled,
        [`${classPrefix}-disabled-close`]: disabled && !value,
      },
    ])
  }

  const onClick = (
    event: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
    if (disabled) return
    onChange && onChange(!value, event)
    setValue(!value)
  }
  return (
    <View
      className={classes()}
      onClick={(e) => onClick(e)}
      style={style}
      {...rest}
    >
      <View
        className={classNames([
          [`${classPrefix}-button`],
          [
            value
              ? `${classPrefix}-button-open`
              : `${classPrefix}-button-close`,
          ],
          {
            [`${classPrefix}-button-open-rtl`]: rtl && value,
            [`${classPrefix}-button-close-rtl`]: rtl && !value,
          },
        ])}
      >
        {!value && !activeText && (
          <View className={`${classPrefix}-close-line`} />
        )}
      </View>
      {activeText && (
        <View
          className={classNames(`${classPrefix}-label`, {
            [`${classPrefix}-label-open`]: value,
            [`${classPrefix}-label-close`]: !value,
            [`${classPrefix}-label-open-rtl`]: rtl && value,
            [`${classPrefix}-label-close-rtl`]: rtl && !value,
            [`${classPrefix}-label-close-disabled`]: disabled && !value,
          })}
        >
          {value ? activeText : inactiveText}
        </View>
      )}
    </View>
  )
}

Switch.displayName = 'NutSwitch'
