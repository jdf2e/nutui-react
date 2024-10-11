import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  isValidElement,
  useState,
  useEffect,
  ReactNode,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import { Loading, Checklist } from '@nutui/icons-react-taro'
import { ScrollView } from '@tarojs/components'
import { Popup, PopupProps } from '@/packages/popup/popup.taro'
import { Tabs } from '@/packages/tabs/tabs.taro'
import { convertListToOptions } from './helper'
import {
  CascaderPane,
  CascaderOption,
  CascaderValue,
  CascaderOptionKey,
  CascaderFormat,
} from './types'
import Tree from './tree'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

export interface CascaderProps
  extends Pick<
    PopupProps,
    | 'className'
    | 'style'
    | 'closeIcon'
    | 'closeable'
    | 'title'
    | 'left'
    | 'closeIconPosition'
    | 'onClose'
  > {
  popup: boolean
  popupProps: Partial<
    Omit<
      PopupProps,
      | 'closeIcon'
      | 'closeable'
      | 'title'
      | 'left'
      | 'closeIconPosition'
      | 'onClose'
    >
  >
  visible: boolean // popup visible
  activeColor: string
  activeIcon: string
  options: CascaderOption[]
  value?: CascaderValue
  defaultValue?: CascaderValue
  optionKey: CascaderOptionKey
  format: Record<string, string | number | null>
  closeable: boolean
  closeIconPosition: string
  closeIcon: ReactNode
  lazy: boolean
  onLoad: (node: any, resolve: any) => void
  onChange: (value: CascaderValue, params?: any) => void
  onPathChange: (value: CascaderValue, params: any) => void
}

