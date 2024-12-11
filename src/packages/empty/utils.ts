import { EmptyAction } from './types'

export const getButtonType = (actions: Array<EmptyAction>, index: number) => {
  const action = actions[index]
  if (!actions || actions.length === 0) return 'default'
  if (action.type) return action.type
  actions.length > 1 && index === 0 ? 'default' : 'primary'
}
