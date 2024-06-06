import Taro, { pxTransform as transform } from '@tarojs/taro'

export default function pxTransform(value: number) {
  const isHarmony = [
    Taro.ENV_TYPE.HARMONY,
    Taro.ENV_TYPE.HARMONYHYBRID,
    // @ts-ignore
  ].includes(Taro.getEnv())

  if (isHarmony) return transform(value)
  return value
}
