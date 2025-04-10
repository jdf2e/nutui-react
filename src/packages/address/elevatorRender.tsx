import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import Popup from '@/packages/popup'
import Elevator from '../elevator'
import {
  normalizeListOptions,
  normalizeOptions,
} from '@/packages/cascader/utils'
import { transformData } from './utils'
import {
  CascaderOption,
  WebCascaderProps,
  CascaderValue,
  CascaderOptionKey,
} from '@/types'
import { ComponentDefaults } from '@/utils/typings'
import { mergeProps } from '@/utils/merge-props'
import { usePropsValue } from '@/hooks/use-props-value'
import { isEmpty } from '@/utils/is-empty'
import { useConfig } from '@/packages/configprovider'

// 支持热区快速定位
// 支持电梯快速定位
// 已选省份地区放在顶部，独立展示
type AreaInfo = {
  name: string
  id: string | number
  children: any
}
export interface AddressProps extends WebCascaderProps {
  visible: boolean // popup visible
  type: string
  options: CascaderOption[]
  hotList: AreaInfo[]
  value: CascaderValue
  defaultValue: CascaderValue
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  height: string | number
}

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  type: 'elevator',
  options: [],
  optionKey: { textKey: 'text', valueKey: 'value', childrenKey: 'children' },
  format: {},
  height: '200px',
  activeColor: '',
  activeIcon: 'checklist',
  popup: true,
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  lazy: false,
  onClose: () => {},
  onChange: () => {},
  onPathChange: () => {},
} as unknown as AddressProps

export const ElevatorRender: FunctionComponent<
  Partial<AddressProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'title' | 'defaultValue' | 'onChange'
    >
> = (props) => {
  const {
    children,
    type,
    height,
    hotList,
    title,
    left,
    defaultValue,
    optionKey,
    format,
    onClose,
    onChange,
    onPathChange,
    activeColor,
    activeIcon,
    popup,
    popupProps = {},
    visible: outerVisible,
    options: outerOptions,
    value: outerValue,
    defaultValue: outerDefaultValue,
    closeable,
    closeIconPosition,
    closeIcon,
    lazy,
    onLoad,
    ...rest
  } = mergeProps(defaultProps, props)
  const { locale } = useConfig()

  const classPrefix = 'nut-address'
  const prefixEleCls = 'nut-address-elevator'

  const [tabActiveIndex, setTabActiveIndex] = useState(0)
  const [innerOptions, setInnerOptions] = useState(outerOptions)
  // const innerOptions = getRefValue(optionsRef)
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

  const [addressTip, setAddressTip] = useState('选择省份/地区')
  const [selectedRegion, setSelectedRegion] = useState<AreaInfo[]>([])

  const options = useMemo(() => {
    console.log('inneroptions changes', innerOptions)
    let currOptions = innerOptions
    if (!isEmpty(format)) {
      currOptions = normalizeListOptions(innerOptions, format)
    } else if (!isEmpty(optionKey)) {
      currOptions = normalizeOptions(innerOptions, optionKey) || []
    }
    return transformData(currOptions)
  }, [innerOptions, optionKey, format, innerValue])

  const [elevatorOptions, setElevatorOptions] = useState<any>([])

  useEffect(() => {
    setElevatorOptions(options)
  }, [options])

  const pathNodes = useRef<CascaderOption[]>([])

  const levels: any[] = useMemo(() => {
    const next = []
    let end = false
    let currentOptions = options
    for (const [index, val] of innerValue.entries()) {
      const opt = currentOptions?.find((o: CascaderOption) => o.value === val)
      next.push({
        selected: val,
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
  // const actions: CascaderActions = {
  //   open: () => {
  //     setVisible(true)
  //   },
  //   close: () => {
  //     setVisible(false)
  //   },
  // }
  // useImperativeHandle(ref, () => actions)

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

  const renderTab = () => {
    console.log('selectedRegion', levels, selectedRegion)
    return (
      <div className={`${classPrefix}-selected`}>
        {selectedRegion.map((item, index) => (
          <>
            <div
              className={`${classPrefix}-selected-item`}
              key={`-${index}`}
              onClick={(index) => {
                onTabChange(item)
                // props.onTabsChange?.(Number(index))
                // setTabActiveIndex(Number(index))
              }}
            >
              {item.name}
              {/* {levels.map((pane, index) => (
                <Tabs.TabPane
                  title={pane.selected || locale.select}
                  key={index}
                >
                  <div className={classPane}>
                    {renderCascaderItem(pane, index)}
                  </div>
                </Tabs.TabPane>
              ))} */}
            </div>
            {selectedRegion.length - 1 > index ? (
              <div className={`${classPrefix}-selected-border`}>-</div>
            ) : null}
          </>
        ))}
      </div>
    )
  }

  const renderHotArea = () => {
    return (
      <>
        <div className={`${classPrefix}-title`}>热门城市</div>
        <div className={`${classPrefix}-hotlist`}>
          {hotList.map((item, index) => (
            <div className={`${classPrefix}-hotlist-item`} key={`hot-${index}`}>
              {item.name}
            </div>
          ))}
        </div>
      </>
    )
  }

  const onTabChange = (item: any) => {
    console.log('item', item, item.parent)
  }

  const onElevatorItemClick = (key: string, item: AreaInfo) => {
    console.log('onitem click', item)
    setSelectedRegion((pre) => [...pre, item])
    if (item.children?.length) {
      setElevatorOptions(item.children)
    } else {
      console.log('close popup')
    }
  }

  const renderArea = () => {
    return (
      <>
        <div className={`${classPrefix}-title`}>{addressTip}</div>
        <Elevator
          className={`${classPrefix}-elevator`}
          list={elevatorOptions}
          onItemClick={(key: string, item: any) =>
            onElevatorItemClick(key, item)
          }
          height="300px"
        />
      </>
    )
  }

  const chooseItem = async (pane: CascaderOption, levelIndex: number) => {
    if (pane.disabled) return
    console.log('chooseItem', pane, levelIndex)
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

  const renderElevatorList = () => {
    return (
      <>
        {selectedRegion.length ? renderTab() : null}
        {renderHotArea()}
        {renderArea()}
      </>
    )
  }

  return popup ? (
    <Popup
      {...popupProps}
      visible={visible}
      position="bottom"
      style={{ height: '87%' }}
      round
      closeIcon={closeIcon}
      closeable={closeable}
      closeIconPosition={closeIconPosition}
      title={props.title}
      left={props.left}
      onOverlayClick={() => setVisible(false)}
      onCloseIconClick={() => setVisible(false)}
    >
      {renderElevatorList()}
    </Popup>
  ) : (
    renderElevatorList()
  )
}

ElevatorRender.displayName = 'NutElevatorRender'
