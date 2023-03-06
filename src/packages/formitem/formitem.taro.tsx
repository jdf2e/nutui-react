import React from 'react'
import { BaseFormField } from './types'
import { FormItemContext } from './formitemcontext'
import Cell from '@/packages/cell/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'match-parent'
export interface FormItemProps extends BasicComponent, BaseFormField {
  labelWidth: string | number
  errorMessageAlign: TextAlign
  showErrorLine: boolean
  showErrorMessage: boolean
}

const defaultProps = {
  ...ComponentDefaults,
  name: '',
  label: '',
  className: '',
  rules: [{ required: false, message: '' }],
  disabled: false,
  labelWidth: 90,
  errorMessageAlign: 'left',
  showErrorLine: true,
  showErrorMessage: true,
} as FormItemProps

export type FieldProps = typeof defaultProps & Partial<BaseFormField>

export class FormItem extends React.Component<FieldProps> {
  static defaultProps = defaultProps

  static contextType: any = FormItemContext

  declare context: React.ContextType<typeof FormItemContext>

  private cancelRegister: any

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
    const { getFieldValue, setFieldsValue } = this.context
    const { name } = this.props
    const type = (children as any).type.NAME

    return {
      value: getFieldValue(name),
      onChange: (
        event: React.ChangeEvent<HTMLInputElement> | number | string | string[]
      ) => {
        let newValue = event
        switch (type) {
          case 'checkbox':
            newValue = (event as React.ChangeEvent<HTMLInputElement>).target
              .value
            break
          default:
        }
        setFieldsValue({ [name]: newValue })
      },
    }
  }

  onStoreChange = () => {
    this.forceUpdate()
  }

  renderLayout = (childNode: React.ReactNode) => {
    const {
      label,
      name,
      rules = [{ required: false, message: '' }],
      className,
      labelWidth,
      errorMessageAlign,
      showErrorLine,
      showErrorMessage,
    } = {
      ...defaultProps,
      ...this.props,
    }

    const item =
      this.context.errList?.length > 0 &&
      this.context.errList?.filter((item: any) => {
        return item.field === name
      })

    const { starPositon } = this.context
    const renderStar = rules.length > 0 && rules[0].required && (
      <i className="required" />
    )
    const renderLabel =
      starPositon === 'Right' ? (
        <>
          {label}
          {renderStar}
        </>
      ) : (
        <>
          {renderStar}
          {label}
        </>
      )

    return (
      <Cell className={`nut-form-item ${className}`}>
        {label ? (
          <div
            className="nut-cell__title nut-form-item__label"
            style={{
              width: this.pxCheck(labelWidth),
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

  pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  render() {
    const { children } = this.props
    const c = Array.isArray(children) ? children[0] : children
    const returnChildNode = React.cloneElement(
      c as React.ReactElement,
      this.getControlled(c as React.ReactElement)
    )
    return this.renderLayout(returnChildNode)
  }
}
