import React, { FunctionComponent } from 'react'
import classNames from 'classnames'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface NavBarProps extends BasicComponent {
  left: React.ReactNode
  back: React.ReactNode
  right: React.ReactNode
  fixed: boolean
  safeAreaInsetTop: boolean
  placeholder: boolean
  zIndex: number | string
  onClickBack: (e: React.MouseEvent<HTMLElement>) => void
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
    className,
    style,
    back,
    fixed,
    safeAreaInsetTop,
    placeholder,
    zIndex,
    onClickBack,
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

  const renderLeft = () => {
    return (
      <div className={`${classPrefix}__left`}>
        {back && (
          <div
            className={`${classPrefix}__left__back`}
            onClick={(e) => onClickBack(e)}
          >
            {back}
          </div>
        )}
        {left}
      </div>
    )
  }

  const renderContent = () => {
    return <div className={`${classPrefix}__title`}>{children}</div>
  }

  const renderRight = () => {
    return <div className={`${classPrefix}__right`}>{right}</div>
  }

  const renderWrapper = () => {
    return (
      <div className={cls} style={styles()}>
        {renderLeft()}
        {renderContent()}
        {renderRight()}
      </div>
    )
  }

  const classes = classNames({
    [`${classPrefix}--fixed`]: fixed,
    [`${classPrefix}--safe-area-inset-top`]: safeAreaInsetTop,
  })

  const cls = classNames(classPrefix, classes, className)

  return (
    <>
      {fixed && placeholder ? (
        <div className={`${classPrefix}--placeholder`}>{renderWrapper()}</div>
      ) : (
        renderWrapper()
      )}
    </>
  )
}

NavBar.defaultProps = defaultProps
NavBar.displayName = 'NutNavBar'
