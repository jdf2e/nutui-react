import React from 'react'

/**
 * TransitionGroup 上下文，用于管理过渡组中的挂载行为和状态协调
 */
interface TransitionGroupContextValue {
  isMounting?: boolean
  // 根据实际使用场景添加其他属性
}

export default React.createContext<TransitionGroupContextValue | null>(null)
