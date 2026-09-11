import * as React from 'react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input, { type InputStatus } from '@/packages/input'
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
  const handleClick = vi.fn()
  const inputRef = React.createRef<any>()
  const { container } = render(
    <Input ref={inputRef} placeholder="文本" readOnly onClick={handleClick} />
  )
  const root = container.querySelector('.nut-input') as HTMLElement
  const input = container.querySelector('.nut-input-native') as HTMLElement

  expect(input).toHaveAttribute('readOnly')
  expect(input).not.toHaveAttribute('disabled')
  fireEvent.click(root)
  inputRef.current.focus()

  expect(handleClick).not.toHaveBeenCalled()
  expect(input).not.toHaveFocus()
})

test('disabled test', () => {
  const handleClick = vi.fn()
  const { container } = render(
    <Input placeholder="文本" disabled onClick={handleClick} />
  )
  const root = container.querySelector('.nut-input') as HTMLElement

  expect(container.querySelector('.nut-input-native')).toHaveAttribute(
    'disabled'
  )
  fireEvent.click(root)
  expect(handleClick).not.toHaveBeenCalled()
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

test('renders externally controlled error state and description', () => {
  const status: InputStatus = 'error'
  const { container, rerender } = render(
    <Input status={status} description="错误提示信息" />
  )
  const input = container.querySelector('.nut-input')

  expect(input).toHaveClass('nut-input-error')
  expect(container.querySelector('.nut-input-description')).toHaveTextContent(
    '错误提示信息'
  )

  rerender(<Input status="default" description="辅助说明信息" />)
  expect(input).not.toHaveClass('nut-input-error')
})

test('applies error text and container-only error field styles', () => {
  const inputStyles = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.scss'),
    'utf8'
  )
  const descriptionErrorStyles = inputStyles.match(
    /\.nut-input-error \.nut-input-description\s*\{([^}]*)\}/
  )?.[1]
  const containerErrorStyles = inputStyles.match(
    /\.nut-input-container\.nut-input-error \.nut-input-main\s*\{([^}]*)\}/
  )?.[1]

  expect(descriptionErrorStyles).toContain('color: $input-error-color')
  expect(containerErrorStyles).toContain('background-color: $color-error-light')
  expect(containerErrorStyles).not.toContain('$color-danger-light')
  expect(containerErrorStyles).toContain(
    'box-shadow: inset 0 0 0 0.67px $input-error-color'
  )
  expect(inputStyles).not.toMatch(
    /\.nut-input-plain\.nut-input-error \.nut-input-main/
  )
})

test('defines the complete error color token chain', () => {
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
    const errorColor = variables.match(/\$input-error-color:[^;]+;/)?.[0]

    expect(variables).toContain('$color-error: var(--nutui-color-error')
    expect(variables).toContain(
      '$color-error-light: var(--nutui-color-error-light'
    )
    expect(variables).toContain(
      '$color-error-pressed: var(--nutui-color-error-pressed'
    )
    expect(errorColor).toContain('--nutui-input-error-color')
    expect(errorColor).toContain('$color-error')
    expect(errorColor).not.toContain('$color-danger')
  })

  const lightThemeFiles = [
    'theme-default.scss',
    'theme-jmapp.scss',
    'theme-jrkf.scss',
    'theme-daojia.scss',
  ]
  const darkThemeFiles = ['theme-dark.scss', 'theme-dark-daojia.scss']

  lightThemeFiles.forEach((file) => {
    const theme = readFileSync(
      resolve(process.cwd(), `src/styles/${file}`),
      'utf8'
    )

    expect(theme).toContain('--nutui-danger-1: #ffedef')
    expect(theme).toContain('--nutui-danger-2: #ff2159')
    expect(theme).toContain('--nutui-danger-3: #d9114a')
  })

  darkThemeFiles.forEach((file) => {
    const theme = readFileSync(
      resolve(process.cwd(), `src/styles/${file}`),
      'utf8'
    )

    expect(theme).toContain('--nutui-danger-1: #3d2529')
    expect(theme).toContain('--nutui-danger-2: #f9607a')
    expect(theme).toContain('--nutui-danger-3: #ff4d6a')
  })
  ;[...lightThemeFiles, ...darkThemeFiles].forEach((file) => {
    const theme = readFileSync(
      resolve(process.cwd(), `src/styles/${file}`),
      'utf8'
    )

    expect(theme).toContain('--nutui-color-error: var(--nutui-danger-2)')
    expect(theme).toContain('--nutui-color-error-light: var(--nutui-danger-1)')
    expect(theme).toContain(
      '--nutui-color-error-pressed: var(--nutui-danger-3)'
    )
  })
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

test('applies state colors and behavior to disabled and readonly inputs', () => {
  const inputStyles = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.scss'),
    'utf8'
  )
  const taroInput = readFileSync(
    resolve(process.cwd(), 'src/packages/input/input.taro.tsx'),
    'utf8'
  )

  expect(inputStyles).toMatch(
    /\.nut-input-readonly[\s\S]*?\.nut-input-placeholder[\s\S]*?color: \$color-text-help/
  )
  expect(inputStyles).toMatch(
    /\.nut-input-disabled[\s\S]*?\.nut-input-placeholder[\s\S]*?color: \$color-text-disabled/
  )
  expect(taroInput).toContain('disabled={disabled || readOnly}')
})

test('applies title color to jmapp input content', () => {
  const inputVariables = readFileSync(
    resolve(process.cwd(), 'src/styles/variables-jmapp.scss'),
    'utf8'
  )
  const inputColor = inputVariables.match(/\$input-color:[^;]+;/)?.[0]

  expect(inputColor).toContain('$color-title')
})

test('defines the updated default gray-2 value', () => {
  const defaultTheme = readFileSync(
    resolve(process.cwd(), 'src/styles/theme-default.scss'),
    'utf8'
  )

  expect(defaultTheme).toContain('--nutui-gray-2: #ebedf2')
  expect(defaultTheme).toContain(
    '--nutui-color-background-component: var(--nutui-gray-2)'
  )
})

test('uses component background token for default container input', () => {
  const inputVariables = readFileSync(
    resolve(process.cwd(), 'src/styles/variables.scss'),
    'utf8'
  )
  const inputBackground = inputVariables.slice(
    inputVariables.indexOf('$input-background-color:'),
    inputVariables.indexOf('$input-padding:')
  )

  expect(inputBackground).toContain('--nutui-input-background-color')
  expect(inputBackground).toContain('var(--nutui-color-background-component)')
  expect(inputBackground).not.toContain('$color-background-overlay')
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
