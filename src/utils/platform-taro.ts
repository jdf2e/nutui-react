import Taro from '@tarojs/taro'

export const hommaryAndRn = () => {
  return [
    Taro.ENV_TYPE.RN,
    Taro.ENV_TYPE.HARMONYHYBRID,
    Taro.ENV_TYPE.HARMONY,
  ].includes(Taro.getEnv())
}
