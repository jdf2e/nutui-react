import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { ResultPage } from '@/packages/nutui.react.taro'

const ResultPageDemo = () => {
  return (
    <>
      <ScrollView className="demo" style={{ width: '100%' }}>
        <View className="h2">成功反馈</View>
        <ResultPage
          title="成功反馈"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="success"
          primaryButtonText="主要按钮"
          secondaryButtonText="次要按钮"
        />
        <View className="h2">失败反馈</View>
        <ResultPage
          title="失败反馈"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="error"
          primaryButtonText="主要按钮"
          secondaryButtonText="次要按钮"
        />
        <View className="h2">无标题</View>
        <ResultPage
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="warning"
          primaryButtonText="主要按钮"
          secondaryButtonText="次要按钮"
        />
        <View className="h2">单一按钮</View>
        <ResultPage
          title="信息补充"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="info"
          primaryButtonText="主要按钮"
        />
        <View className="h2">无按钮</View>
        <ResultPage
          title="二次确认"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="waiting"
        />
      </ScrollView>
    </>
  )
}

export default ResultPageDemo
