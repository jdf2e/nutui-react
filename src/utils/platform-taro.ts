import Taro from '@tarojs/taro'

export const harmony = () => {
  return ['harmony', 'harmonyhybrid', 'jdharmony'].includes(
    Taro.getEnv().toLowerCase()
  )
}
export const web = () => {
  return ['web'].includes(Taro.getEnv().toLowerCase())
}

export const miniprogram = () => {
  return ['mini'].includes(Taro.getEnv().toLowerCase())
}
