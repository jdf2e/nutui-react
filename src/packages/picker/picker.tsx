import React, {
  useState,
  useEffect,
  useRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import isEqual from 'react-fast-compare'
import {
  PickerOptions,
  PickerValue,
  PickerOption,
  PickerOnChangeCallbackParameter,
} from '@/packages/pickerview/types'
import PickerView from '@/packages/pickerview/index'
import Popup, { PopupProps } from '@/packages/popup/index'
import SafeArea from '@/packages/safearea/index'
import useRefs from '@/hooks/use-refs'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/hooks/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { PickerActions, PickerRef } from './types'

export interface PickerProps extends Omit<BasicComponent, 'children'> {
  visible?: boolean | undefined
  title?: string
  options: PickerOptions[]
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  threeDimensional?: boolean
  duration: number | string
  closeOnOverlayClick: boolean
  renderLabel?: (item: PickerOption) => React.ReactNode

  popupProps: Partial<
    Omit<PopupProps, 'title' | 'onClose' | 'closeOnOverlayClick'>
  >
  onConfirm?: (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => void
  onCancel?: () => void
  onClose?: (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => void
  onChange?: (args0: PickerOnChangeCallbackParameter) => void
  children?: any
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  options: [],
  value: undefined,
  defaultValue: [],
  closeOnOverlayClick: true,
} as unknown as PickerProps
const InternalPicker: ForwardRefRenderFunction<
  PickerRef,
  Partial<PickerProps>
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    children,
    visible,
    title,
    options = [],
    closeOnOverlayClick,
    popupProps = {},
    defaultValue = [],
    className,
    style,
    threeDimensional,
    duration,
    onConfirm,
    onCancel,
    onClose,
    onChange,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-picker'
  const classes = classNames(classPrefix, className)
  const [selectedValue, setSelectedValue] = usePropsValue<PickerValue[]>({
    value: props.value,
    defaultValue: [...defaultValue],
    finalValue: [...defaultValue],
    onChange: (value: PickerValue[]) => {
      props.onConfirm?.(selectedOptionsRef.current, value)
    },
  })
  const [innerVisible, setInnerVisible] = usePropsValue<boolean>({
    value: props.visible,
    defaultValue: false,
    finalValue: false,
    onChange: (v: boolean) => {
      if (!v) {
        props.onClose?.(selectedOptionsRef.current, innerValue)
      }
    },
  })

  const actions: PickerActions = {
    open: () => {
      setInnerVisible(true)
    },
    close: () => {
      setInnerVisible(false)
    },
  }
  useImperativeHandle(ref, () => actions)

  const [innerValue, setInnerValue] = useState([...selectedValue])
  const innerValueRef = useRef(innerValue)
  const [innerOptions, setInnerOptions] = useState<PickerOptions[]>([])
  const selectedOptionsRef = useRef([] as PickerOptions)
  const [refs, setRefs] = useRefs()

  useEffect(() => {
    if (innerVisible) {
      setInnerValue(selectedValue)
      setInnerOptions(options as PickerOptions[])
    }
  }, [selectedValue, innerOptions, innerVisible])

  const onChangeItem = ({
    value,
    index,
    selectedOptions,
  }: PickerOnChangeCallbackParameter) => {
    if (selectedOptions?.length) {
      selectedOptionsRef.current = selectedOptions
    }
    if (isEqual(value, innerValueRef.current)) return
    innerValueRef.current = value
    setInnerValue(value)
    innerVisible &&
      onChange?.({
        selectedOptions,
        value,
        index,
      })
  }

  const onConfirmEvent = () => {
    let moving = false
    refs.forEach((ref: any) => {
      if (ref.moving) moving = true
      ref.stopMomentum()
    })
    if (!moving) {
      setSelectedValue(innerValue, true)
      setInnerVisible(false)
    }
  }

  const onCancelEvent = () => {
    setInnerValue(selectedValue)
    onCancel?.()
    setInnerVisible(false)
  }

  const renderTitleBar = () => {
    return (
      <div className={`${classPrefix}-control`}>
        <span
          className={`${classPrefix}-cancel-btn`}
          onClick={(e) => {
            e.stopPropagation()
            onCancelEvent()
          }}
        >
          {locale?.cancel}
        </span>
        <div className={`${classPrefix}-title`}>{title || ''}</div>
        <span
          className={`${classPrefix}-confirm-btn`}
          onClick={(e) => {
            e.stopPropagation()
            onConfirmEvent()
          }}
        >
          {locale.confirm}
        </span>
      </div>
    )
  }

  const renderPickerElement = () => {
    return (
      <div className={classes} style={style} {...rest}>
        {renderTitleBar()}
        {typeof children !== 'function' && children}
        <div className={`${classPrefix}-panel`}>
          <PickerView
            setRefs={setRefs}
            value={innerValue}
            options={props.options}
            threeDimensional={threeDimensional}
            duration={duration}
            onChange={({
              value,
              index,
              selectedOptions,
            }: PickerOnChangeCallbackParameter) => {
              onChangeItem({ value, index, selectedOptions })
            }}
          />
        </div>
      </div>
    )
  }
  return (
    <>
      {typeof children === 'function' && children(selectedValue)}

      <Popup
        {...popupProps}
        visible={innerVisible}
        position="bottom"
        onOverlayClick={() => {
          if (!closeOnOverlayClick) return
          onCancelEvent()
        }}
      >
        {innerVisible ? <>{renderPickerElement()} </> : null}
        <SafeArea position="bottom" />
      </Popup>
    </>
  )
}

const Picker = React.forwardRef<PickerRef, Partial<PickerProps>>(InternalPicker)
export default Picker
