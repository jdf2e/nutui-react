import Taro from '@tarojs/taro'

export const harmonyAndRn = () => {
  return ['RN', 'HARMONY', 'HARMONYHYBRID'].includes(Taro.getEnv())
}
export const harmony = () => {
  return ['HARMONY', 'HARMONYHYBRID'].includes(Taro.getEnv())
}
export const rn = () => {
  return ['RN'].includes(Taro.getEnv())
}
