import React, {
  FunctionComponent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react'
import Icon from '@/packages/icon'

import RadioContext from './context'
import RadioGroup from '@/packages/radiogroup'

import { IComponent, ComponentDefaults } from '@/utils/typings'

type Shape = 'button' | 'round'
type Position = 'right' | 'left'

export interface RadioProps extends IComponent {
  className: string
  style: React.CSSProperties
  disabled: boolean
  checked: boolean
  shape: Shape
  textPosition: Position
  value: string | number | boolean
  iconName: string
  iconActiveName: string
  iconSize: string | number
  onChange: MouseEventHandler<HTMLDivElement>
}

const defaultProps = {
  ...ComponentDefaults,
  className: '',
  style: {},
  disabled: false,
  checked: false,
  shape: 'round',
  value: '',
  textPosition: 'right',
  iconName: 'check-normal',
  iconActiveName: 'check-checked',
  iconSize: 18,
  onChange: (e) => {},
} as RadioProps
export const Radio: FunctionComponent<
  Partial<RadioProps> & React.HTMLAttributes<HTMLDivElement>
> & { RadioGroup: typeof RadioGroup } = (props) => {
  const { children } = {
    ...defaultProps,
    ...props,
  }
  const {
    className,
    disabled,
    checked,
    shape,
    textPosition,
    value,
    iconName,
    iconActiveName,
    iconSize,
    onChange,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = props
  const componentName = 'nut-radio'
  const [checkedStatement, setCheckedStatement] = useState(checked)
  const [valueStatement, setValueStatement] = useState(value)
  const [disabledStatement, setDisabledStatement] = useState(disabled)
  const context = useContext(RadioContext)
  useEffect(() => {
    setDisabledStatement(disabled)
    setValueStatement(value)
    setCheckedStatement(checked)
  }, [disabled, value, checked])

  const renderLabel = () => {
    return (
      <div
        className={`${componentName}__label ${
          disabledStatement ? `${componentName}__label--disabled` : ''
        }`}
      >
        {children}
      </div>
    )
  }
  const renderButton = () => {
    return (
      <div
        className={`${componentName}__button ${
          checkedStatement && `${componentName}__button--active`
        } ${disabledStatement ? `${componentName}__button--disabled` : ''}`}
      >
        {children}
      </div>
    )
  }
  const color = () => {
    if (disabledStatement) {
      return 'nut-radio__icon--disable'
    }
    if (checkedStatement) {
      return 'nut-radio__icon'
    }
    return 'nut-radio__icon--unchecked'
  }
  const renderIcon = () => {
    const { iconName, iconSize, iconActiveName } = props

    return (
      <Icon
        classPrefix={iconClassPrefix}
        fontClassName={iconFontClassName}
        name={checkedStatement ? iconActiveName : iconName}
        size={iconSize}
        className={color()}
      />
    )
  }
  const renderRadioItem = () => {
    if (shape === 'button') {
      return renderButton()
    }
    if (reverseState) {
      return [renderLabel(), renderIcon()]
    }
    return [renderIcon(), renderLabel()]
  }
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (disabledStatement || checkedStatement) return
    setCheckedStatement(!checkedStatement)
    onChange && onChange(e)
    context && context.onChange(valueStatement)
  }
  const reverseState = textPosition === 'left'
  return (
    <div className={`nut-radio ${className}`} onClick={handleClick} {...rest}>
      {renderRadioItem()}
    </div>
  )
}

Radio.defaultProps = defaultProps
Radio.displayName = 'NutRadio'
Radio.RadioGroup = RadioGroup
