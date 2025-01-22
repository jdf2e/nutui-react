import React, { ReactNode, useEffect, useMemo, useState } from 'react'
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
import { convertListToOptions, normalizeOptions } from '@/packages/cascader/helper'

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
  onLoad: (node: CascaderValue) => Promise<any>
  onChange: (value: CascaderValue, params: any) => void
  onPathChange: (value: CascaderValue, params: any) => void
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
  onLoad: () => {},
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
    console.log(convertListToOptions(outerOptions, format))
    if (!isEmpty(format)) {
      return convertListToOptions(outerOptions, format)
    }
    if (!isEmpty(optionKey)) {
      return normalizeOptions(outerOptions, optionKey)
    }
    return outerOptions
  }, [outerOptions, optionKey, format])

  const [value, setValue] = usePropsValue({
    value: outerValue,
    defaultValue: outerDefaultValue,
    finalValue: [],
    onChange: (value) => {
      props.onChange?.(value, true)
      props.onPathChange?.(value, true)
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

  const chooseItem = (pane: CascaderOption, levelIndex: number) => {
    if (pane.disabled) return
    const nextValue = value.slice(0, levelIndex)
    if (pane.value) {
      nextValue[levelIndex] = pane.value
    }
    setValue(nextValue)
    if (!pane.children) {
      setVisible(false)
    }
  }

  const renderCascaderItem = (item: any, levelIndex: number) => {
    return item.pane.map((pane: CascaderOption, index: number) => {
      const classes = classNames(
        {
          active: item.selected === pane.value,
          disabled: pane.disabled,
        },
        'nut-cascader-item'
      )
      return (
        <div
          className={classes}
          key={pane.value}
          onClick={() => {
            chooseItem(pane, levelIndex)
          }}
        >
          <div className="nut-cascader-item-title">{pane.text}</div>
          {/*<Loading color="#969799" className="nut-cascader-item-icon-loading" />*/}
          {item.selected === pane.value ? (
            <Checklist className={`${classPrefix}-icon-check`} />
          ) : null}
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
