import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { useRtl } from '@/packages/configprovider/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

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
    setTimeout(() => {
      init()
    }, 0)
  }, [left, right, back])

  const renderLeft = () => {
    return back || left ? (
      <View
        className={classNames({
          [`${classPrefix}-left`]: true,
          [`${classPrefix}-left-align-${titleAlign}`]: true,
          [`${classPrefix}-left-rtl`]: rtl,
        })}
        ref={leftRef}
      >
        {back && (
          <View
            className={classNames({
              [`${classPrefix}-left-back`]: true,
              [`${classPrefix}-left-back-align-${titleAlign}`]: true,
              [`${classPrefix}-left-back-children`]: left,
              [`${classPrefix}-left-back-children-rtl`]: left && rtl,
            })}
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
      const width = harmonyAndRn()
        ? pxTransform(Number(contentWidth))
        : `${contentWidth}px`
      const contentRealWidth = /%$/i.test(contentWidth) ? contentWidth : width
      titleStyle = {
        width: contentRealWidth,
      }
    }

    return (
      <View
        className={classNames({
          [`${classPrefix}-title`]: true,
          [`${classPrefix}-title-align-${titleAlign}`]: true,
        })}
        style={titleStyle}
      >
        {children}
      </View>
    )
  }

  const renderRight = () => {
    return (
      <View
        className={classNames({
          [`${classPrefix}-right`]: true,
          [`${classPrefix}-right-align-${titleAlign}`]: true,
          [`${classPrefix}-right-rtl`]: rtl,
        })}
        ref={rightRef}
      >
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
    [`${classPrefix}-safe-area-inset-top`]: safeAreaInsetTop,
    [`${classPrefix}-align-${titleAlign}`]: true,
    [`${classPrefix}-rtl`]: rtl,
  })

  const cls = classNames(classPrefix, classes, className)

  return (
    <>
      {fixed && placeholder ? (
        <View className={`${classPrefix}-placeholder`}>{renderWrapper()}</View>
      ) : (
        renderWrapper()
      )}
    </>
  )
}

NavBar.displayName = 'NutNavBar'
