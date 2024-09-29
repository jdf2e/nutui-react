import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { useRtl } from '@/packages/configprovider/index'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { getRect } from '@/utils/use-client-rect'

export interface NavBarProps extends BasicComponent {
  left: React.ReactNode
  back: React.ReactNode
  right: React.ReactNode
  titleAlign: 'center' | 'left'
  fixed: boolean
  safeAreaInsetTop: boolean
  placeholder: boolean
  zIndex: number | string
  onBackClick: (e: React.MouseEvent<HTMLElement>) => void
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

  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState('50%')

  const getNodeWidth = (node: Element | null) => {
    if (node) {
      const ele = getRect(node)
      return ele.width
    }
    return 0
  }

  useEffect(() => {
    if (titleAlign === 'left') {
      return
    }
    if (!(back || left || right)) {
      setContentWidth('100%')
      return
    }
    const leftRectWidth = getNodeWidth(leftRef?.current)
    const rightRectWidth = getNodeWidth(rightRef?.current)
    const wrapperWidth = getNodeWidth(wrapperRef?.current)

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
  }, [left, right, back])

  const renderLeft = () => {
    return back || left ? (
      <div
        className={classNames({
          [`${classPrefix}-left`]: true,
          [`${classPrefix}-left-align-${titleAlign}`]: true,
          [`${classPrefix}-left-rtl`]: rtl,
        })}
        ref={leftRef}
      >
        {back && (
          <div
            className={classNames({
              [`${classPrefix}-left-back`]: true,
              [`${classPrefix}-left-back-align-${titleAlign}`]: true,
              [`${classPrefix}-left-back-children`]: left,
              [`${classPrefix}-left-back-children-rtl`]: left && rtl,
            })}
            onClick={(e) => onBackClick(e)}
          >
            {back}
          </div>
        )}
        {left}
      </div>
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
      <div
        className={classNames({
          [`${classPrefix}-title`]: true,
          [`${classPrefix}-title-align-${titleAlign}`]: true,
        })}
        style={titleStyle}
      >
        {children}
      </div>
    )
  }

  const renderRight = () => {
    return (
      <div
        className={classNames({
          [`${classPrefix}-right`]: true,
          [`${classPrefix}-right-align-${titleAlign}`]: true,
          [`${classPrefix}-right-rtl`]: rtl,
        })}
        ref={rightRef}
      >
        {right}
      </div>
    )
  }

  const renderWrapper = () => {
    return (
      <div className={cls} style={styles()} ref={wrapperRef}>
        {renderLeft()}
        {renderContent()}
        {renderRight()}
      </div>
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
        <div className={`${classPrefix}-placeholder`}>{renderWrapper()}</div>
      ) : (
        renderWrapper()
      )}
    </>
  )
}

NavBar.displayName = 'NutNavBar'
