import React, { FunctionComponent, useEffect, useState } from 'react'

import { View } from '@tarojs/components'
import classNames from 'classnames'
import { Loading1 } from '@nutui/icons-react-taro'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { useRtl } from '@/packages/configprovider/index.taro'
import { TaroSwitchProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  activeText: '',
  inactiveText: '',
  loadingIcon: <Loading1 />,
} as TaroSwitchProps
export const Switch: FunctionComponent<Partial<TaroSwitchProps>> = (props) => {
  const {
    checked,
    defaultChecked,
    disabled,
    activeText,
    inactiveText,
    loadingIcon,
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

  useEffect(() => {
    changing && setChanging(false)
  }, [value])

  const [changing, setChanging] = useState(false)

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

  const onClick = () => {
    if (disabled || changing) return
    if (props.onChange) {
      setChanging(true)
      props.onChange(!value)
    }
    setValue(!value)
  }
  return (
    <View className={classes()} onClick={onClick} style={style} {...rest}>
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
        {changing && loadingIcon ? (
          <>{loadingIcon}</>
        ) : (
          <>
            {!value && !activeText && (
              <View className={`${classPrefix}-close-line`} />
            )}
          </>
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
