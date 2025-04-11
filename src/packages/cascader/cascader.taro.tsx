import React, {
  forwardRef,
  isValidElement,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Check, Loading } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Tabs from '@/packages/tabs/index.taro'
import Popup from '@/packages/popup/index.taro'
import {
  normalizeListOptions,
  normalizeOptions,
} from '@/packages/cascader/utils'
import { CascaderOption, CascaderActions, TaroCascaderProps } from '@/types'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { usePropsValue } from '@/hooks/use-props-value'
import { isEmpty } from '@/utils/is-empty'
import { getRefValue, useRefState } from '@/hooks/use-ref-state'
import { useConfig } from '@/packages/configprovider'

const defaultProps: TaroCascaderProps = {
  ...ComponentDefaults,
  activeColor: '',
  activeIcon: 'checklist',
  popup: true,
  options: [],
  optionKey: {},
  format: {},
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  lazy: false,
  onClose: () => {},
  onChange: () => {},
  onPathChange: () => {},
} as unknown as TaroCascaderProps

export const Cascader = forwardRef((props: Partial<TaroCascaderProps>, ref) => {
  const classPrefix = 'nut-cascader'
  const classPane = `${classPrefix}-pane`
  const {
    activeColor,
    activeIcon,
    popup,
    popupProps = {},
    visible: outerVisible,
    options: outerOptions,
    value: outerValue,
    defaultValue: outerDefaultValue,
    optionKey,
    format,
    closeable,
    closeIconPosition,
    closeIcon,
    lazy,
    onLoad,
  } = mergeProps(defaultProps, props)
  const { locale } = useConfig()

  const [tabActiveIndex, setTabActiveIndex] = useState(0)
  const [optionsRef, setInnerOptions] = useRefState(outerOptions)
  const innerOptions = getRefValue(optionsRef)
  const [loading, setLoading] = useState<{ [key: string]: any }>({})

  const [value, setValue] = usePropsValue({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: [],
    onChange: (value) => {
      props.onChange?.(value, pathNodes.current)
      props.onPathChange?.(value, pathNodes.current)
    },
  })

  const [innerValue, setInnerValue] = useState(value)

  const options = useMemo(() => {
    if (!isEmpty(format)) {
      return normalizeListOptions(innerOptions, format)
    }
    if (!isEmpty(optionKey)) {
      return normalizeOptions(innerOptions, optionKey)
    }
    return innerOptions
  }, [innerOptions, optionKey, format, innerValue])

  const pathNodes = useRef<CascaderOption[]>([])

  const levels: any[] = useMemo(() => {
    const next = []
    let end = false
    let currentOptions = options
    for (const [index, val] of innerValue.entries()) {
      const opt = currentOptions?.find((o: CascaderOption) => o.value === val)
      next.push({
        selected: val,
        selectedText: opt?.text,
        pane: currentOptions,
      })
      pathNodes.current[index] = opt
      if (opt?.children) {
        currentOptions = opt.children
      } else {
        end = true
        break
      }
    }
    if (!end) {
      next.push({
        selected: null,
        pane: currentOptions,
      })
    }
    return next
  }, [innerValue, options, innerOptions])

  const [visible, setVisible] = usePropsValue({
    value: outerVisible,
    defaultValue: undefined,
    onChange: (value) => {
      if (value === false) {
        props.onClose?.()
      }
    },
  })
  const actions: CascaderActions = {
    open: () => {
      setVisible(true)
    },
    close: () => {
      setVisible(false)
    },
  }
  useImperativeHandle(ref, () => actions)

  useEffect(() => {
    if (!visible) {
      setInnerValue(value)
    }
  }, [visible, value])

  useEffect(() => {
    setInnerOptions(outerOptions)
  }, [outerOptions])

  useEffect(() => {
    setTabActiveIndex(levels.length - 1)
  }, [innerValue, innerOptions, outerOptions])
  useEffect(() => {
    const max = levels.length - 1
    if (tabActiveIndex > max) {
      setTabActiveIndex(max)
    }
  }, [tabActiveIndex, levels, innerOptions, outerOptions])
  useEffect(() => {
    const load = async () => {
      const parent = { children: [] }
      try {
        await innerValue.reduce(async (promise: Promise<any>, val, key) => {
          const pane = await onLoad({ value: val }, key)
          const parent = await promise
          parent.children = pane
          if (key === innerValue.length - 1) {
            return Promise.resolve(parent)
          }
          if (pane) {
            const node = pane.find((p) => p.value === val)
            return Promise.resolve(node)
          }
        }, Promise.resolve(parent))

        // 如果需要处理最终结果，可以在这里使用 last
        setInnerOptions(parent.children)
      } catch (error) {
        console.error('Error loading data:', error)
      }
    }

    if (lazy) load()
  }, [lazy])

  const chooseItem = async (pane: CascaderOption, levelIndex: number) => {
    if (pane.disabled) return
    const nextValue = innerValue.slice(0, levelIndex)
    const nextPathNodes = pathNodes.current.slice(0, levelIndex)
    if (pane.value) {
      setLoading(!!onLoad && { [levelIndex]: pane.value })
      nextValue[levelIndex] = pane.value
      nextPathNodes[levelIndex] = pane
      pathNodes.current = nextPathNodes
      props?.onPathChange?.(nextValue, pathNodes.current)
    }
    if (onLoad) {
      // 叶子节点不操作
      if (!pane.leaf) {
        const asyncOptions = await onLoad(pane, levelIndex)
        // 修改 options 触发渲染逻辑
        if (asyncOptions) pane.children = asyncOptions
      } else {
        setVisible(false)
        setValue(nextValue)
      }
    }
    if (!pane.children && !onLoad) {
      setVisible(false)
      setValue(nextValue)
    }
    setInnerValue(nextValue)
    setLoading({})
  }

  const renderCascaderItem = (item: any, levelIndex: number) => {
    return item.pane?.map((pane: CascaderOption, index: number) => {
      const active = item.selected === pane.value
      const classes = classNames(
        {
          active,
          disabled: pane.disabled,
        },
        'nut-cascader-item'
      )
      const showLoadingIcon = loading[levelIndex] === pane.value
      return (
        <View
          className={classes}
          style={{ color: active ? activeColor : '' }}
          key={pane.value}
          onClick={() => {
            chooseItem(pane, levelIndex)
          }}
        >
          <View className="nut-cascader-item-title">{pane.text}</View>
          {showLoadingIcon && (
            <Loading
              color="#969799"
              className="nut-cascader-item-icon-loading"
            />
          )}
          {active &&
            (isValidElement(activeIcon) ? (
              activeIcon
            ) : (
              <Check
                className={`${classPrefix}-icon-check`}
                color={activeColor || '#ff0f23'}
              />
            ))}
        </View>
      )
    })
  }

  const renderTab = () => {
    return (
      <View
        className={classNames(classPrefix, props.className)}
        style={props.style}
      >
        <Tabs
          align="left"
          value={tabActiveIndex}
          onChange={(index) => {
            props.onTabsChange?.(Number(index))
            setTabActiveIndex(Number(index))
          }}
        >
          {levels.map((pane, index) => (
            <Tabs.TabPane
              title={pane.selectedText || locale.select}
              key={index}
            >
              <View className={classPane}>
                {renderCascaderItem(pane, index)}
              </View>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </View>
    )
  }

  return popup ? (
    <Popup
      {...popupProps}
      visible={visible}
      position="bottom"
      round
      closeIcon={closeIcon}
      closeable={closeable}
      closeIconPosition={closeIconPosition}
      title={props.title}
      left={props.left}
      onOverlayClick={() => setVisible(false)}
      onCloseIconClick={() => setVisible(false)}
    >
      {renderTab()}
    </Popup>
  ) : (
    renderTab()
  )
})

Cascader.displayName = 'NutCascader'
