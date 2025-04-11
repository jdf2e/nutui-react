import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { Loading1 } from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { useRtl } from '@/packages/configprovider'
import { WebSwitchProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  activeText: '',
  inactiveText: '',
  loadingIcon: <Loading1 />,
  loading: false,
} as WebSwitchProps
export const Switch: FunctionComponent<Partial<WebSwitchProps>> = (props) => {
  const {
    checked,
    defaultChecked,
    disabled,
    activeText,
    inactiveText,
    loadingIcon,
    loading,
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

  const onClick = () => {
    if (disabled || loading) return
    if (onChange) {
      onChange(!value)
    }
    setValue(!value)
  }
  return (
    <div className={classes()} onClick={onClick} style={style} {...rest}>
      <div
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
              <div className={`${classPrefix}-close-line`} />
            )}
          </>
        )}
      </div>
      {activeText && (
        <div
          className={classNames(`${classPrefix}-label`, {
            [`${classPrefix}-label-open`]: value,
            [`${classPrefix}-label-close`]: !value,
            [`${classPrefix}-label-open-rtl`]: rtl && value,
            [`${classPrefix}-label-close-rtl`]: rtl && !value,
            [`${classPrefix}-label-close-disabled`]: disabled && !value,
          })}
        >
          {value ? activeText : inactiveText}
        </div>
      )}
    </div>
  )
}

Switch.displayName = 'NutSwitch'
