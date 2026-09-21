import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { JoySmile } from '@nutui/icons-react'
import { ComponentDefaults } from '@/utils/typings'
import TabPane from '@/packages/tabpane'
import raf from '@/utils/raf'
import { usePropsValue } from '@/hooks/use-props-value'
import { useForceUpdate } from '@/hooks/use-force-update'
import { useRtl } from '../configprovider'
import { TabsTitle, WebTabsProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  tabStyle: {},
  activeColor: '',
  direction: 'horizontal',
  activeType: 'line',
  duration: 300,
  autoHeight: false,
} as WebTabsProps

const classPrefix = 'nut-tabs'

export const Tabs: FunctionComponent<Partial<WebTabsProps>> & {
  TabPane: typeof TabPane
} = (props) => {
  const rtl = useRtl()
  const {
    activeColor,
    tabStyle,
    direction,
    activeType,
    duration,
    align,
    title,
    children,
    onClick,
    onChange,
    className,
    autoHeight,
    value: outerValue,
    defaultValue: outerDefaultValue,
    ...rest
  } = { ...defaultProps, ...props }

  const [value, setValue] = usePropsValue<string | number>({
    value: outerValue,
    defaultValue: outerDefaultValue,
    onChange,
  })

  const navRef = useRef<HTMLDivElement>(null)

  // 卡片模式下,标题栏可横向滑动时激活卡片贴合两端边缘;不可滑动时(全部 tab 放得下)
  // 贴边端直角、留白端恢复双肩,依赖该标记切换样式
  const [isScrollable, setIsScrollable] = useState(!align)
  const measureScrollable = useCallback(() => {
    if (activeType !== 'card' || direction !== 'horizontal' || !align) return
    const nav = navRef.current
    if (!nav) return
    setIsScrollable(nav.scrollWidth - nav.clientWidth > 1)
  }, [activeType, direction, align])

  // 挂载后立即测量,避免首帧样式闪变
  useLayoutEffect(() => {
    measureScrollable()
  }, [measureScrollable])

  // 标题/内容变化后重新布局,再测一次;窗口尺寸变化时也重测
  useEffect(() => {
    raf(measureScrollable)
  }, [children, measureScrollable])
  useEffect(() => {
    const onResize = () => raf(measureScrollable)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [measureScrollable])

  const scrollDirection = (
    nav: HTMLDivElement,
    to: number,
    duration: number
  ) => {
    const from = direction === 'horizontal' ? nav.scrollLeft : nav.scrollTop
    const frames = duration === 0 ? 1 : Math.round((duration * 1000) / 16)
    let count = 0

    const animate = () => {
      if (direction === 'horizontal') nav.scrollLeft += (to - from) / frames
      else nav.scrollTop += (to - from) / frames
      if (++count < frames) raf(animate)
    }
    animate()
  }

  const scrollIntoView = (index: number, immediate?: boolean) => {
    const nav = navRef.current
    if (!nav) {
      return
    }
    const titleItems = nav.querySelectorAll<HTMLElement>(
      `.${classPrefix}-titles-item`
    )
    const title = titleItems[index]
    if (!title) {
      return
    }
    let to = 0
    if (direction === 'vertical') {
      const runTop = title.offsetTop - nav.offsetTop + 10
      to = runTop - (nav.offsetHeight - title.offsetHeight) / 2
    } else {
      to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2
    }
    scrollDirection(nav, to, immediate ? 0 : 0.3)
  }

  const getTitles = () => {
    const titles: TabsTitle[] = []
    React.Children.forEach(children, (child, idx) => {
      if (React.isValidElement(child)) {
        const { props } = child
        if (props?.title || props?.value) {
          titles.push({
            title: props.title,
            value: props.value || idx,
            disabled: props.disabled,
          })
        }
      }
    })
    return titles
  }
  const titles = useRef<TabsTitle[]>(getTitles())
  const forceUpdate = useForceUpdate()
  useEffect(() => {
    titles.current = getTitles()
    let current: string | number = ''
    titles.current.forEach((title) => {
      if (title.value === value) {
        current = value
      }
    })
    if (current !== '' && current !== value) {
      setValue(current)
    } else {
      forceUpdate()
    }
  }, [children])

  const classes = classNames(
    classPrefix,
    `${classPrefix}-${direction}`,
    className
  )
  const classesTitle = classNames(`${classPrefix}-titles`, {
    [`${classPrefix}-titles-${activeType}`]: activeType,
    [`${classPrefix}-titles-scrollable`]: true,
    [`${classPrefix}-titles-not-scrollable`]:
      activeType === 'card' && !isScrollable,
    [`${classPrefix}-titles-${align}`]: align,
  })

  const getContentStyle = () => {
    let index = titles.current.findIndex((t) => t.value === value)
    index = index < 0 ? 0 : index
    return {
      transform:
        direction === 'horizontal'
          ? `translate3d(${rtl ? '' : '-'}${index * 100}%, 0, 0)`
          : `translate3d( 0, -${index * 100}%, 0)`,
      transitionDuration: `${duration}ms`,
    }
  }
  useEffect(() => {
    let index = titles.current.findIndex((t) => t.value === value)
    index = index < 0 ? 0 : index
    setTimeout(() => {
      scrollIntoView(index)
    })
  }, [value])

  const tabChange = (item: TabsTitle) => {
    onClick && onClick(item.value)
    if (!item.disabled) {
      setValue(item.value)
    }
  }
  return (
    <div className={classes} {...rest}>
      <div className={classesTitle} style={tabStyle} ref={navRef}>
        {!!title && typeof title === 'function'
          ? title()
          : titles.current.map((item) => {
              return (
                <div
                  key={item.value}
                  onClick={() => tabChange(item)}
                  className={classNames(`${classPrefix}-titles-item`, {
                    [`nut-tabs-titles-item-active`]:
                      !item.disabled && String(item.value) === String(value),
                    [`nut-tabs-titles-item-disabled`]: item.disabled,
                    [`nut-tabs-titles-item-${align}`]: align,
                  })}
                >
                  {activeType === 'line' && (
                    <div
                      className={classNames(
                        `${classPrefix}-titles-item-line`,
                        `${classPrefix}-titles-item-line-${direction}`
                      )}
                      style={{ background: activeColor }}
                    />
                  )}
                  {activeType === 'smile' && (
                    <div className={`${classPrefix}-titles-item-smile`}>
                      <JoySmile
                        color={activeColor}
                        className={`${classPrefix}-titles-item-smile-icon`}
                      />
                    </div>
                  )}
                  <div
                    className={classNames(
                      {
                        [`${classPrefix}-ellipsis`]: direction === 'vertical',
                      },
                      `${classPrefix}-titles-item-text`
                    )}
                    style={{ color: activeColor }}
                  >
                    {item.title}
                  </div>
                </div>
              )
            })}
      </div>
      <div className={`${classPrefix}-content-wrap`}>
        <div className={`${classPrefix}-content`} style={getContentStyle()}>
          {React.Children.map(children, (child, idx) => {
            if (!React.isValidElement(child)) return null
            return React.cloneElement(child, {
              ...child.props,
              active: value === child.props.value,
              autoHeightClassName:
                autoHeight && String(value) !== String(child.props.value || idx)
                  ? 'inactive'
                  : '',
            })
          })}
        </div>
      </div>
    </div>
  )
}

Tabs.displayName = 'NutTabs'
Tabs.TabPane = TabPane
