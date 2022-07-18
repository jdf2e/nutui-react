import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { DataContext } from '@/packages/steps/UserContext'
import bem from '@/utils/bem'
import Icon from '@/packages/icon'

export interface StepProps {
  title: string
  content: string
  activeIndex: number
  icon: string
  iconColor: string
  size: string
  className: string
  style: React.CSSProperties
  renderContent: () => React.ReactNode
}
const defaultProps = {
  title: '',
  content: '',
  activeIndex: 0,
  icon: '',
  iconColor: '',
  size: '12px',
} as StepProps
export const Step: FunctionComponent<
  Partial<StepProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    title,
    content,
    activeIndex,
    icon,
    iconColor,
    size,
    className,
    renderContent,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const parent: any = useContext(DataContext)

  const dot = parent.propSteps.progressDot
  const getCurrentStatus = () => {
    const index = activeIndex
    if (index < +parent.propSteps.current) return 'finish'
    return index === +parent.propSteps.current ? 'process' : 'wait'
  }
  const handleClickStep = () => {
    parent.propSteps?.clickStep(activeIndex)
  }

  const b = bem('step')
  const classes = classNames(
    {
      [`${b('')}-${getCurrentStatus()}`]: true,
    },
    className,
    b('')
  )
  return (
    <div className={classes} {...restProps} onClick={handleClickStep}>
      <div className="nut-step-head">
        <div className="nut-step-line" />
        <div
          className={`nut-step-icon ${
            !dot ? (icon ? 'is-icon' : 'is-text') : ''
          }`}
        >
          {icon ? (
            <Icon
              className="nut-step-icon-inner"
              color={iconColor}
              name={icon}
              size={size}
            />
          ) : dot ? (
            <span />
          ) : (
            <span className="nut-step-inner">{activeIndex}</span>
          )}
        </div>
      </div>
      <div className="nut-step-main">
        <span className="nut-step-title">{title}</span>
        {content && <span className="nut-step-content">{content}</span>}
        {renderContent && (
          <span className="nut-step-content">{renderContent()}</span>
        )}
      </div>
    </div>
  )
}

Step.defaultProps = defaultProps
Step.displayName = 'NutStep'
