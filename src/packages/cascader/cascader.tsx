/* eslint-disable no-nested-ternary */
import React, {
  FunctionComponent,
  useState,
  useEffect,
  CSSProperties,
} from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup'
import { Tabs } from '@/packages/tabs/tabs'
import { TabPane } from '@/packages/tabpane/tabpane'
import { CascaderItem } from './cascaderItem'
import bem from '@/utils/bem'
import { convertListToOptions } from './helper'
import {
  CascaderPane,
  CascaderOption,
  CascaderValue,
  convertConfig,
} from './types'
import Tree from './tree'

export interface CascaderProps {
  className: string
  style: CSSProperties
  visible: boolean // popup 显示状态
  options: CascaderOption[]
  value: string[]
  title: string
  textKey: string
  valueKey: string
  childrenKey: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  convertConfig: object
  closeable: boolean
  closeIconPosition: string
  closeIcon: string
  lazy: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  lazyLoad: Function
  onClose?: () => void
  change: (value: unknown, params: unknown) => void
  pathChange: (value: unknown, params: unknown) => void
}

const defaultProps = {
  className: '',
  style: {},
  visible: false,
  options: [],
  value: [],
  title: '',
  textKey: 'text',
  valueKey: 'value',
  childrenKey: 'children',
  convertConfig: {},
  closeable: false,
  closeIconPosition: 'top-right',
  closeIcon: 'close',
  lazy: false,
  lazyLoad: () => {},
  onClose: () => {},
  change: () => {},
  pathChange: () => {},
  ...Popup.defaultProps,
} as CascaderProps
export const Cascader: FunctionComponent<
  Partial<CascaderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    className,
    style,
    visible,
    options,
    value,
    title,
    textKey,
    valueKey,
    childrenKey,
    convertConfig,
    closeable,
    closeIconPosition,
    closeIcon,
    lazy,
    lazyLoad,
    onClose,
    change,
    pathChange,
  } = { ...defaultProps, ...props }

  const [tabvalue, setTabvalue] = useState('c1') as any
  const [optiosData, setOptiosData] = useState<CascaderPane[]>([])

  const isLazy = () => state.configs.lazy && Boolean(state.configs.lazyLoad)

  const [state] = useState({
    optionsData: [] as CascaderOption,
    panes: [
      {
        nodes: [] as any,
        selectedNode: [] as CascaderOption | null,
        paneKey: '',
      },
    ],
    innerValue: value as CascaderValue,
    tree: new Tree([], {}),
    tabsCursor: 0, // 选中的tab项
    initLoading: false,
    currentProcessNode: [] as CascaderOption | null,
    configs: {
      lazy,
      lazyLoad,
      valueKey,
      textKey,
      childrenKey,
      convertConfig,
    },
    lazyLoadMap: new Map(),
  })

  const b = bem('cascader')

  const classes = classNames(b(''))

  const classesPane = classNames({
    [`${b('')}-pane`]: true,
  })

  useEffect(() => {
    initData()
  })

  useEffect(() => {
    if (value !== state.innerValue) {
      state.innerValue = value as CascaderValue
    }
  }, [state, value])

  useEffect(() => {
    initData()
  }, [options])

  const initData = async () => {
    // 初始化开始处理数据
    state.lazyLoadMap.clear()
    if (convertConfig && Object.keys(convertConfig).length > 0) {
      state.optionsData = convertListToOptions(
        options as CascaderOption[],
        convertConfig as convertConfig
      )
    } else {
      state.optionsData = options
    }
    state.tree = new Tree(state.optionsData as CascaderOption[], {
      value: state.configs.valueKey,
      text: state.configs.textKey,
      children: state.configs.childrenKey,
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

    setOptiosData(state.panes)
  }
  // 处理有默认值时的数据
  const syncValue = async () => {
    const currentValue = state.innerValue
    if (currentValue === undefined || !state.tree.nodes.length) {
      return
    }

    if (currentValue.length === 0) {
      state.tabsCursor = 0
      // state.panes = [{ nodes: state.tree.nodes, selectedNode: null }];
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
              (item) => item.value === value
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

    if (needToSync.length && currentValue === value) {
      const pathNodes = state.tree.getPathNodesByValue(needToSync)
      // eslint-disable-next-line array-callback-return
      pathNodes.map((node, index) => {
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

    if (!state.configs.lazyLoad) {
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
        state.configs.lazyLoad?.(node, resolve)
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
    onClose && onClose()
  }

  const closePopup = () => {
    close()
  }

  /* type: 是否是静默模式，是的话不触发事件
  tabsCursor: tab的索引 */
  const chooseItem = async (node: CascaderOption, type: boolean) => {
    // console.log('chooseItem', node)
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
        change(optionParams, pathNodes)
        pathChange(optionParams, pathNodes)
      }
      setOptiosData(state.panes)
      close()
      return
    }
    // 如果有子节点，滑到下一个
    // if (node.children && node.children.length > 0) {
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
      setTabvalue(`c${state.tabsCursor + 1}`)
      setOptiosData(state.panes)

      if (!type) {
        const pathNodes = state.panes.map((item) => item.selectedNode)
        const optionParams = pathNodes.map((item: any) => item?.value)
        pathChange(optionParams, pathNodes)
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
    setOptiosData(state.panes)
  }

  return (
    <div className={`${classes} ${className}`} style={style}>
      <Popup
        visible={visible}
        position="bottom"
        round
        closeable={closeable}
        closeIconPosition={closeIconPosition}
        closeIcon={closeIcon}
        onClickOverlay={closePopup}
        onClickCloseIcon={closePopup}
        style={{ padding: '30px 50px' }}
      >
        <div className={b('title')}>{title}</div>
        <Tabs
          value={tabvalue}
          titleNode={() => {
            return optiosData.map((pane, index) => (
              <div
                onClick={() => {
                  setTabvalue(pane.paneKey)
                  state.tabsCursor = index
                }}
                className={`nut-tabs__titles-item ${
                  tabvalue === pane.paneKey ? 'active' : ''
                }`}
                key={pane.paneKey}
              >
                <span className="nut-tabs__titles-item__text">
                  {!state.initLoading && state.panes.length
                    ? pane?.selectedNode?.text
                      ? pane.selectedNode.text
                      : '请选择'
                    : 'Loading...'}
                </span>
                <span className="nut-tabs__titles-item__line" />
              </div>
            ))
          }}
        >
          {!state.initLoading && state.panes.length ? (
            optiosData.map((pane) => (
              <TabPane key={pane.paneKey} paneKey={pane.paneKey}>
                {console.log('pane.nodes', pane.nodes)}
                <div className={classesPane}>
                  {pane.nodes &&
                    pane.nodes.map((node: any, index: number) => (
                      <CascaderItem
                        key={index}
                        {...props}
                        data={node}
                        checked={pane.selectedNode?.value === node.value}
                        chooseItem={(node: any) => chooseItem(node, false)}
                      />
                    ))}
                </div>
              </TabPane>
            ))
          ) : (
            <TabPane>
              <div className={classesPane} />
            </TabPane>
          )}
        </Tabs>
      </Popup>
    </div>
  )
}

Cascader.defaultProps = defaultProps
Cascader.displayName = 'NutCascader'
