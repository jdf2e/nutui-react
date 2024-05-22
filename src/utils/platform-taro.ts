import Taro from '@tarojs/taro'

export const hommaryAndRn = () => {
  return ['RN', 'HARMONY', 'HARMONYHYBRID'].includes(Taro.getEnv())
}
