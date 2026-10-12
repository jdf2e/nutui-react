import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { useRtl } from '@/packages/configprovider/index'
import { ComponentDefaults } from '@/utils/typings'
import SafeArea from '@/packages/safearea'
import { WebNavBarProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  left: '',
  right: '',
  back: '',
  subBar: '',
  fixed: false,
  safeAreaInsetTop: false,
  placeholder: false,
  zIndex: 10,
} as WebNavBarProps
export const NavBar: FunctionComponent<
  Partial<WebNavBarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const {
    right,
    left,
    title,
    subBar,
    className,
    style,
    back,
    fixed,
    safeAreaInsetTop,
    placeholder,
    zIndex,
    onBackClick,
    ...rest
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
      <div
        className={classNames({
          [`${classPrefix}-left`]: true,
          [`${classPrefix}-left-maxwidth`]: title,
          [`${classPrefix}-left-hidden`]: !left && !back,
          [`${classPrefix}-left-rtl`]: rtl,
        })}
      >
        {back ? (
          <div
            className={classNames({
              [`${classPrefix}-left-back`]: true,
              [`${classPrefix}-left-back-children`]: left,
              [`${classPrefix}-left-back-children-rtl`]: left && rtl,
            })}
            onClick={(e) => onBackClick(e)}
          >
            {back}
          </div>
        ) : null}
        {left}
      </div>
    )
  }

  const renderContent = () => {
    return (
      <div
        className={classNames({
          [`${classPrefix}-title`]: true,
          [`${classPrefix}-title-center`]: title,
          [`${classPrefix}-title-padding-left`]: !left && !back && !title,
        })}
      >
        {title || children}
      </div>
    )
  }

  const renderRight = () => {
    return (
      <div
        className={classNames({
          [`${classPrefix}-right`]: true,
          [`${classPrefix}-right-maxwidth`]: title,
          [`${classPrefix}-right-rtl`]: rtl,
        })}
      >
        {right}
      </div>
    )
  }

  const renderSubBar = () => {
    return subBar ? (
      <div className={`${classPrefix}-subbar`}>{subBar}</div>
    ) : null
  }

  const renderWrapper = () => {
    return (
      <div className={cls} style={styles()} {...rest}>
        {renderLeft()}
        {renderContent()}
        {renderRight()}
        {renderSubBar()}
      </div>
    )
  }

  const classes = classNames({
    [`${classPrefix}-fixed`]: fixed,
    [`${classPrefix}-safe-area-inset-top`]: safeAreaInsetTop,
    [`${classPrefix}-rtl`]: rtl,
  })

  const cls = classNames(classPrefix, classes, className, {
    [`${classPrefix}-title-wrapper`]: title,
    [`${classPrefix}-has-subbar`]: subBar,
  })

  return (
    <>
      {safeAreaInsetTop && <SafeArea position="top" />}
      {fixed && placeholder ? (
        <div className={`${classPrefix}-placeholder`}>{renderWrapper()}</div>
      ) : (
        renderWrapper()
      )}
    </>
  )
}

NavBar.displayName = 'NutNavBar'
