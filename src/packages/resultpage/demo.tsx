import React from 'react'
import { ResultPage } from './resultpage'

const ResultPageDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>成功反馈</h2>
        <ResultPage
          title="成功反馈"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="success"
          primaryButtonText="主要按钮"
          secondaryButtonText="次要按钮"
        />
        <h2>失败反馈</h2>
        <ResultPage
          title="失败反馈"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="error"
          primaryButtonText="主要按钮"
          secondaryButtonText="次要按钮"
        />
        <h2>无标题</h2>
        <ResultPage
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="warning"
          primaryButtonText="主要按钮"
          secondaryButtonText="次要按钮"
        />
        <h2>单一按钮</h2>
        <ResultPage
          title="信息补充"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="info"
          primaryButtonText="主要按钮"
        />
        <h2>无按钮</h2>
        <ResultPage
          title="二次确认"
          description="内容描述内容可折行，建议最多不超过两行建议最多不超过两行内容描述内容可折行，建议最多不超过两行建议最多不超过两行"
          status="waiting"
        />
      </div>
    </>
  )
}

export default ResultPageDemo
