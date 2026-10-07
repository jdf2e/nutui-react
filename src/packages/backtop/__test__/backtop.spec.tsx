// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import '@testing-library/jest-dom'
import { Top } from '@nutui/icons-react'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import BackTop from '@/packages/backtop'

test('backtop props test', () => {
  const handleClick = vi.fn()
  const { container } = render(
    <div id="target" style={{ height: '100vh' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <div key={index}>我是测试数据{index}</div>
      })}
      <BackTop
        target="target"
        className="backtop-button"
        onClick={handleClick}
      />
    </div>
  )
  const chooseTagEle = container.querySelector('.nut-backtop') as Element
  fireEvent.click(chooseTagEle)
  expect(handleClick).toHaveBeenCalled()
})

test('backtop custom test', () => {
  const handleClick = vi.fn()
  const { container } = render(
    <BackTop
      className="custom-class"
      target="target"
      threshold={100}
      style={{
        bottom: '110px',
        right: '10px',
      }}
      onClick={handleClick}
    >
      <Top />
      <div style={{ fontSize: '12px' }}>顶部</div>
    </BackTop>
  )
  expect(container.querySelector('.nut-backtop')).toHaveAttribute(
    'style',
    'z-index: 900; bottom: 110px; right: 10px;'
  )
  const btn = container.querySelector('.nut-backtop') as Element
  fireEvent.click(btn)
  expect(handleClick).toHaveBeenCalled()
  expect(container).toMatchSnapshot()
})

test('scroll', async () => {
  const { container } = render(
    <div id="target" style={{ height: '100px' }} className="backtop-wrapper">
      {new Array(24).fill(0).map((_, index) => {
        return (
          <div key={index} style={{ height: 30 }}>
            我是测试数据{index}
          </div>
        )
      })}
      <BackTop target="target" className="backtop-button" />
    </div>
  )
  const track = container.querySelector('.backtop-wrapper')
  const backtopEl = container.querySelector('.nut-backtop') as Element
  if (track) {
    track.scrollTo = vi.fn()
    track.scrollTop = 200
    act(() => {
      track.dispatchEvent(new Event('scroll'))
    })
    await waitFor(() => {
      expect(backtopEl).toHaveClass('nut-backtop-show')
    })
    fireEvent.click(backtopEl)
  }
})

test('tabbar height', () => {
  const { container } = render(
    <BackTop tabbarHeight={48} className="backtop-button" />
  )

  expect(container.querySelector('.nut-backtop')).toHaveAttribute(
    'style',
    'z-index: 900; bottom: 108px;'
  )
})

test('backtop theme variables responsive scale test', () => {
  const baseVariables = readFileSync(
    resolve(process.cwd(), 'src/styles/variables.scss'),
    'utf-8'
  )
  expect(baseVariables).toContain(
    '$backtop-size: var(--nutui-backtop-size, scale-px(40px)) !default;'
  )
  expect(baseVariables).toContain(
    '$backtop-right: var(--nutui-backtop-right, scale-px(8px)) !default;'
  )
  expect(baseVariables).toContain(
    '$backtop-bottom: var(--nutui-backtop-bottom, scale-px(60px)) !default;'
  )
  expect(baseVariables).toContain(
    '$backtop-icon-size: var(--nutui-backtop-icon-size, scale-icon-px(20px)) !default;'
  )

  const themeFiles = [
    'variables-daojia.scss',
    'variables-jmapp.scss',
    'variables-jrkf.scss',
  ]
  themeFiles.forEach((file) => {
    const content = readFileSync(
      resolve(process.cwd(), `src/styles/${file}`),
      'utf-8'
    )
    expect(content).toContain(
      '$backtop-icon-size: var(--nutui-backtop-icon-size, 20px) !default;'
    )
  })

  const scssContent = readFileSync(
    resolve(process.cwd(), 'src/packages/backtop/backtop.scss'),
    'utf-8'
  )
  expect(scssContent).toContain('font-size: $backtop-icon-size;')
  expect(scssContent).toContain('width: $backtop-icon-size;')
  expect(scssContent).toContain('height: $backtop-icon-size;')
  expect(scssContent).not.toMatch(/&-icon\s*\{\s*font-size:\s*20px;/)
})
