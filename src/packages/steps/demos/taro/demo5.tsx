import React from 'react'
import { Steps, Step, Image, Cell, Space } from '@nutui/nutui-react-taro'

const data = [
  {
    title: '澳大利亚',
    icon: 'https://img20.360buyimg.com/img/jfs/t1/292466/40/2162/796/6814444aFb166b228/172fa4fac14da979.png',
  },
  {
    title: '京东厦门保税仓',
    icon: 'https://img30.360buyimg.com/img/jfs/t1/284678/5/27948/800/68144449F4a2dd83d/04a7ea1908f79a18.png',
  },
  {
    title: '北京市',
    icon: 'https://img10.360buyimg.com/img/jfs/t1/282198/27/29335/736/6814444aF939efd7a/884c695a6f4a0893.png',
  },
]
const Demo5 = () => {
  return (
    <>
      <Space direction="vertical">
        <Cell
          style={{
            justifyContent: 'center',
          }}
        >
          <Steps value={1} type="icon">
            {data.map((item, index) => (
              <Step
                key={index}
                value={index + 1}
                title={item.title}
                icon={<Image src={item.icon} />}
              />
            ))}
          </Steps>
        </Cell>
        <Cell>
          <Steps value={1} type="icon" layout="double">
            {data.map((item, index) => (
              <Step
                key={index}
                value={index + 1}
                title={item.title}
                icon={<Image src={item.icon} />}
              />
            ))}
          </Steps>
        </Cell>
      </Space>
    </>
  )
}
export default Demo5
