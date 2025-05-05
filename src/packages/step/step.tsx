import React, {
  FunctionComponent,
  useContext,
  useMemo,
  useCallback,
} from 'react'
import classNames from 'classnames'
import { DataContext } from '@/packages/steps/context'
import { ComponentDefaults } from '@/utils/typings'
import { StepStatus, WebStepProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
  value: 0,
  icon: null,
} as WebStepProps

export const Step: FunctionComponent<
  Partial<WebStepProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const {
    type,
    children,
    title,
    description,
    value,
    icon,
    className,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }

  const parent: any = useContext(DataContext)
  const {
    type: parentType,
    value: parentValue,
    status,
    icon: parentIcon,
    onStepClick,
  } = parent.propSteps

  const currentStatus = useMemo<StepStatus>(() => {
    if (['default', 'business'].includes(status)) {
      return status
    }
    if (value < +parentValue) return 'finish'
    return value === +parentValue ? 'process' : 'wait'
  }, [value, parentValue])

  const handleClickStep = useCallback(() => {
    onStepClick?.(value)
  }, [onStepClick, value])

  const classPrefix = `nut-step`

  // className计算
  const classes = useMemo(
    () =>
      classNames(
        classPrefix,
        {
          [`${classPrefix}-${currentStatus}`]: true,
          [`${classPrefix}-${type || parentType}`]: true,
          [`${classPrefix}-special`]: description,
        },
        className
      ),
    [currentStatus, type, className]
  )

  // 头部渲染
  const renderHeadType = useMemo(() => {
    switch (type || parentType) {
      case 'text':
        return <span className={`${classPrefix}-head-text`}>{value}</span>
      case 'dot':
        return <span className={`${classPrefix}-head-dot`} />
      case 'icon':
        return (
          <span className={`${classPrefix}-head-icon`}>
            {icon || parentIcon}
          </span>
        )
      default:
        return null
    }
  }, [type, value, icon])

  // 内容渲染
  const renderContent = useMemo(() => {
    if (!title && !description) return null

    return (
      <div className={`${classPrefix}-main`}>
        {title && <span className={`${classPrefix}-title`}>{title}</span>}
        {description && (
          <span className={`${classPrefix}-description`}>{description}</span>
        )}
      </div>
    )
  }, [title, description])

  return (
    <div className={classes} {...restProps} onClick={handleClickStep}>
      <div className={`${classPrefix}-head`}>
        <div className={`${classPrefix}-head-${type || parentType}-wrap`}>
          {renderHeadType}
        </div>
      </div>
      <div className={`${classPrefix}-line`}>
        <div className={`${classPrefix}-line-inner`} />
      </div>
      {renderContent}
    </div>
  )
}

Step.displayName = 'NutStep'
