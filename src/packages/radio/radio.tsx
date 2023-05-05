import React, {
  FunctionComponent,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CheckChecked, CheckNormal } from '@nutui/icons-react'

import RadioContext from './context'
import RadioGroup from '@/packages/radiogroup'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type Shape = 'button' | 'round'
type Position = 'right' | 'left'

export interface RadioProps extends BasicComponent {
  disabled: boolean
  checked: boolean
  defaultChecked: boolean
  shape: Shape
  labelPosition: Position
  icon: React.ReactNode
  checkedIcon: React.ReactNode
  onChange: MouseEventHandler<HTMLDivElement>
  value: string | number
}

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  checked: false,
  shape: 'round',
  value: '',
  labelPosition: 'right',
  icon: null,
  checkedIcon: null,
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
    labelPosition,
    value,
    icon,
    checkedIcon,
    onChange,
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
    const { icon, checkedIcon } = props

    if (!disabledStatement && checkedStatement) {
      return React.isValidElement(checkedIcon) ? (
        React.cloneElement<any>(checkedIcon, {
          ...checkedIcon.props,
          className: color(),
        })
      ) : (
        <CheckChecked className={color()} />
      )
    }
    return React.isValidElement(icon) ? (
      React.cloneElement<any>(icon, {
        ...icon.props,
        className: color(),
      })
    ) : (
      <CheckNormal className={color()} />
    )
  }
  const reverseState = labelPosition === 'left'
  const renderRadioItem = () => {
    if (shape === 'button') {
      return renderButton()
    }
    if (reverseState) {
      return (
        <>
          {renderLabel()}
          {renderIcon()}
        </>
      )
    }
    return (
      <>
        {renderIcon()}
        {renderLabel()}
      </>
    )
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
