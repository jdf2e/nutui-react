import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { SafeArea } from '@/packages/safearea/safearea.taro'

export interface NavBarProps extends BasicComponent {
  left: React.ReactNode
  back: React.ReactNode
  right: React.ReactNode
  titleAlign: 'center' | 'left'
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
  titleAlign: 'center',
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
    titleAlign,
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

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]

  const styles = () => {
    return {
      ...style,
      zIndex,
    }
  }

  const leftRef = useRef<any>(null)
  const rightRef = useRef<any>(null)
  const wrapperRef = useRef<any>(null)
  const [contentWidth, setContentWidth] = useState('50%')

  const getNodeWidth = async (node: Element | null) => {
    if (node) {
      const refe = await getRectByTaro(node)
      return refe.width
    }
    return 0
  }

  useEffect(() => {
    if (titleAlign === 'left') {
      return
    }
    if (!(back || left || right)) {
      setContentWidth('100%')
    }

    const init = async () => {
      const leftRectWidth = await getNodeWidth(leftRef?.current)
      const rightRectWidth = await getNodeWidth(rightRef?.current)
      const wrapperWidth = await getNodeWidth(wrapperRef?.current)
      let centerWidth = wrapperWidth / 2

      if (leftRectWidth && rightRectWidth) {
        centerWidth =
          wrapperWidth -
          (leftRectWidth > rightRectWidth
            ? leftRectWidth * 2
            : rightRectWidth * 2)
      } else {
        centerWidth = wrapperWidth - leftRectWidth * 2 - rightRectWidth * 2
      }
      setContentWidth(centerWidth.toFixed(2))
    }
    init()
  }, [left, right, back])

  const renderLeft = () => {
    return back || left ? (
      <View className={`${classPrefix}-left`} ref={leftRef}>
        {back && (
          <View
            className={`${classPrefix}-left-back`}
            onClick={(e) => onBackClick(e)}
          >
            {back}
          </View>
        )}
        {left}
      </View>
    ) : null
  }

  const renderContent = () => {
    let titleStyle = {}
    if (titleAlign === 'center') {
      const contentRealWidth = `${contentWidth}${
        /%$/i.test(contentWidth) ? '' : 'px'
      }`
      titleStyle = {
        minWidth: contentRealWidth,
        width: contentRealWidth,
      }
    }

    return (
      <View className={`${classPrefix}-title`} style={titleStyle}>
        {children}
      </View>
    )
  }

  const renderRight = () => {
    return (
      <View className={`${classPrefix}-right`} ref={rightRef}>
        {right}
      </View>
    )
  }

  const renderWrapper = () => {
    return (
      <View className={cls} style={styles()} ref={wrapperRef}>
        {renderLeft()}
        {renderContent()}
        {renderRight()}
      </View>
    )
  }

  const classes = classNames({
    [`${classPrefix}-fixed`]: fixed,
    [`${classPrefix}-title-align-${titleAlign}`]: true,
  })

  const cls = classNames(classPrefix, classes, className)

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
