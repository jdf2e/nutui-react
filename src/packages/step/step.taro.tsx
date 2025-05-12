import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useMemo,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { DataContext } from '@/packages/steps/context'
import { ComponentDefaults } from '@/utils/typings'
import { StepStatus, TaroStepProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  description: '',
  value: 0,
  icon: null,
} as TaroStepProps
export const Step: FunctionComponent<
  Partial<TaroStepProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const { type, title, description, value, icon, className, style } = {
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
  }, [value, parentValue, status])

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
    [currentStatus, type, className, description, classPrefix]
  )

  // 头部渲染
  const renderHeadType = useMemo(() => {
    switch (type || parentType) {
      case 'text':
        return <View className={`${classPrefix}-head-text`}>{value}</View>
      case 'dot':
        return <View className={`${classPrefix}-head-dot`} />
      case 'icon':
        return (
          <View className={`${classPrefix}-head-icon`}>
            {icon || parentIcon}
          </View>
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
        {title && <View className={`${classPrefix}-title`}>{title}</View>}
        {description && (
          <View className={`${classPrefix}-description`}>{description}</View>
        )}
      </div>
    )
  }, [title, description])

  return (
    <div className={classes} style={style} onClick={handleClickStep}>
      <View className={`${classPrefix}-head`}>
        <View className={`${classPrefix}-head-${type || parentType}-wrap`}>
          {renderHeadType}
        </View>
      </View>
      <View className={`${classPrefix}-line`}>
        <View className={`${classPrefix}-line-inner`} />
      </View>
      {renderContent}
    </div>
  )
}

Step.displayName = 'NutStep'
