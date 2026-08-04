import * as React from 'react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '@/packages/input'
import ConfigProvider from '@/packages/configprovider'

test('input props test', () => {
  const blur = vi.fn()
  const { container, rerender } = render(
    <Input name="text" placeholder="请输入文字" defaultValue="初始文本" />
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'placeholder',
    '请输入文字'
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'value',
    '初始文本'
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'name',
    'text'
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'type',
    'text'
  )
  rerender(
    <Input type="number" placeholder="1" defaultValue="1" onBlur={blur} />
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'type',
    'tel'
  )
  const telInput = container.querySelector('.nut-input-native') as HTMLElement
  fireEvent.focus(telInput)
  fireEvent.blur(telInput)
  expect(blur).toBeCalled()

  rerender(
    <Input type="digit" placeholder="1" defaultValue="1.01" onBlur={blur} />
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'type',
    'text'
  )
  const digitInput = container.querySelector('.nut-input-native') as HTMLElement
  fireEvent.focus(digitInput)
  fireEvent.blur(digitInput)
  expect(blur).toBeCalled()
  rerender(
    <Input
      name="text"
      formatTrigger="onBlur"
      placeholder="1"
      defaultValue="1"
      onBlur={blur}
    />
  )
  const triggerInput = container.querySelector(
    '.nut-input-native'
  ) as HTMLElement
  fireEvent.focus(triggerInput)
  fireEvent.blur(triggerInput)
  expect(blur).toBeCalled()
})

test('password test', () => {
  const { container } = render(<Input placeholder="文本" type="password" />)
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'type',
    'password'
  )
})

test('readOnly test', () => {
  const { container } = render(<Input placeholder="文本" readOnly />)
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'readOnly'
  )
})

test('disabled test', () => {
  const { container } = render(<Input placeholder="文本" disabled />)
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'disabled'
  )
})

test('textarea test', () => {
  const { container } = render(
    <Input name="textarea" placeholder="留言" maxLength={50} />
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'name',
    'textarea'
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'maxlength',
    '50'
  )
})

test('clearable and clear event test', () => {
  const handleClear = vi.fn()
  const { container } = render(
    <Input defaultValue="清除文本" clearable onClear={handleClear} />
  )
  const inputEl = container.querySelector('.nut-input-native') as HTMLElement
  expect(inputEl).toHaveAttribute('value', '清除文本')
  fireEvent.focus(inputEl)
  setTimeout(() => {
    expect(inputEl.querySelector('.nut-input-clear')).toHaveClass(
      'nut-icon-MaskClose'
    )
    const clearBtn = inputEl.querySelector('.nut-input-clear') as Element
    fireEvent.click(clearBtn)
    expect(handleClear).toBeCalled()
    expect(container.querySelector('.nut-input-native')).toHaveAttribute(
      'value',
      ''
    )
  }, 300)
})

test('renders optional description', () => {
  const { container, rerender } = render(
    <Input description="可添加描述性的辅助说明信息" />
  )

  const description = container.querySelector('.nut-input-description')

  expect(description).toHaveTextContent('可添加描述性的辅助说明信息')

  rerender(<Input />)
  expect(
    container.querySelector('.nut-input-description')
  ).not.toBeInTheDocument()
})

test('applies description typography, color and spacing styles', () => {
  const inputStyles = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.scss'),
    'utf8'
  )
  const descriptionStyles = inputStyles.match(
    /&-description\s*\{([^}]*)\}/
  )?.[1]

  expect(descriptionStyles).toContain('margin-top: 4px')
  expect(descriptionStyles).toContain('color: $color-text-help')
  expect(descriptionStyles).toContain('font-family: $font-family')
  expect(descriptionStyles).toContain('font-size: $font-size-s')
  expect(descriptionStyles).toContain('font-weight: $font-weight')
})

test('right icon takes precedence over clear button', () => {
  const { container, getByTestId } = render(
    <Input
      defaultValue="京东多快好省"
      clearable
      rightIcon={<span data-testid="right-icon">辅助功能</span>}
    />
  )
  const input = container.querySelector('.nut-input-native') as HTMLElement

  fireEvent.focus(input)

  expect(getByTestId('right-icon')).toBeInTheDocument()
  expect(container.querySelector('.nut-input-clear')).not.toBeInTheDocument()
})

test('applies right action spacing and text ellipsis styles', () => {
  const inputStyles = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.scss'),
    'utf8'
  )
  const actionStyles = inputStyles.match(/&-action\s*\{([^}]*)\}/)?.[1]
  const plainActionStyles = inputStyles.match(
    /&-plain &-action\s*\{([^}]*)\}/
  )?.[1]
  const nativeStyles = inputStyles.match(
    /\.nut-input-native\s*\{([^}]*)\}/
  )?.[1]
  const iconStyles = inputStyles.match(/\.nut-icon\s*\{([^}]*)\}/)?.[1]

  expect(actionStyles).toContain('margin-left: 4px')
  expect(plainActionStyles).toContain('margin-right: 12px')
  expect(iconStyles).toContain('width: 14px')
  expect(iconStyles).toContain('height: 14px')
  expect(nativeStyles).toContain('min-width: 0')
  expect(nativeStyles).toContain('overflow: hidden')
  expect(nativeStyles).toContain('text-overflow: ellipsis')
  expect(nativeStyles).toContain('white-space: nowrap')
})

