import React, { FunctionComponent, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { DataContext } from '@/packages/steps/context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface StepProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  value: number
  icon: ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
  value: 0,
  icon: null,
} as StepProps
export const Step: FunctionComponent<
  Partial<StepProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const { children, title, description, value, icon, className, ...restProps } =
    {
      ...defaultProps,
      ...props,
    }
  const parent: any = useContext(DataContext)

  const dot = parent.propSteps.dot
  const getCurrentStatus = () => {
    const index = value
    if (index < +parent.propSteps.value) return 'finish'
    return index === +parent.propSteps.value ? 'process' : 'wait'
  }
  const handleClickStep = () => {
    parent.propSteps?.onStepClick && parent.propSteps?.onStepClick(value)
  }

  const classPrefix = `nut-step`
  const classes = classNames(
    classPrefix,
    {
      [`${classPrefix}-${getCurrentStatus()}`]: true,
    },
    className
  )

  const renderIconClass = () => {
    if (icon) {
      return `${classPrefix}-icon is-icon`
    }
    if (!dot && !icon) {
      return `${classPrefix}-icon is-text`
    }
    return `${classPrefix}-icon`
  }
  return (
    <div className={classes} {...restProps} onClick={handleClickStep}>
      <div className="nut-step-head">
        <div className="nut-step-line" />
        <div className={renderIconClass()}>
          {icon || (!dot && <span className="nut-step-inner">{value}</span>)}
        </div>
      </div>
      {(title || description) && (
        <div className="nut-step-main">
          <span className="nut-step-title">{title}</span>
          {description && (
            <span className="nut-step-description">{description}</span>
          )}
        </div>
      )}
    </div>
  )
}

Step.displayName = 'NutStep'
