import { getEnv } from '@tarojs/taro'

export const harmony = () => {
  return ['harmony', 'harmonyhybrid', 'jdharmony'].includes(
    getEnv().toLowerCase()
  )
}

export const web = () => {
  return ['web'].includes(getEnv().toLowerCase())
}

export const miniprogram = () => {
  return ['mini'].includes(getEnv().toLowerCase())
}

export const weapp = () => {
  return ['weapp'].includes(getEnv().toLowerCase())
}

export const jd = () => {
  return ['jd'].includes(getEnv().toLowerCase())
}
