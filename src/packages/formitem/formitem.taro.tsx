import React from 'react'
import { BaseFormField } from './types'
import { Context } from '../form/context'
import Cell from '@/packages/cell/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { isForwardRefComponent } from '@/utils/is-forward-ref-component'
import { SECRET } from '@/packages/form/useform'

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
  validateTrigger: string | string[]
}

const defaultProps = {
  ...ComponentDefaults,
  required: false,
  name: '',
  label: '',
  rules: [{ required: false, message: '' }],
  errorMessageAlign: 'left',
  validateTrigger: 'onChange',
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
    const { registerField } = this.context.getInternal(SECRET)
    this.cancelRegister = registerField(this)
  }

  componentWillUnmount() {
    if (this.cancelRegister) {
      this.cancelRegister()
    }
  }

  // children添加value属性和onChange事件
  getControlled = (children: React.ReactElement) => {
    const { setFieldsValue, getFieldValue } = this.context
    const { dispatch } = this.context.getInternal(SECRET)
    const { name = '' } = this.props

    if (children?.props?.defaultValue) {
      console.warn('通过 initialValue 设置初始值')
    }
    const fieldValue = getFieldValue(name)
    const controlled = {
      ...children.props,
      [this.props.valuePropName || 'value']:
        fieldValue !== undefined ? fieldValue : this.props.initialValue,
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
    const { validateTrigger } = this.props
    let validateTriggers: string[] = [this.props.trigger || 'onChange']
    if (validateTrigger) {
      validateTriggers =
        typeof validateTrigger === 'string'
          ? [...validateTriggers, validateTrigger]
          : [...validateTriggers, ...validateTrigger]
      validateTriggers.forEach((trigger) => {
        const originTrigger = controlled[trigger]
        controlled[trigger] = (...args: any) => {
          if (originTrigger) {
            originTrigger(...args)
          }
          if (this.props.rules && this.props.rules.length) {
            dispatch({
              name: this.props.name,
            })
          }
        }
      })
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
    const {
      label,
      name,
      required,
      rules,
      className,
      style,
      errorMessageAlign,
    } = {
      ...defaultProps,
      ...this.props,
    }
    const requiredInRules = rules?.some((rule: any) => rule.required)

    const item = name ? this.context.errors[name] : []

    const { starPosition } = this.context
    const renderStar = (required || requiredInRules) && (
      <i className="required" />
    )
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

          <div
            className="nut-form-item__body__tips"
            style={{
              textAlign: errorMessageAlign,
              display: item?.length ? 'inherit' : 'none',
            }}
          >
            {item?.[0]?.message}
          </div>
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
