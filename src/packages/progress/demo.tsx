import React, { useState } from 'react'
import { Progress } from './progress'
import { Cell } from '@/packages/cell/cell'
import { Icon } from '@/packages/icon/icon'
import { Button } from '@/packages/button/button'

const ProgressDemo = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Progress percentage={30} />
        </Cell>
        <h2>设置高度和颜色</h2>
        <Cell>
          <Progress percentage={30} strokeColor="rgba(250,44,25,0.47)" textColor="red" />
        </Cell>
        <h2>设置百分比不显示</h2>
        <Cell>
          <Progress percentage={50} showText={false} />
        </Cell>
        <h2>百分比外显</h2>
        <Cell>
          <Progress percentage={30} />
        </Cell>
        <h2>百分比内显</h2>
        <Cell>
          <Progress percentage={60} textInside />
        </Cell>
        <h2>内显自定义内容</h2>
        <Cell>
          <Progress percentage={60} textInside>
            <Icon
              size={30}
              name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
            ></Icon>
          </Progress>
        </Cell>
        <h2>自定义尺寸</h2>
        <Cell>
          <Progress percentage={30} size="small" textInside />
        </Cell>
        <Cell>
          <Progress percentage={50} size="base" textInside />
        </Cell>
        <Cell>
          <Progress percentage={70} size="large" textInside />
        </Cell>
        <h2>状态显示</h2>
        <Cell>
          <Progress
            percentage={30}
            strokeColor="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
            status
          />
        </Cell>
        <Cell>
          <Progress percentage={100} textType="icon" />
        </Cell>
        <Cell>
          <Progress
            percentage={100}
            strokeColor="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
            strokeWidth="15"
            textType="icon"
            iconName="issue"
            iconColor="red"
          />
        </Cell>
        <h2>动态改变</h2>
        <Cell>
          <Progress percentage={value} />
        </Cell>
        <Cell>
          <Button
            type="default"
            style={{ margin: 8 }}
            onClick={() => {
              let num = value
              if (value <= 0) {
                return false
              }
              num -= 10
              setValue(num)
            }}
          >
            减少
          </Button>
          <Button
            type="primary"
            onClick={() => {
              let num = value
              if (value >= 100) {
                return false
              }
              num += 10
              setValue(num)
            }}
          >
            增加
          </Button>
        </Cell>
      </div>
    </>
  )
}

export default ProgressDemo
