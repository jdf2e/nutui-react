import React, {
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import TabbarItem from '../tabbaritem'
import TabbarContext from './context'
import { WebTabbarProps } from '@/types'
import SafeArea from '@/packages/safearea/index'
import { normalizeTabbarItems } from './utils'
import MaterialView from '../materialview'

const isDocumentDark = () =>
  typeof document !== 'undefined' &&
  document.documentElement.classList.contains('nut-theme-dark')

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: 0,
  fixed: false,
  inactiveColor: '',
  activeColor: '',
  direction: 'vertical',
  safeArea: false,
  onSwitch: () => {},
} as WebTabbarProps

export const Tabbar: FunctionComponent<Partial<WebTabbarProps>> & {
  Item: typeof TabbarItem
} = (props) => {
  const {
    children,
    defaultValue,
    value,
    fixed,
    activeColor,
    inactiveColor,
    direction,
    safeArea,
    skinBackground,
    agent,
    className,
    style,
    onSwitch,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-tabbar'
  const rootRef = useRef<HTMLDivElement>(null)
  const [themeDark, setThemeDark] = useState(isDocumentDark)
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const update = () => setThemeDark(Boolean(root.closest('.nut-theme-dark')))
    const observer = new MutationObserver(update)
    for (let node: HTMLElement | null = root; node; node = node.parentElement) {
      observer.observe(node, { attributes: true, attributeFilter: ['class'] })
    }
    update()
    return () => observer.disconnect()
  }, [])
  const items = useMemo(
    () => normalizeTabbarItems(children, TabbarItem),
    [children]
  )
  const hasAgent =
    agent !== null && agent !== undefined && typeof agent !== 'boolean'
  const hasSkin =
    skinBackground !== null &&
    skinBackground !== undefined &&
    typeof skinBackground !== 'boolean'

  const [selectIndex, setSelectIndex] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: 0,
    onChange: onSwitch,
  })

  const sizeCls = useMemo(() => {
    const size = items.length
    return size > 3
      ? ''
      : classNames({
          [`${classPrefix}-wrap-3`]: size === 3,
          [`${classPrefix}-wrap-2`]: size === 2,
          [`${classPrefix}-wrap-${direction}`]:
            size === 2 && direction !== 'vertical',
        })
  }, [items, direction])

  const itemDirection = useMemo(() => {
    const size = items.length
    return size === 2 && direction !== 'vertical' && direction
  }, [direction, items])

  const contextValue = {
    selectIndex,
    activeColor,
    inactiveColor,
    handleClick: setSelectIndex,
  }
  const renderedItems = items.map((child, index) =>
    React.cloneElement(child, {
      ...child.props,
      key: child.key ?? index,
      index,
      direction: itemDirection,
    })
  )

  const navigation = (
    <div
      className={classNames(`${classPrefix}-wrap`, sizeCls, {
        [`${classPrefix}-wrap-skin`]: hasSkin,
      })}
    >
      {hasSkin ? (
        <div className={`${classPrefix}-skin-background`} aria-hidden="true">
          {skinBackground}
        </div>
      ) : (
        <MaterialView
          scene="bottom-bar"
          darkMode={themeDark}
          className={`${classPrefix}-backdrop`}
          style={{ borderRadius: 16 }}
          aria-hidden="true"
        />
      )}
      <TabbarContext.Provider value={contextValue}>
        {renderedItems}
      </TabbarContext.Provider>
    </div>
  )

  return (
    <div
      ref={rootRef}
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-fixed`]: fixed,
          [`${classPrefix}-has-agent`]: hasAgent,
        },
        className
      )}
      style={style}
    >
      {hasAgent ? (
        <div className={`${classPrefix}-main`}>
          <div className={`${classPrefix}-agent`}>{agent}</div>
          {navigation}
        </div>
      ) : (
        navigation
      )}
      {(fixed || safeArea) && <SafeArea position="bottom" />}
    </div>
  )
}

Tabbar.displayName = 'NutTabbar'
Tabbar.Item = TabbarItem
