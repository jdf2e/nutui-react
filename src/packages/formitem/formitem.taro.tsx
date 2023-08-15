import React from 'react'
import { BaseFormField } from './types'
import { Context } from '../form/context'
import Cell from '@/packages/cell/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { isForwardRefComponent } from '@/utils/is-forward-ref-component'

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
  initialValue: any
  trigger: string
  valuePropName: string
  getValueFromEvent: (...args: any) => any
  onClick: (
    event: React.MouseEvent,
    componentRef: React.MutableRefObject<any>
  ) => void
  errorMessageAlign: TextAlign
}

const defaultProps = {
  ...ComponentDefaults,
  required: false,
  name: '',
  label: '',
  rules: [{ required: false, message: '' }],
  errorMessageAlign: 'left',
} as FormItemProps

export class FormItem extends React.Component<
  Partial<FormItemProps>,
  { resetCount: number }
> {
  static defaultProps = defaultProps

  static contextType: any = Context

  declare context: React.ContextType<typeof Context>

  private cancelRegister: any

  private componentRef: React.RefObject<any>

  constructor(props: FormItemProps) {
    super(props)
    this.componentRef = React.createRef()
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
    const { name = '' } = this.props

    if (children?.props?.defaultValue) {
      console.warn('通过 initialValue 设置初始值')
    }
    const controlled = {
      ...children.props,
      [this.props.valuePropName || 'value']:
        getFieldValue(name) === undefined
          ? this.props.initialValue
          : getFieldValue(name),
      [this.props.trigger || 'onChange']: (...args: any) => {
        // args [a, b]
        const originOnChange = (children as any).props[
          this.props.trigger || 'onChange'
        ]
        if (originOnChange) {
          originOnChange(...args)
        }
        let [next] = args
        if (this.props.getValueFromEvent) {
          next = this.props.getValueFromEvent(...args)
        }
        setFieldsValue({ [name]: next })
      },
    }
    if (isForwardRefComponent(children)) {
      controlled.ref = (componentInstance: any) => {
        const originRef = (children as any).ref
        if (originRef) {
          if (typeof originRef === 'function') {
            originRef(componentInstance)
          }
          if ('current' in originRef) {
            originRef.current = componentInstance
          }
        }
        this.componentRef = componentInstance
      }
    }

    return controlled
  }

  public refresh = () => {
    this.setState(({ resetCount }) => ({
      resetCount: resetCount + 1,
    }))
  }

  onStoreChange = (type?: string) => {
    if (type === 'reset') {
      this.refresh()
    } else {
      this.forceUpdate()
    }
  }

  renderLayout = (childNode: React.ReactNode) => {
    const { label, name, required, className, style, errorMessageAlign } = {
      ...defaultProps,
      ...this.props,
    }

    const item =
      this.context.errors?.length > 0 &&
      this.context.errors?.filter((item: any) => {
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
      <Cell
        className={`nut-form-item ${className}`}
        style={style}
        onClick={(e) =>
          this.props.onClick && this.props.onClick(e, this.componentRef)
        }
      >
        {label ? (
          <div className="nut-cell__title nut-form-item__label">
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
