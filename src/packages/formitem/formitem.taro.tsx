import React from 'react'
import { BaseFormField } from './types'
import { Context } from '../form/context'
import Cell from '@/packages/cell'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { pxCheck } from '@/utils/px-check'

type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent'

export interface FormItemProps extends BasicComponent, BaseFormField {
  required: boolean
  labelWidth: number
  initialValue: any
  trigger: string
  valuePropName: string
  getValueFromEvent: (...args: any) => any
  errorMessageAlign: TextAlign
}

const defaultProps = {
  ...ComponentDefaults,
  required: false,
  name: '',
  label: '',
  rules: [{ required: false, message: '' }],
  disabled: false,
  labelWidth: 90,
  errorMessageAlign: 'left',
} as FormItemProps

export type FieldProps = typeof defaultProps & Partial<BaseFormField>

export class FormItem extends React.Component<
  FieldProps,
  { resetCount: number }
> {
  static defaultProps = defaultProps

  static contextType: any = Context

  declare context: React.ContextType<typeof Context>

  private cancelRegister: any

  constructor(props: FieldProps) {
    super(props)
    this.state = {
      resetCount: 1,
    }
  }

  componentDidMount() {
    // 注册组件实例到FormStore
    this.cancelRegister = this.context.registerField(this)
  }

  componentWillUnmount() {
    if (this.cancelRegister) {
      this.cancelRegister()
    }
  }

  // children添加value属性和onChange事件
  getControlled = (children: React.ReactElement) => {
    const { setFieldsValue, getFieldValue } = this.context
    const { name } = this.props

    if (this.props.initialValue === undefined) {
      console.warn('通过 initialValue 设置初始值')
    }
    const value = getFieldValue(name)
    console.log('value', value, this.props.initialValue)
    const controlled = {
      ...children.props,
      [this.props.valuePropName || 'value']:
        getFieldValue(name) || this.props.initialValue,
      [this.props.trigger || 'onChange']: (...args: any) => {
        const originOnChange = (children as any).props[
          this.props.trigger || 'onChange'
        ]
        if (originOnChange) {
          originOnChange(...args)
        }
        // 例如 picker 的反转
        let next = args
        if (this.props.getValueFromEvent) {
          next = this.props.getValueFromEvent(...args)
        }
        console.log('onchange inner', args)
        setFieldsValue({ [name]: next })
      },
    }
    return controlled
  }

  public refresh = () => {
    this.setState(({ resetCount }) => ({
      resetCount: resetCount + 1,
    }))
  }

  onStoreChange = (type?: string) => {
    console.log('onStoreChange', type)
    if (type === 'reset') {
      this.refresh()
    } else {
      this.forceUpdate()
    }
  }

  renderLayout = (childNode: React.ReactNode) => {
    const {
      label,
      name,
      required,
      className,
      style,
      labelWidth,
      errorMessageAlign,
    } = {
      ...defaultProps,
      ...this.props,
    }

    const item =
      this.context.errList?.length > 0 &&
      this.context.errList?.filter((item: any) => {
        return item.field === name
      })

    const { starPosition } = this.context
    const renderStar = required && <i className="required" />
    const renderLabel = (
      <>
        {starPosition === 'left' ? renderStar : null}
        {label}
        {starPosition === 'right' ? renderStar : null}
      </>
    )
    return (
      <Cell className={`nut-form-item ${className}`} style={style}>
        {label ? (
          <div
            className="nut-cell__title nut-form-item__label"
            style={{
              width: pxCheck(labelWidth),
            }}
          >
            {renderLabel}
          </div>
        ) : null}
        <div className="nut-cell__value nut-form-item__body">
          <div className="nut-form-item__body__slots">{childNode}</div>
          {item.length > 0 && (
            <div
              className="nut-form-item__body__tips"
              style={{ textAlign: errorMessageAlign }}
            >
              {item[0].message}
            </div>
          )}
        </div>
      </Cell>
    )
  }

  render() {
    const { children } = this.props
    const child = Array.isArray(children) ? children[0] : children
    const returnChildNode = React.cloneElement(
      child,
      this.getControlled(child as React.ReactElement)
    )
    return (
      <React.Fragment key={this.state.resetCount}>
        {this.renderLayout(returnChildNode)}
      </React.Fragment>
    )
  }
}
