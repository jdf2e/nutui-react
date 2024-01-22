import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import useNodeBoundingRect from './hooks/useNodeBoundingRect'

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

  const children = Array.isArray(props.children)
    ? props.children
    : [props.children]

  const styles = () => {
    return {
      ...style,
      zIndex,
    }
  }

  const [leftRect, leftActions, cleanLeftObserver] = useNodeBoundingRect()
  const [rightRect, rightActions, cleanRightObserver] = useNodeBoundingRect()
  const [wrapperRect, wrapperActions, cleanWrapperObserver] =
    useNodeBoundingRect()
  const [contentWidth, setContentWidth] = useState('50%')

  useEffect(() => {
    if (!(back || left || right)) {
      setContentWidth('100%')
      return
    }
    if (!(leftRect || rightRect)) return
    const leftRectWidth = leftRect?.width || 0
    const rightRectWidth = rightRect?.width || 0
    const bodyWidth = wrapperRect?.width || 0
    let centerWidth = bodyWidth / 2
    if (titleAlign === 'left') {
      centerWidth = bodyWidth - leftRectWidth - rightRectWidth
    } else {
      if (leftRect && rightRect) {
        centerWidth =
          bodyWidth -
          (leftRectWidth > rightRectWidth
            ? leftRectWidth * 2
            : rightRectWidth * 2)
      } else {
        centerWidth = bodyWidth - leftRectWidth * 2 - rightRectWidth * 2
      }
      // 左右两边的padding
      centerWidth -= 14 * 4
    }

    setContentWidth(centerWidth.toFixed(2))
    return () => {
      cleanLeftObserver()
      cleanRightObserver()
      cleanWrapperObserver()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftRect, rightRect])

  const renderLeft = () => {
    return back || left ? (
      <div className={`${classPrefix}-left`} ref={(el) => leftActions(el)}>
        {back && (
          <div
            className={`${classPrefix}-left-back`}
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
    const contentRealWidth = `${contentWidth}${
      /%$/i.test(contentWidth) ? '' : 'px'
    }`
    return (
      <div
        className={`${classPrefix}-title`}
        style={{
          minWidth: contentRealWidth,
          maxWidth: contentRealWidth,
          width: contentRealWidth,
        }}
      >
        {children}
      </div>
    )
  }

  const renderRight = () => {
    return (
      <div className={`${classPrefix}-right`} ref={(el) => rightActions(el)}>
        {right}
      </div>
    )
  }

  const renderWrapper = () => {
    return (
      <div className={cls} style={styles()} ref={(el) => wrapperActions(el)}>
        {renderLeft()}
        {renderContent()}
        {renderRight()}
      </div>
    )
  }

  const classes = classNames({
    [`${classPrefix}-fixed`]: fixed,
    [`${classPrefix}-safe-area-inset-top`]: safeAreaInsetTop,
    [`${classPrefix}-title-align-${titleAlign}`]: true,
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

NavBar.defaultProps = defaultProps
NavBar.displayName = 'NutNavBar'
