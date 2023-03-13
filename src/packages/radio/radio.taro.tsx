import React, {
  FunctionComponent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CheckChecked, CheckNormal } from '@nutui/icons-react-taro'

import RadioContext from './context'
import RadioGroup from '@/packages/radiogroup/index.taro'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type Shape = 'button' | 'round'
type Position = 'right' | 'left'

export interface RadioProps extends BasicComponent {
  className: string
  style: React.CSSProperties
  disabled: boolean
  checked: boolean
  shape: Shape
  textPosition: Position
  value: string | number | boolean
  icon: React.ReactNode
  iconActive: React.ReactNode
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
  icon: null,
  iconActive: null,
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
    icon,
    iconActive,
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
          !disabledStatement &&
          checkedStatement &&
          `${componentName}__button--active`
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
    const { icon, iconSize, iconActive } = props

    if (!disabledStatement && checkedStatement) {
      return React.isValidElement(iconActive) ? (
        React.cloneElement<any>(iconActive, {
          ...iconActive.props,
          size: iconSize,
          className: color(),
        })
      ) : (
        <CheckChecked size={iconSize} className={color()} />
      )
    }
    return React.isValidElement(icon) ? (
      React.cloneElement<any>(icon, {
        ...icon.props,
        size: iconSize,
        className: color(),
      })
    ) : (
      <CheckNormal size={iconSize} className={color()} />
    )
  }
  const reverseState = textPosition === 'left'
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

  return (
    <div
      className={`nut-radio ${className} ${
        reverseState ? `${componentName}--reverse` : ''
      }`}
      onClick={handleClick}
      {...rest}
    >
      {renderRadioItem()}
    </div>
  )
}

Radio.defaultProps = defaultProps
Radio.displayName = 'NutRadio'
Radio.RadioGroup = RadioGroup
