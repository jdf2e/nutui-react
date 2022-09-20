import React, { useRef } from 'react'
import { Sticky } from './sticky'
import Button from '@/packages/button'
import Cell from '@/packages/cell'

const StickyDemo = () => {
  const containerTopRef = useRef(null)
  const containerRef = useRef(null)
  const handleChange = (val: boolean) => {
    console.log('吸顶状态发生了改变,当前fixed为', val)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Sticky top={57} onChange={handleChange}>
            <Button type="primary">吸顶</Button>
          </Sticky>
        </Cell>

        <h2>吸顶距离</h2>
        <Cell>
          <Sticky top={120}>
            <Button type="primary">距离顶部120px</Button>
          </Sticky>
        </Cell>
        <h2>指定容器内吸顶</h2>
        <Cell>
          <div
            className="sticky-container"
            ref={containerTopRef}
            style={{ height: '300px' }}
          >
            <Sticky container={containerTopRef} top={57}>
              <Button style={{ marginLeft: '100px' }} type="info">
                指定容器内吸顶
              </Button>
            </Sticky>
          </div>
        </Cell>
        <h2>指定容器吸底</h2>
        <Cell>
          <div
            className="sticky-container"
            ref={containerRef}
            style={{ height: '300px' }}
          >
            <Sticky position="bottom" container={containerRef} bottom={0}>
              <Button style={{ marginLeft: '100px' }} type="info">
                指定容器吸底
              </Button>
            </Sticky>
          </div>
        </Cell>
        <h2>吸底距离</h2>
        <Cell style={{ height: '64px' }}>
          <Sticky top={0} position="bottom">
            <Button type="primary">距离底部0px</Button>
          </Sticky>
        </Cell>
      </div>
    </>
  )
}

export default StickyDemo
