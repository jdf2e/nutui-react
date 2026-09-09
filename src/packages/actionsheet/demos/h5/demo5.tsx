import React, { useState } from 'react'
import { ActionSheet, Cell, Checkbox } from '@nutui/nutui-react'
import { Close, Check } from '@nutui/icons-react'

const options = [
  { value: '1', text: '文案内容' },
  { value: '2', text: '文案内容' },
  { value: '3', text: '文案内容' },
]

const rowStyle: (last: boolean) => React.CSSProperties = (last) => ({
  height: '48px',
  marginBottom: 0,
  boxSizing: 'content-box',
  borderBottom: last
    ? 'none'
    : '0.5px solid var(--nutui-color-border, rgba(0, 0, 0, 0.06))',
})

const titleStyle: React.CSSProperties = {
  padding: '6px 8px',
  borderRadius: '6px',
  backgroundColor: 'var(--nutui-color-background-component, #f0f2f7)',
  color: 'var(--nutui-color-text)',
  fontSize: 11,
  lineHeight: '16px',
  fontWeight: 400,
}

const Demo5 = () => {
  const [visibleLeft, setVisibleLeft] = useState(false)
  const [visibleRight, setVisibleRight] = useState(false)
  const [valueLeft, setValueLeft] = useState<string[]>(['1'])
  const [valueRight, setValueRight] = useState<string[]>(['2'])
  const lastValueLeftRef = React.useRef<string[]>(valueLeft)
  const lastValueRightRef = React.useRef<string[]>(valueRight)

  return (
    <>
      <Cell onClick={() => setVisibleLeft(true)}>
        <span>勾选框居左</span>
      </Cell>
      <ActionSheet
        visible={visibleLeft}
        title={
          <span style={titleStyle} onClick={() => setValueLeft([])}>
            清空筛选
          </span>
        }
        headerLeft={
          <Close
            width={20}
            height={20}
            onClick={() => {
              setVisibleLeft(false)
              setTimeout(() => setValueLeft(lastValueLeftRef.current), 200)
            }}
          />
        }
        headerRight={
          <Check
            width={20}
            height={20}
            onClick={() => {
              setVisibleLeft(false)
              lastValueLeftRef.current = valueLeft
            }}
          />
        }
        onCancel={() => {
          setVisibleLeft(false)
          setTimeout(() => setValueLeft(lastValueLeftRef.current), 200)
        }}
      >
        <Checkbox.Group
          value={valueLeft}
          onChange={setValueLeft}
          style={{ padding: '0 16px' }}
        >
          {options.map((opt, idx) => (
            <Checkbox
              key={opt.value}
              value={opt.value}
              label={opt.text}
              style={rowStyle(idx === options.length - 1)}
            />
          ))}
        </Checkbox.Group>
      </ActionSheet>

      <Cell onClick={() => setVisibleRight(true)}>
        <span>勾选框居右</span>
      </Cell>
      <ActionSheet
        visible={visibleRight}
        title={
          <span style={titleStyle} onClick={() => setValueRight([])}>
            清空筛选
          </span>
        }
        headerLeft={
          <Close
            width={20}
            height={20}
            onClick={() => {
              setVisibleRight(false)
              setTimeout(() => setValueRight(lastValueRightRef.current), 200)
            }}
          />
        }
        headerRight={
          <Check
            width={20}
            height={20}
            onClick={() => {
              setVisibleRight(false)
              lastValueRightRef.current = valueRight
            }}
          />
        }
        onCancel={() => {
          setVisibleRight(false)
          setTimeout(() => setValueRight(lastValueRightRef.current), 200)
        }}
      >
        <Checkbox.Group
          value={valueRight}
          onChange={setValueRight}
          labelPosition="left"
          style={{ padding: '0 16px' }}
        >
          {options.map((opt, idx) => {
            const active = valueRight.includes(opt.value)
            return (
              <Checkbox
                key={opt.value}
                value={opt.value}
                style={rowStyle(idx === options.length - 1)}
                label={
                  <span
                    style={{
                      color: active
                        ? 'var(--nutui-color-primary, #ff0f23)'
                        : undefined,
                    }}
                  >
                    {active ? '选中' : '未选中'}
                  </span>
                }
              />
            )
          })}
        </Checkbox.Group>
      </ActionSheet>
    </>
  )
}
export default Demo5