test('applies text ellipsis styles to Taro H5 native input', () => {
  const inputStyles = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.scss'),
    'utf8'
  )
  const taroNativeStyles = inputStyles.match(
    /\.nut-input-native\s*\{[^}]*\.weui-input\s*\{([^}]*)\}/
  )?.[1]

  expect(taroNativeStyles).toContain('overflow: hidden')
  expect(taroNativeStyles).toContain('text-overflow: ellipsis')
  expect(taroNativeStyles).toContain('white-space: nowrap')
})

test('applies primary caret color to native inputs', () => {
  const inputStyles = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.scss'),
    'utf8'
  )
  const nativeStyles = inputStyles.match(
    /\.nut-input-native\s*\{([^}]*)\}/
  )?.[1]
  const taroNativeStyles = inputStyles.match(
    /\.nut-input-native\s*\{[^}]*\.weui-input\s*\{([^}]*)\}/
  )?.[1]

  expect(nativeStyles).toContain('caret-color: $color-primary')
  expect(taroNativeStyles).toContain('caret-color: $color-primary')
})

test('applies help text color to placeholders', () => {
  const inputStyles = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.scss'),
    'utf8'
  )
  const placeholderStyles = inputStyles.match(
    /&-native::placeholder,\s*&-native \.weui-input::placeholder,\s*&-placeholder\s*\{([^}]*)\}/
  )?.[1]

  expect(placeholderStyles).toContain('color: $color-text-help')
})

test('applies title color to jmapp input content', () => {
  const inputVariables = readFileSync(
    resolve(process.cwd(), 'src/styles/variables-jmapp.scss'),
    'utf8'
  )
  const inputColor = inputVariables.match(/\$input-color:[^;]+;/)?.[0]

  expect(inputColor).toContain('$color-title')
})

test('applies scalable height variable to plain native inputs', () => {
  const inputStyles = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.scss'),
    'utf8'
  )
  const plainHeightStyles = inputStyles.match(
    /&-plain &-main,\s*&-plain &-native,\s*&-plain &-native \.weui-input\s*\{([^}]*)\}/
  )?.[1]

  expect(plainHeightStyles).toContain('height: $input-plain-height')

  const variableFiles = [
    'variables.scss',
    'variables-jmapp.scss',
    'variables-jrkf.scss',
    'variables-daojia.scss',
  ]

  variableFiles.forEach((file) => {
    const variables = readFileSync(
      resolve(process.cwd(), `src/styles/${file}`),
      'utf8'
    )
    const plainHeight = variables.match(
      /\$input-plain-height:[\s\S]*?\) !default;/
    )?.[0]

    expect(plainHeight).toContain('--nutui-input-plain-height')
    expect(plainHeight).toContain('$input-font-size')
    expect(plainHeight).not.toContain('--nut-scale-font')
  })
})

test('disabled test', () => {
  const { container } = render(<Input placeholder="文本" disabled />)
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'disabled'
  )
})

test('rtl test', () => {
  const { container } = render(
    <ConfigProvider direction="rtl">
      <Input placeholder="文本" />
    </ConfigProvider>
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'style',
    'text-align: right;'
  )
})

test('rtl test2', () => {
  const { container } = render(
    <ConfigProvider direction="rtl">
      <Input placeholder="文本" align="right" />
    </ConfigProvider>
  )
  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'style',
    'text-align: left;'
  )
})

test('clearable and clear event test', () => {
  const handleChange = vi.fn()
  const handleFocus = vi.fn()
  const handleBlur = vi.fn()
  const handleClick = vi.fn()
  const handleClear = vi.fn()
  const { container } = render(
    <Input
      defaultValue="文本"
      clearable
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      onClear={handleClear}
    />
  )
  const inputEl = container.querySelector('.nut-input-native') as Element
  expect(inputEl).toHaveAttribute('value', '文本')
  fireEvent.click(inputEl)
  expect(handleClick).toBeCalled()
  fireEvent.change(inputEl, { target: { value: '文字改变' } })
  setTimeout(() => {
    expect(handleFocus).toBeCalled()
    expect(handleChange).toBeCalled()
    expect(container.querySelector('.nut-input-native')).toHaveAttribute(
      'value',
      '文字改变'
    )
    expect(inputEl.querySelector('.nut-input span')).toHaveAttribute(
      'style',
      'display: flex; align-items: center;'
    )
    const clearBtn = inputEl.querySelector('.nut-input-clear') as Element
    fireEvent.click(clearBtn)
    expect(handleClear).toBeCalled()
    expect(container.querySelector('.nut-input-native')).toHaveAttribute(
      'value',
      ''
    )
    fireEvent.blur(inputEl)
    expect(handleBlur).toBeCalled()
  }, 300)
})
