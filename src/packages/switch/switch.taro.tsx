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
  loading: undefined,
  onLoadingChange: (loading: boolean) => {},
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
    loading: propLoading,
    onLoadingChange,
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

  const [internalLoading, setInternalLoading] = useState(false)
  const loading = propLoading !== undefined ? propLoading : internalLoading

  const setLoading = (val: boolean) => {
    if (propLoading !== undefined) {
      onLoadingChange(val)
    } else {
      setInternalLoading(val)
    }
  }

  useEffect(() => {
    loading && setLoading(false)
  }, [value])

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

  const onClick = async () => {
    if (disabled || loading) return
    if (onChange) {
      loadingIcon && setLoading(true)
      try {
        await onChange(!value)
      } catch (e) {
        setLoading(false)
      }
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
        {loading && loadingIcon ? (
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
