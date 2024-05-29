import React, { ReactNode } from 'react'
import { BaseFormField } from './types'
import { Context } from '../form/context'
import Cell from '@/packages/cell'
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

type ShouldUpdate = (prevValue: any, curValue: any) => boolean

export interface FormItemProps
  extends Omit<BasicComponent, 'children'>,
    BaseFormField {
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
  shouldUpdate: boolean
  noStyle: boolean
  children: ReactNode | ((obj: any) => React.ReactNode)
}

const defaultProps = {
  ...ComponentDefaults,
  required: false,
  name: '',
  label: '',
  rules: [{ required: false, message: '' }],
  errorMessageAlign: 'left',
  validateTrigger: 'onChange',
  shouldUpdate: false,
  noStyle: false,
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

  private eventOff: any

  constructor(props: FormItemProps) {
    super(props)
    this.componentRef = React.createRef()
    this.state = {
      resetCount: 1,
    }
  }

  componentDidMount() {
    // Form设置initialValues时的处理
    const { store = {}, setInitialValues } = this.context.getInternal(SECRET)
    if (
      this.props.initialValue &&
      this.props.name &&
      !Object.keys(store).includes(this.props.name)
    ) {
      setInitialValues(
        { ...store, [this.props.name]: this.props.initialValue },
        true
      )
    }
    // 注册组件实例到FormStore
    const { registerField, registerUpdate } = this.context.getInternal(SECRET)
    this.cancelRegister = registerField(this)
    // 这里需要增加事件监听，因为此实现属于依赖触发
    this.eventOff = registerUpdate(this, this.props.shouldUpdate)
  }

  componentWillUnmount() {
    if (this.cancelRegister) {
      this.cancelRegister()
    }
    if (this.eventOff) {
      this.eventOff()
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
          ? [validateTrigger]
          : [...validateTrigger]
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
      this.context.errors[this.props.name as string] = []
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
          <div className="nut-cell-title nut-form-item-label">
            {renderLabel}
          </div>
        ) : null}
        <div className="nut-cell-value nut-form-item-body">
          <div className="nut-form-item-body-slots">{childNode}</div>
          {item && item.length > 0 && (
            <div
              className="nut-form-item-body-tips"
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
    let returnChildNode
    if (!this.props.shouldUpdate) {
      returnChildNode = React.cloneElement(
        child,
        this.getControlled(child as React.ReactElement)
      )
    } else {
      returnChildNode = child(this.context)
    }
    return (
      <React.Fragment key={this.state.resetCount}>
        {this.props.noStyle
          ? returnChildNode
          : this.renderLayout(returnChildNode)}
      </React.Fragment>
    )
  }
}
