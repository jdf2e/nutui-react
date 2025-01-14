import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo5 = ({ t }: propsType) => {
  const handleClick = () => {
    const ele = document.getElementsByClassName('backtop-button')[0]
  }

  return (
    <>
      {new Array(24).fill(0).map((_, index) => {
        return (
          <Cell key={index}>
            {t.testData}
            {index}
          </Cell>
        )
      })}
      <BackTop
        onClick={() => {
          handleClick()
        }}
        target="target"
        className="backtop-button"
      />
    </>
  )
}

export default withTranslation(Demo5)
