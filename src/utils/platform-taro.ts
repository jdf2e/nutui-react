import Taro from '@tarojs/taro'

export const harmonyAndRn = () => {
  return ['RN', 'HARMONY', 'HARMONYHYBRID'].includes(Taro.getEnv())
}
