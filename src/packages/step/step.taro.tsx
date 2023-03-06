import React, { FunctionComponent, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { DataContext } from '@/packages/steps/UserContext'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface StepProps extends BasicComponent {
  title: string
  content: string
  activeIndex: number
  icon: ReactNode
  iconColor: string
  size: string
  className: string
  style: React.CSSProperties
  renderContent: () => React.ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
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
    parent.propSteps?.onClickStep && parent.propSteps?.onClickStep(activeIndex)
    parent.propSteps?.clickStep && parent.propSteps?.clickStep(activeIndex)
  }

  const b = bem('step')
  const classes = classNames(
    {
      [`${b('')}-${getCurrentStatus()}`]: true,
    },
    className,
    b('')
  )

  const renderIconClass = () => {
    if (!dot && icon) {
      return 'nut-step-icon is-icon'
    }
    if (!dot && !icon) {
      return 'nut-step-icon is-text'
    }
    return 'nut-step-icon'
  }
  return (
    <div className={classes} {...restProps} onClick={handleClickStep}>
      <div className="nut-step-head">
        <div className="nut-step-line" />
        <div className={renderIconClass()}>
          {React.isValidElement(icon)
            ? React.cloneElement<any>(icon, { size, color: iconColor })
            : !dot && <span className="nut-step-inner">{activeIndex}</span>}
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
