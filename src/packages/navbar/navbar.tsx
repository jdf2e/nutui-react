import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface NavBarProps extends BasicComponent {
  left: React.ReactNode
  back: React.ReactNode
  right: React.ReactNode
  fixed: boolean
  safeAreaInsetTop: boolean
  placeholder: boolean
  zIndex: number | string
  className: string
  style: React.CSSProperties
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
  className: '',
  style: {},
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
  const b = bem('navbar')

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
      <div className={`${b('left')}`}>
        {back && (
          <div className={`${b('back')}`} onClick={(e) => onClickBack(e)}>
            {back}
          </div>
        )}
        {left}
      </div>
    )
  }

  const renderContent = () => {
    return <div className={`${b('title')}`}>{children}</div>
  }

  const renderRight = () => {
    return <div className={`${b('right')}`}>{right}</div>
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
    [`nut-navbar--fixed`]: fixed,
    [`nut-navbar--safe-area-inset-top`]: safeAreaInsetTop,
  })

  const cls = classNames(b(''), classes, className)

  return (
    <>
      {fixed && placeholder ? (
        <div className={`${b('')}--placeholder`}>{renderWrapper()}</div>
      ) : (
        renderWrapper()
      )}
    </>
  )
}

NavBar.defaultProps = defaultProps
NavBar.displayName = 'NutNavBar'
