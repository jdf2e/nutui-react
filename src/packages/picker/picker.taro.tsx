import React, {
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import isEqual from 'react-fast-compare'
import PickerView from '@/packages/pickerview/index.taro'
import Popup from '@/packages/popup/index.taro'
import SafeArea from '@/packages/safearea/index.taro'
import useRefs from '@/hooks/use-refs'
import { useConfig } from '@/packages/configprovider/index.taro'
import { usePropsValue } from '@/hooks/use-props-value'
import { ComponentDefaults } from '@/utils/typings'
import {
  PickerActions,
  PickerOnChangeCallbackParameter,
  PickerOptions,
  PickerRef,
  PickerValue,
  TaroPickerProps,
} from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  options: [],
  value: undefined,
  defaultValue: [],
  closeOnOverlayClick: true,
} as unknown as TaroPickerProps
const InternalPicker: ForwardRefRenderFunction<
  PickerRef,
  Partial<TaroPickerProps>
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
      <View className={`${classPrefix}-control`}>
        <View
          className={`${classPrefix}-cancel-btn`}
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation()
            onCancelEvent()
          }}
        >
          {locale?.cancel}
        </View>
        <View className={`${classPrefix}-title`}>{title || ''}</View>
        <View
          className={`${classPrefix}-confirm-btn`}
          onClick={(e: { stopPropagation: () => void }) => {
            e.stopPropagation()
            onConfirmEvent()
          }}
        >
          {locale.confirm}
        </View>
      </View>
    )
  }

  const renderPickerElement = () => {
    return (
      <View className={classes} style={style} {...rest}>
        {renderTitleBar()}
        {typeof children !== 'function' && children}
        <View className={`${classPrefix}-panel`}>
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
        </View>
      </View>
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

const Picker = React.forwardRef<PickerRef, Partial<TaroPickerProps>>(
  InternalPicker
)
export default Picker
