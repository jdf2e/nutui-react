import React, {
  isValidElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Checklist, Loading } from '@nutui/icons-react'
import classNames from 'classnames'
import Tabs from '@/packages/tabs'
import Popup, { PopupProps } from '@/packages/popup'
import { CascaderValue, CascaderOptionKey, CascaderOption } from './types'
import { ComponentDefaults } from '@/utils/typings'
import { CascaderProps } from '@/packages/cascader/cascader-origin'
import { mergeProps } from '@/utils/merge-props'
import { usePropsValue } from '@/utils/use-props-value'
import { isEmpty } from '@/utils/is-empty'
import {
  normalizeListOptions,
  normalizeOptions,
} from '@/packages/cascader/utils'

export interface CascaderPorps extends PopupProps {
  visible: boolean
  value: CascaderValue
  defaultValue: CascaderValue
  options: CascaderOption[]
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  closeable: boolean
  closeIcon: ReactNode
  closeIconPosition: string
  onLoad: (
    node: CascaderOption,
    levelIndex: number
  ) => Promise<CascaderOption[]>
  onChange: (value: CascaderValue, pathNodes: any) => void
  onPathChange: (value: CascaderValue, pathNodes: any) => void
  onTabsChange: (index: number) => void
  onClose: () => void
}

const defaultProps = {
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
} as unknown as CascaderProps

export const Cascader = (props: Partial<CascaderPorps>) => {
  const classPrefix = 'nut-cascader'
  const classPane = `${classPrefix}-pane`
  const {
    activeColor,
    activeIcon,
    popup,
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

  const [tabActiveIndex, setTabActiveIndex] = useState(0)

  const options = useMemo(() => {
    if (!isEmpty(format)) {
      return normalizeListOptions(outerOptions, format)
    }
    if (!isEmpty(optionKey)) {
      return normalizeOptions(outerOptions, optionKey)
    }
    return outerOptions
  }, [outerOptions, optionKey, format])

  const pathNodes = useRef<CascaderOption[]>([])

  const [value, setValue] = usePropsValue({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: [],
    onChange: (value) => {
      props.onChange?.(value, pathNodes.current)
      props.onPathChange?.(value, pathNodes.current)
    },
  })

  const levels: any[] = useMemo(() => {
    const next = []
    let end = false
    let currentOptions = options
    for (const val of value) {
      const opt = currentOptions.find((o) => o.value === val)
      next.push({
        selected: val,
        pane: currentOptions,
      })
      pathNodes.current.push(currentOptions)
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
      pathNodes.current.push(currentOptions)
    }
    return next
  }, [value, options])

  const [visible, setVisible] = usePropsValue({
    value: outerVisible,
    defaultValue: undefined,
    onChange: (value) => {
      if (value === false) {
        props.onClose?.()
      }
    },
  })

  useEffect(() => {
    setTabActiveIndex(levels.length - 1)
  }, [value])
  useEffect(() => {
    const max = levels.length - 1
    if (tabActiveIndex > max) {
      setTabActiveIndex(max)
    }
  }, [tabActiveIndex, levels])

  useEffect(() => {
    const load = async () => {
      const parent = {}
      try {
        await value.reduce(async (promise: Promise<any>, val, key) => {
          const pane = await onLoad({ value: val }, key)
          const parent = await promise
          parent.children = pane
          if (key === value.length - 1) {
            return Promise.resolve(parent)
          }
          if (pane) {
            const node = pane.find((p) => p.value === val)
            return Promise.resolve(node)
          }
        }, Promise.resolve(parent))

        // 如果需要处理最终结果，可以在这里使用 last
        console.log('Final result:', parent)
        options = parent.children
      } catch (error) {
        console.error('Error loading data:', error)
      }
    }

    if (lazy) load()
  }, [lazy])

  const chooseItem = async (pane: CascaderOption, levelIndex: number) => {
    if (pane.disabled) return
    const nextValue = value.slice(0, levelIndex)
    const nextPathNodes = pathNodes.current.slice(0, levelIndex)
    if (pane.value) {
      nextValue[levelIndex] = pane.value
    }
    pathNodes.current[levelIndex] = pane
    if (onLoad) {
      // 叶子节点不操作
      if (!pane.leaf) {
        const asyncOptions = await onLoad(pane, levelIndex)
        // 修改 options 触发渲染逻辑
        if (asyncOptions) pane.children = asyncOptions
      } else {
        setVisible(false)
      }
    }
    if (!pane.children && !onLoad) {
      setVisible(false)
    }
    setValue(nextValue)
  }

  const renderCascaderItem = (item: any, levelIndex: number) => {
    return item.pane.map((pane: CascaderOption, index: number) => {
      const active = item.selected === pane.value
      const classes = classNames(
        {
          active,
          disabled: pane.disabled,
        },
        'nut-cascader-item'
      )
      return (
        <div
          className={classes}
          style={{ color: active ? activeColor : '' }}
          key={pane.value}
          onClick={() => {
            chooseItem(pane, levelIndex)
          }}
        >
          <div className="nut-cascader-item-title">{pane.text}</div>
          {/*<Loading color="#969799" className="nut-cascader-item-icon-loading" />*/}
          {active &&
            (isValidElement(activeIcon) ? (
              activeIcon
            ) : (
              <Checklist className={`${classPrefix}-icon-check`} />
            ))}
        </div>
      )
    })
  }

  const renderTab = () => {
    return (
      <div className={`${classPrefix} ${props.className}`} style={props.style}>
        <Tabs
          value={tabActiveIndex}
          onChange={(index) => {
            props.onTabsChange?.(Number(index))
            setTabActiveIndex(Number(index))
          }}
        >
          {levels.map((pane, index) => (
            <Tabs.TabPane title={pane.selected || '请选择'} key={index}>
              <div className={classPane}>{renderCascaderItem(pane, index)}</div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    )
  }

  return popup ? (
    <Popup
      position="bottom"
      round
      closeIcon={closeIcon}
      closeable={closeable}
      closeIconPosition={closeIconPosition}
      title={props.title}
      left={props.left}
      visible={visible}
      onOverlayClick={() => {
        setVisible(false)
      }}
      onCloseIconClick={() => {
        setVisible(false)
      }}
    >
      {renderTab()}
    </Popup>
  ) : (
    renderTab()
  )
}

Cascader.displayName = 'NutCascader'
