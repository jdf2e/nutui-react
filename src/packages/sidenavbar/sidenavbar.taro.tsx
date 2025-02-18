import React, { FunctionComponent, useState, ReactNode, useEffect } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import Popup from '@/packages/popup/index.taro'
import { OffsetContext } from './context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
/**
 * @deprecated Use SideBar instead.
 */
export interface SideNavBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    BasicComponent {
  title: ReactNode
  visible: boolean
  width: string
  indent: number
  position: 'left' | 'right'
  onClose: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'left',
  width: '80%',
} as SideNavBarProps
export const SideNavBar: FunctionComponent<Partial<SideNavBarProps>> = (
  props
) => {
  useEffect(() => {
    console.warn(
      'Warning: SideNavBar is deprecated and will be removed in future versions. Please use NewComponent SideBar instead.'
    )
  }, [])
  const classPrefix = 'nut-sidenavbar'
  const {
    title,
    visible,
    width,
    position,
    children,
    className,
    onClose,
    indent,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const innerIndent = indent ? Number(indent) : 20
  const [sidenavbarShow, setSidenavbarShow] = useState(true)
  const handleClick = () => {
    setSidenavbarShow(!sidenavbarShow)
  }
  return (
    <Popup
      visible={visible}
      style={{ width, height: '100%' }}
      position={position}
      onClose={onClose}
    >
      <div className={classNames(classPrefix, className)} {...rest}>
        <View className={`${classPrefix}-content`}>
          <View
            className={`${classPrefix}-list ${
              sidenavbarShow ? 'sidenavbar-show' : 'sidenavbar-hide'
            }`}
            onClick={handleClick}
          >
            <View
              className={`${classPrefix}-title ${classPrefix}-border-bt`}
              style={{ paddingLeft: `${innerIndent}px` }}
            >
              {title}
              <i
                className={`arrow-icon ${
                  sidenavbarShow ? 'arrow-up' : 'arrow-down'
                }`}
              />
            </View>
            <OffsetContext.Provider value={innerIndent}>
              <View className={`${classPrefix}-content`}>{children}</View>
            </OffsetContext.Provider>
          </View>
        </View>
      </div>
    </Popup>
  )
}

SideNavBar.displayName = 'NutSideNavBar'