export type CascaderActions = {
  open: () => void
  close: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  activeColor: '',
  activeIcon: 'checklist',
  popup: true,
  options: [],
  optionKey: { textKey: 'text', valueKey: 'value', childrenKey: 'children' },
  format: {},
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  lazy: false,
  onLoad: () => {},
  onClose: () => {},
  onChange: () => {},
  onPathChange: () => {},
} as unknown as CascaderProps
const InternalCascader: ForwardRefRenderFunction<
  unknown,
  PropsWithChildren<Partial<CascaderProps>>
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    className,
    style,
    activeColor,
    activeIcon,
    popup,
    popupProps = {},
    visible,
    options,
    value,
    defaultValue,
    optionKey,
    format,
    closeable,
    closeIconPosition,
    closeIcon,
    lazy,
    title,
    left,
    onLoad,
    onClose,
    onChange,
    onPathChange,
  } = { ...defaultProps, ...props }

  const [tabvalue, setTabvalue] = useState('c1')
  const [optionsData, setOptionsData] = useState<CascaderPane[]>([])
  const isLazy = () => state.configs.lazy && Boolean(state.configs.onLoad)

  const [innerValue, setInnerValue] = usePropsValue<CascaderValue>({
    value,
    defaultValue,
    finalValue: defaultValue,
  })
  const [innerVisible, setInnerVisible] = usePropsValue<boolean>({
    value: visible,
    defaultValue: undefined,
    finalValue: false,
  })
  const actions: CascaderActions = {
    open: () => {
      setInnerVisible(true)
    },
    close: () => {
      setInnerVisible(false)
    },
  }
  useImperativeHandle(ref, () => actions)

  const [state] = useState({
    optionsData: [] as any,
    panes: [
      {
        nodes: [] as any,
        selectedNode: [] as CascaderOption | null,
        paneKey: '',
      },
    ],
    tree: new Tree([], {}),
    tabsCursor: 0, // 选中的tab项
    initLoading: false,
    currentProcessNode: [] as CascaderOption | null,
    configs: {
      lazy,
      onLoad,
      optionKey,
      format,
    },
    lazyLoadMap: new Map(),
  })

  const classPrefix = classNames(`nut-cascader`)
  const classesPane = classNames({
    [`${classPrefix}-pane`]: true,
  })

  useEffect(() => {
    initData()
  }, [options, format])

  useEffect(() => {
    syncValue()
  }, [value])

  const initData = async () => {
    // 初始化开始处理数据
    state.lazyLoadMap.clear()
    if (format && Object.keys(format).length > 0) {
      state.optionsData = convertListToOptions(
        options as CascaderOption[],
        format as CascaderFormat
      )
    } else {
      state.optionsData = options
    }
    state.tree = new Tree(state.optionsData as CascaderOption[], {
      value: state.configs.optionKey.valueKey,
      text: state.configs.optionKey.textKey,
      children: state.configs.optionKey.childrenKey,
    })
    if (isLazy() && !state.tree.nodes.length) {
      await invokeLazyLoad({
        root: true,
        loading: true,
        text: '',
        value: '',
      })
    }
    state.panes = [
      {
        nodes: state.tree.nodes,
        selectedNode: null,
        paneKey: 'c1',
      },
    ]
    syncValue()
    setOptionsData(state.panes)
  }
  // 处理有默认值时的数据
  const syncValue = async () => {
    const currentValue = innerValue

    if (
      currentValue === undefined ||
      ![defaultValue, value].includes(currentValue) ||
      !state.tree.nodes.length
    ) {
      return
    }

    if (currentValue.length === 0) {
      state.tabsCursor = 0
      return
    }

    let needToSync = currentValue

    if (isLazy() && Array.isArray(currentValue) && currentValue.length) {
      needToSync = []
      const parent: any = state.tree.nodes.find(
        (node) => node.value === currentValue[0]
      )

      if (parent) {
        needToSync = [parent.value]
        state.initLoading = true

        const last = await currentValue
          .slice(1)
          .reduce(async (p: Promise<CascaderOption | void>, value) => {
            const parent = await p
            await invokeLazyLoad(parent)
            const node: any = parent?.children?.find(
              (item: any) => item.value === value
            )
            if (node) {
              needToSync.push(value)
            }
            return Promise.resolve(node)
          }, Promise.resolve(parent))
        await invokeLazyLoad(last)
        state.initLoading = false
      }
    }

    if (needToSync.length && [defaultValue, value].includes(currentValue)) {
      const pathNodes = state.tree.getPathNodesByValue(needToSync)
      pathNodes.forEach((node, index) => {
        state.tabsCursor = index
        // 当有默认值时，不触发 chooseItem 里的 emit 事件
        chooseItem(node, true)
      })
    }
  }

  const invokeLazyLoad = async (node?: CascaderOption | void) => {
    if (!node) {
      return
    }

    if (!state.configs.onLoad) {
      node.leaf = true
      return
    }

    if (
      state.tree.isLeaf(node, isLazy()) ||
      state.tree.hasChildren(node, isLazy())
    ) {
      return
    }

    node.loading = true

    const parent = node.root ? null : node
    let lazyLoadPromise = state.lazyLoadMap.get(node)

    if (!lazyLoadPromise) {
      lazyLoadPromise = new Promise((resolve) => {
        // 外部必须resolve
        state.configs.onLoad?.(node, resolve)
      })
      state.lazyLoadMap.set(node, lazyLoadPromise)
    }

    const nodes: CascaderOption[] | void = await lazyLoadPromise

    if (Array.isArray(nodes) && nodes.length > 0) {
      state.tree.updateChildren(nodes, parent)
    } else {
      // 如果加载完成后没有提供子节点，作为叶子节点处理
      node.leaf = true
    }
    node.loading = false
    state.lazyLoadMap.delete(node)
  }

  const close = () => {
    setInnerVisible(false)
    onClose && onClose()
  }

  const closePopup = () => {
    close()
  }

  /* type: 是否是静默模式，是的话不触发事件
  tabsCursor: tab的索引 */
  const chooseItem = async (node: CascaderOption, type: boolean) => {
    if ((!type && node.disabled) || !state.panes[state.tabsCursor]) {
      return
    }
    // 如果没有子节点
    if (state.tree.isLeaf(node, isLazy())) {
      node.leaf = true
      state.panes[state.tabsCursor].selectedNode = node
      state.panes = state.panes.slice(0, (node.level as number) + 1)
      if (!type) {
        const pathNodes = state.panes.map((item) => item.selectedNode)
        const optionParams = pathNodes.map((item: any) => item.value)
        onChange(optionParams, pathNodes)
        onPathChange?.(optionParams, pathNodes)
        setInnerValue(optionParams)
      }
      setOptionsData(state.panes)
      close()
      return
    }
    // 如果有子节点，滑到下一个
    if (state.tree.hasChildren(node, isLazy())) {
      const level = (node.level as number) + 1

      state.panes[state.tabsCursor].selectedNode = node
      state.panes = state.panes.slice(0, level)
      state.tabsCursor = level
      state.panes.push({
        nodes: node.children || [],
        selectedNode: null,
        paneKey: `c${state.tabsCursor + 1}`,
      })
      setOptionsData(state.panes)
      setTabvalue(`c${state.tabsCursor + 1}`)

      if (!type) {
        const pathNodes = state.panes.map((item) => item.selectedNode)
        const optionParams = pathNodes.map((item: any) => item?.value)
        onPathChange?.(optionParams, pathNodes)
      }
      return
    }
    state.currentProcessNode = node
    if (node.loading) {
      return
    }

    await invokeLazyLoad(node)
    if (state.currentProcessNode === node) {
      state.panes[state.tabsCursor].selectedNode = node
      chooseItem(node, type)
    }
    setOptionsData(state.panes)
  }

  const renderItem = (pane: any, node: any, index: number) => {
    const classPrefix2 = 'nut-cascader-item'
    const checked = pane.selectedNode?.value === node.value

    const classes = classNames(
      {
        active: checked,
        disabled: node.disabled,
      },
      classPrefix2
    )

    const classesTitle = classNames({
      [`${classPrefix2}-title`]: true,
    })

    const renderIcon = () => {
      if (checked) {
        if (isValidElement(activeIcon)) {
          return activeIcon
        }
        return (
          <Checklist
            className={`${checked ? `${classPrefix}-icon-check` : ''}`}
          />
        )
      }
      return null
    }

    return (
      <div
        style={{ color: checked ? activeColor : '' }}
        className={classes}
        key={index}
        onClick={() => {
          chooseItem(node, false)
        }}
      >
        <div className={classesTitle}>{node.text}</div>
        {node.loading ? (
          <Loading color="#969799" className="nut-cascader-item-icon-loading" />
        ) : (
          renderIcon()
        )}
      </div>
    )
  }

  const renderTabs = () => {
    return (
      <div className={`${classPrefix} ${className}`} style={style}>
        <Tabs
          value={tabvalue}
          title={() => {
            return optionsData.map((pane, index) => (
              <div
                onClick={() => {
                  setTabvalue(pane.paneKey)
                  state.tabsCursor = index
                }}
                className={`nut-tabs-titles-item ${
                  tabvalue === pane.paneKey ? 'nut-tabs-titles-item-active' : ''
                }`}
                key={pane.paneKey}
              >
                <span className="nut-tabs-titles-item-text">
                  {!state.initLoading &&
                    state.panes.length &&
                    pane?.selectedNode?.text}
                  {!state.initLoading &&
                    state.panes.length &&
                    !pane?.selectedNode?.text &&
                    `${locale.select}`}
                  {!(!state.initLoading && state.panes.length) && 'Loading...'}
                </span>
                <span className="nut-tabs-titles-item-line" />
              </div>
            ))
          }}
        >
          {!state.initLoading && state.panes.length ? (
            optionsData.map((pane) => (
              <Tabs.TabPane key={pane.paneKey} value={pane.paneKey}>
                <ScrollView className={classesPane} scrollY>
                  {pane.nodes?.map((node: any, index: number) =>
                    renderItem(pane, node, index)
                  )}
                </ScrollView>
              </Tabs.TabPane>
            ))
          ) : (
            <Tabs.TabPane>
              <div className={classesPane} />
            </Tabs.TabPane>
          )}
        </Tabs>
      </div>
    )
  }

  return (
    <>
      {popup ? (
        <Popup
          {...popupProps}
          visible={innerVisible}
          position="bottom"
          style={{ overflowY: 'hidden' }}
          round
          closeIcon={closeIcon}
          closeable={closeable}
          closeIconPosition={closeIconPosition}
          title={popup && (title as ReactNode)}
          left={left}
          // todo 只关闭，不处理逻辑。和popup的逻辑不一致。关闭时需要增加是否要处理回调
          onOverlayClick={closePopup}
          onCloseIconClick={closePopup}
        >
          {renderTabs()}
        </Popup>
      ) : (
        renderTabs()
      )}
    </>
  )
}

export const Cascader = React.forwardRef(InternalCascader)

Cascader.displayName = 'NutCascader'
