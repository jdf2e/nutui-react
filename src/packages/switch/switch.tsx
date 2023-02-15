import React, { FunctionComponent, useState, useEffect } from 'react'

import bem from '@/utils/bem'
import Icon from '@/packages/icon'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface SwitchProps extends BasicComponent {
  isAsync: boolean
  checked: boolean
  disable: boolean
  activeColor: string
  inactiveColor: string
  activeText: string
  inactiveText: string
  icon: string
  iconSize: string
  className: string
  style: React.CSSProperties
  onChange: (val: boolean, event: React.MouseEvent) => void
}
const defaultProps = {
  ...ComponentDefaults,
  isAsync: false,
  checked: false,
  disable: false,
  activeColor: '',
  inactiveColor: '',
  activeText: '',
  inactiveText: '',
  icon: '',
  iconSize: '12',
  className: '',
} as SwitchProps
export const Switch: FunctionComponent<Partial<SwitchProps>> = (props) => {
  const {
    isAsync,
    checked,
    disable,
    activeColor,
    inactiveColor,
    activeText,
    inactiveText,
    icon,
    iconSize,
    onChange,
    className,
    style,
    iconClassPrefix,
    iconFontClassName,
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = useState(false)
  const b = bem('switch')

  useEffect(() => {
    setValue(checked)
  }, [checked])

  const classes = () => {
    return `${b()} ${value ? 'switch-open' : 'switch-close'} ${
      disable ? `${b()}-disable` : ''
    } ${`${b()}-base`} ${className}`
  }

  const styles = () => {
    const myStyle = {
      backgroundColor: value ? activeColor : inactiveColor,
      ...(style || {}),
    }

    return myStyle
  }

  const onClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    if (disable) return
    if (!isAsync) {
      setValue(!value)
    }
    onChange && onChange(!value, event)
  }
  return (
    <div className={classes()} onClick={(e) => onClick(e)} style={styles()}>
      <div className="switch-button">
        {!value && <div className="close-line" />}
        {value && icon && (
          <Icon
            className={`${b('icon')} open`}
            classPrefix={iconClassPrefix}
            fontClassName={iconFontClassName}
            name={icon}
            size={iconSize}
          />
        )}
      </div>
      {activeText && (
        <div className="switch-label">
          <div className={`${b('label')} open`}>{activeText}</div>
          <div className={`${b('label')} close`}>{inactiveText}</div>
        </div>
      )}
    </div>
  )
}

Switch.defaultProps = defaultProps
Switch.displayName = 'NutSwitch'
