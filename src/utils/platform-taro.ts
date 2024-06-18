import Taro from '@tarojs/taro'

export const harmonyAndRn = () => {
  return ['rn', 'jdrn', 'harmony', 'jdharmony', 'harmonyhybrid'].includes(
    Taro.getEnv().toLowerCase()
  )
}
export const harmony = () => {
  return ['harmony', 'harmonyhybrid', 'jdharmony'].includes(
    Taro.getEnv().toLowerCase()
  )
}
export const rn = () => {
  return ['rn', 'jdrn'].includes(Taro.getEnv().toLowerCase())
}
export const web = () => {
  return ['web'].includes(Taro.getEnv().toLowerCase())
}
