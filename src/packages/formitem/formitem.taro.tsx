import React, { ReactNode } from 'react'
import { Text, View } from '@tarojs/components'
import { BaseFormField } from './types'
import { Context } from '../form/context'
import Cell from '@/packages/cell/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { isForwardRefComponent } from '@/utils/is-forward-ref-component'
import { toArray } from '@/utils/to-array'
import { SECRET } from '@/packages/form/useform.taro'

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
  align?: 'flex-start' | 'center' | 'flex-end'
}

const defaultProps = {
  ...ComponentDefaults,
  required: false,
  name: '',
  label: '',
  rules: [{ required: false, message: '' }],
  errorMessageAlign: 'left',
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
    const { store = {}, setInitialValues } =
      this.context.formInstance.getInternal(SECRET)
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
    const { registerField, registerUpdate } =
      this.context.formInstance.getInternal(SECRET)
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
    const { setFieldsValue, getFieldValue } = this.context.formInstance
    const { dispatch } = this.context.formInstance.getInternal(SECRET)
    const { name = '' } = this.props

    if (children?.props?.defaultValue) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          '[NutUI] FormItem:',
          '请通过 initialValue 设置初始值，而不是 defaultValue'
        )
      }
    }

    const fieldValue = getFieldValue(name)
    const controlled = {
      ...children.props,
      className: children.props.className,
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
    const mergedValidateTrigger =
      validateTrigger || this.context.validateTrigger

    const validateTriggers: string[] = toArray(mergedValidateTrigger)
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
      this.context.formInstance.errors[this.props.name as string] = []
      this.refresh()
    } else {
      this.forceUpdate()
    }
  }

  getClassNameWithDirection(className: string) {
    if (className && this.context.labelPosition) {
      return `${className} ${className}-${this.context.labelPosition}`
    }
    return className
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
      align,
    } = {
      ...defaultProps,
      ...this.props,
    }
    const requiredInRules = rules?.some((rule: any) => rule.required)

    const item = name ? this.context.formInstance.errors[name] : []

    const { starPosition } = this.context.formInstance
    const renderStar = (required || requiredInRules) && (
      <Text className="nut-form-item-label-required required">*</Text>
    )
    const renderLabel = (
      <>
        <Text className="nut-form-item-labeltxt">
          {starPosition === 'left' ? renderStar : null}
          {label}
        </Text>
        {starPosition === 'right' ? renderStar : null}
      </>
    )
    return (
      <Cell
        className={`${this.getClassNameWithDirection('nut-form-item')} ${className}`}
        style={style}
        align={align}
        onClick={(e) =>
          this.props.onClick && this.props.onClick(e as any, this.componentRef)
        }
      >
        {label ? (
          <View
            className={`nut-cell-title ${this.getClassNameWithDirection('nut-form-item-label')}`}
          >
            {renderLabel}
          </View>
        ) : null}
        <View
          className={`nut-cell-value ${this.getClassNameWithDirection('nut-form-item-body')}`}
        >
          <View className="nut-form-item-body-slots">{childNode}</View>
          <View
            className="nut-form-item-body-tips"
            style={{
              textAlign: errorMessageAlign,
              display: item?.length ? 'initial' : 'none',
            }}
          >
            {item?.[0]?.message}
          </View>
        </View>
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
      returnChildNode = child(this.context.formInstance)
    }

    return (
      <React.Fragment key={this.state.resetCount}>
        <View
          className={this.context.disabled ? 'nut-form-item-disabled' : ''}
          catchMove={this.context.disabled}
        >
          {this.props.noStyle
            ? returnChildNode
            : this.renderLayout(returnChildNode)}
        </View>
      </React.Fragment>
    )
  }
}
