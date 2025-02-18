import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { useRtl } from '@/packages/configprovider/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import SafeArea from '@/packages/safearea/index.taro'

export interface NavBarProps extends BasicComponent {
  left: React.ReactNode
  back: React.ReactNode
  right: React.ReactNode
  title: React.ReactNode
  fixed: boolean
  safeAreaInsetTop: boolean
  placeholder: boolean
  zIndex: number | string
  onBackClick: (e: ITouchEvent) => void
  children?: React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  left: '',
  right: '',
  back: '',
  fixed: false,
  safeAreaInsetTop: false,
  placeholder: false,
  zIndex: 10,
} as NavBarProps
export const NavBar: FunctionComponent<Partial<NavBarProps>> = (props) => {
  const {
    right,
    left,
    title,
    className,
    style,
    back,
    fixed,
    safeAreaInsetTop,
    placeholder,
    zIndex,
    onBackClick,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-navbar'

  const rtl = useRtl()

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]

  const styles = () => {
    return {
      ...style,
      zIndex,
    }
  }

  const renderLeft = () => {
    return (
      <View
        className={classNames({
          [`${classPrefix}-left`]: true,
          [`${classPrefix}-left-maxwidth`]: title,
          [`${classPrefix}-left-hidden`]: !left && !back,
          [`${classPrefix}-left-rtl`]: rtl,
        })}
      >
        {back ? (
          <View
            className={classNames({
              [`${classPrefix}-left-back`]: true,
              [`${classPrefix}-left-back-children`]: left,
              [`${classPrefix}-left-back-children-rtl`]: left && rtl,
            })}
            onClick={(e) => onBackClick(e)}
          >
            {back}
          </View>
        ) : null}
        {left}
      </View>
    )
  }

  const renderContent = () => {
    return (
      <View
        className={classNames({
          [`${classPrefix}-title`]: true,
          [`${classPrefix}-title-center`]: title,
        })}
      >
        {title || children}
      </View>
    )
  }

  const renderRight = () => {
    return (
      <View
        className={classNames({
          [`${classPrefix}-right`]: true,
          [`${classPrefix}-right-maxwidth`]: title,
          [`${classPrefix}-right-rtl`]: rtl,
        })}
      >
        {right}
      </View>
    )
  }

  const renderWrapper = () => {
    return (
      <View className={cls} style={styles()}>
        {renderLeft()}
        {renderContent()}
        {renderRight()}
      </View>
    )
  }

  const classes = classNames({
    [`${classPrefix}-fixed`]: fixed,
    [`${classPrefix}-safe-area-inset-top`]: safeAreaInsetTop,
    [`${classPrefix}-rtl`]: rtl,
  })

  const cls = classNames(classPrefix, classes, className, {
    [`${classPrefix}-title-wrapper`]: title,
  })

  return (
    <>
      {safeAreaInsetTop && <SafeArea position="top" />}
      {fixed && placeholder ? (
        <View className={`${classPrefix}-placeholder`}>{renderWrapper()}</View>
      ) : (
        renderWrapper()
      )}
    </>
  )
}

NavBar.displayName = 'NutNavBar'
