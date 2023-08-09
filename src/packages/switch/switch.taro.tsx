import React, { FunctionComponent } from 'react'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export interface SwitchProps extends BasicComponent {
  checked: boolean
  defaultChecked: boolean
  disabled: boolean
  activeText: string
  inactiveText: string
  onChange: (val: boolean, event: React.MouseEvent) => void
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

  const [value, setValue] = usePropsValue<boolean>({
    value: checked,
    defaultValue: defaultChecked,
  })

  const classes = () => {
    return `${classPrefix} ${value ? 'switch-open' : 'switch-close'} ${
      disabled ? `${classPrefix}-disabled` : ''
    } ${`${classPrefix}-base`} ${className}`
  }

  const onClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    if (disabled) return
    onChange && onChange(!value, event)
    setValue(!value)
  }
  return (
    <div
      className={classes()}
      onClick={(e) => onClick(e)}
      style={style}
      {...rest}
    >
      <div className="switch-button">
        {!value && <div className="close-line" />}
        {activeText && (
          <>
            {value ? (
              <div className={`${classPrefix}__label open`}>{activeText}</div>
            ) : (
              <div className={`${classPrefix}__label close`}>
                {inactiveText}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

Switch.defaultProps = defaultProps
Switch.displayName = 'NutSwitch'
