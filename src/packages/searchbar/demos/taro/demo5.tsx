import React from 'react'
import { SearchBar } from '@nutui/nutui-react-taro'
import {
  ArrowLeft,
  Photograph,
  More,
  Close,
  Star,
} from '@nutui/icons-react-taro'
import { Icon } from '@tarojs/components'
import { harmony } from '@/utils/platform-taro'

const Demo5 = () => {
  // TODO:harmony 下图标为了适配展示使用，待icon适配之后统一移除
  const isHarmony = harmony()
  return (
    <>
      <SearchBar
        left={
          isHarmony ? (
            <>
              <Icon type="waiting" size={20} />
              <Icon type="cancel" size={20} color="#c2c4cc" />
            </>
          ) : (
            <>
              <ArrowLeft size={20} />
              <Close size={20} />
            </>
          )
        }
        right={
          isHarmony ? (
            <>
              <Icon type="cancel" size={20} />
              <Icon type="info" size={20} />
            </>
          ) : (
            <>
              <Star
                size={20}
                style={{
                  color: 'var(--nutui-color-primary)',
                }}
              />
              <More size={20} />
            </>
          )
        }
        rightIn={
          isHarmony ? (
            <Icon type="download" size={20} />
          ) : (
            <Photograph
              size={16}
              onClick={() => {
                console.log('Photograph right in')
              }}
            />
          )
        }
      />
    </>
  )
}
export default Demo5
