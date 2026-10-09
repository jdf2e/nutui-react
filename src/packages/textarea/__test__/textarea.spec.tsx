// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { compileString } from 'sass'
import TextArea from '@/packages/textarea'

test('textarea props test', () => {
  const { container } = render(
    <TextArea defaultValue="基础用法" showCount maxLength={20} />
  )
  expect(container.querySelector('.nut-textarea-textarea')?.innerHTML).toBe(
    '基础用法'
  )
  expect(container.querySelector('.nut-textarea-limit')?.innerHTML).toBe('4/20')
  expect(container).toMatchSnapshot()
})

test('textarea type test', () => {
  const { container, rerender } = render(<TextArea />)
  const textarea = container.querySelector('.nut-textarea')

  expect(textarea).toHaveClass('nut-textarea-container')
  expect(textarea).toHaveClass('nut-textarea-container-gray')
  expect(container.querySelector('.nut-textarea-main')).toBeInTheDocument()

  rerender(<TextArea containerType="white" />)
  expect(textarea).toHaveClass('nut-textarea-container-white')
  expect(textarea).not.toHaveClass('nut-textarea-container-gray')

  rerender(<TextArea plain containerType="white" />)
  expect(textarea).toHaveClass('nut-textarea-plain')
  expect(textarea).not.toHaveClass('nut-textarea-container')
  expect(textarea).not.toHaveClass('nut-textarea-container-white')
})

test('textarea defines type layout styles and tokens', () => {
  const styles = readFileSync(
    resolve(process.cwd(), 'src/packages/textarea/textarea.scss'),
    'utf8'
  )

  expect(styles).toContain('&-plain &-main')
  expect(styles).toContain('min-height: $textarea-plain-min-height')
  expect(styles).toContain('&-container &-main')
  expect(styles).toContain('min-height: $textarea-container-min-height')
  expect(styles).toContain('padding: $textarea-padding')
  expect(styles).toContain('&-container-gray &-main')
  expect(styles).toContain(
    'background-color: $textarea-container-gray-background-color'
  )
  expect(styles).toContain('&-container-white &-main')
  expect(styles).toContain(
    'background-color: $textarea-container-white-background-color'
  )
  expect(styles).toMatch(
    /&-limit\s*\{[\s\S]*?&-error\s*\{[\s\S]*?color: \$textarea-limit-error-color/
  )

  const variableFiles = [
    {
      file: 'variables.scss',
      plainMinHeight: 'scale-px(44px)',
      containerMinHeight: 'scale-px(60px)',
      padding: 'scale-px(8px) scale-px(12px)',
    },
    {
      file: 'variables-jmapp.scss',
      plainMinHeight: '44px',
      containerMinHeight: '60px',
      padding: '8px 12px',
    },
    {
      file: 'variables-jrkf.scss',
      plainMinHeight: '44px',
      containerMinHeight: '60px',
      padding: '8px 12px',
    },
    {
      file: 'variables-daojia.scss',
      plainMinHeight: '44px',
      containerMinHeight: '60px',
      padding: '8px 12px',
    },
  ]

  variableFiles.forEach(
    ({ file, plainMinHeight, containerMinHeight, padding }) => {
      const variables = readFileSync(
        resolve(process.cwd(), `src/styles/${file}`),
        'utf8'
      )

      expect(variables).toContain('$textarea-plain-min-height:')
      expect(variables).toContain('--nutui-textarea-plain-min-height')
      expect(variables).toContain(plainMinHeight)
      expect(variables).toContain('$textarea-container-min-height:')
      expect(variables).toContain('--nutui-textarea-container-min-height')
      expect(variables).toContain(containerMinHeight)
      expect(variables).toContain('--nutui-textarea-padding')
      expect(variables).toContain(padding)
      expect(variables).toContain('$textarea-container-gray-background-color:')
      expect(variables).toContain('var(--nutui-color-background-component)')
      expect(variables).toContain('$textarea-container-white-background-color:')
      expect(variables).toContain('$color-background-overlay')
      expect(variables).toContain('$textarea-limit-error-color:')
      expect(variables).toContain('--nutui-textarea-limit-error-color')
      expect(variables).toContain('$color-error')
    }
  )
})

test('textarea keeps over-limit text and marks count as error', () => {
  const handleChange = vi.fn()
  const { container } = render(
    <TextArea
      defaultValue="京东多快"
      showCount
      maxLength={3}
      onChange={handleChange}
    />
  )
  const textarea = container.querySelector(
    '.nut-textarea-textarea'
  ) as HTMLTextAreaElement
  const limit = container.querySelector('.nut-textarea-limit')

  expect(textarea).toHaveValue('京东多快')
  expect(textarea).not.toHaveAttribute('maxlength')
  expect(limit).toHaveTextContent('4/3')
  expect(limit).toHaveClass('nut-textarea-limit-error')

  fireEvent.change(textarea, { target: { value: '京东多快好' } })

  expect(textarea).toHaveValue('京东多快好')
  expect(handleChange).toHaveBeenLastCalledWith('京东多快好')
  expect(limit).toHaveTextContent('5/3')
})

test('textarea does not mark unlimited count as error', () => {
  const { container } = render(
    <TextArea defaultValue="京东多快好" showCount maxLength={-1} />
  )

  expect(container.querySelector('.nut-textarea-limit')).not.toHaveClass(
    'nut-textarea-limit-error'
  )
})

test('taro textarea disables native truncation', () => {
  const taroTextarea = readFileSync(
    resolve(process.cwd(), 'src/packages/textarea/textarea.taro.tsx'),
    'utf8'
  )

  expect(taroTextarea).toContain('maxlength={-1}')
  expect(taroTextarea).toMatch(/limit-error.+isOverLimit/)
  expect(taroTextarea).not.toContain('const format =')
})

test('textarea renders description only in error status', () => {
  const { container, rerender } = render(
    <TextArea description="错误提示信息" />
  )

  expect(
    container.querySelector('.nut-textarea-description')
  ).not.toBeInTheDocument()

  rerender(<TextArea status="error" description="错误提示信息" />)
  expect(
    container.querySelector('.nut-textarea-description')
  ).toHaveTextContent('错误提示信息')

  rerender(<TextArea status="default" description="错误提示信息" />)
  expect(
    container.querySelector('.nut-textarea-description')
  ).not.toBeInTheDocument()
})

test('textarea marks error state with description', () => {
  const { container, rerender } = render(
    <TextArea status="error" description="错误提示信息" />
  )
  const textarea = container.querySelector('.nut-textarea')

  expect(textarea).toHaveClass('nut-textarea-error')
  expect(
    container.querySelector('.nut-textarea-description')
  ).toHaveTextContent('错误提示信息')

  rerender(<TextArea status="default" />)
  expect(textarea).not.toHaveClass('nut-textarea-error')
})

test('textarea applies error text and container-only error styles', () => {
  const styles = readFileSync(
    resolve(process.cwd(), 'src/packages/textarea/textarea.scss'),
    'utf8'
  )
  const descriptionErrorStyles = styles.match(
    /&-description\s*\{([^}]*)\}/
  )?.[1]
  const containerErrorStyles = styles.match(
    /&-error#\{&\}-container &-main\s*\{([^}]*)\}/
  )?.[1]

  expect(descriptionErrorStyles).toContain('color: $textarea-error-color')
  expect(containerErrorStyles).toContain('background-color: $color-error-light')
  expect(containerErrorStyles).not.toContain('$color-danger-light')
  expect(containerErrorStyles).toContain(
    'box-shadow: inset 0 0 0 0.67px $textarea-error-color'
  )
  expect(styles).not.toMatch(/&-plain&-error &-main/)
  expect(styles).not.toMatch(/&-error &-main\s*\{/)
})

test('textarea defines the error color token chain', () => {
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
    const errorColor = variables.match(/\$textarea-error-color:[^;]+;/)?.[0]

    expect(errorColor).toContain('--nutui-textarea-error-color')
    expect(errorColor).toContain('$color-error')
    expect(errorColor).not.toContain('$color-danger')
  })
})

test('textarea uses auxiliary typography for count and error description', () => {
  const styles = readFileSync(
    resolve(process.cwd(), 'src/packages/textarea/textarea.scss'),
    'utf8'
  )
  const limitStyles = styles.match(/&-limit\s*\{([^}]*)\}/)?.[1]
  const descriptionStyles = styles.match(/&-description\s*\{([^}]*)\}/)?.[1]

  expect(limitStyles).toContain('font-size: $font-size-s')
  expect(descriptionStyles).toContain('font-size: $font-size-s')
  expect(descriptionStyles).toContain('color: $textarea-error-color')
  expect(descriptionStyles).not.toContain('color: $color-text-help')
})

test('textarea readOnly blocks focus through ref', () => {
  const textareaRef = React.createRef<any>()
  const { container } = render(<TextArea readOnly ref={textareaRef} />)
  const textarea = container.querySelector(
    '.nut-textarea-textarea'
  ) as HTMLTextAreaElement

  expect(container.querySelector('.nut-textarea')).toHaveClass(
    'nut-textarea-readonly'
  )
  textareaRef.current.focus()
  expect(textarea).not.toHaveFocus()
})

test('textarea readOnly blocks native focus and restores normal focus', () => {
  const onFocus = vi.fn()
  const onBlur = vi.fn()
  const { container, rerender } = render(
    <TextArea readOnly tabIndex={0} onFocus={onFocus} onBlur={onBlur} />
  )
  const textarea = container.querySelector('textarea') as HTMLTextAreaElement

  textarea.focus()
  expect(textarea).not.toHaveFocus()
  expect(textarea).toHaveAttribute('tabindex', '-1')
  expect(textarea).toHaveAttribute('readonly')
  expect(textarea).not.toBeDisabled()
  expect(onFocus).not.toHaveBeenCalled()
  expect(onBlur).not.toHaveBeenCalled()

  rerender(<TextArea tabIndex={0} onFocus={onFocus} onBlur={onBlur} />)
  expect(textarea).toHaveAttribute('tabindex', '0')
  textarea.focus()
  expect(textarea).toHaveFocus()
  expect(onFocus).toHaveBeenCalledTimes(1)
  textarea.blur()
  expect(onBlur).toHaveBeenCalledTimes(1)
})

test.each(['', '-jmapp', '-jrkf', '-daojia'])(
  'textarea compiles readonly rules for variables%s',
  (theme) => {
    const { css } = compileString(
      `@import 'src/styles/variables${theme}.scss';
       @import 'src/packages/textarea/textarea.scss';`,
      { loadPaths: [process.cwd()], logger: { warn() {}, debug() {} } }
    )
    const readonly = css.match(
      /\.nut-textarea-readonly \.nut-textarea-textarea[^{}]*\{([^}]+)\}/
    )?.[1]

    expect(readonly).toContain('color: var(--nutui-color-text-help')
    expect(readonly).toContain('pointer-events: none')
    expect(css).toContain(
      '.nut-textarea-readonly .nut-textarea-textarea .taro-textarea'
    )
    // Both states may coexist; the disabled rule must win the color cascade.
    expect(
      css.indexOf('.nut-textarea-disabled .nut-textarea-textarea {')
    ).toBeGreaterThan(
      css.indexOf('.nut-textarea-readonly .nut-textarea-textarea')
    )
  }
)

test('taro textarea aligns description and focus blocking', () => {
  const taroTextarea = readFileSync(
    resolve(process.cwd(), 'src/packages/textarea/textarea.taro.tsx'),
    'utf8'
  )

  expect(taroTextarea).toContain('-description')
  expect(taroTextarea).toContain('!disabled && !readOnly')
})

test('textarea readOnly test', () => {
  const { container } = render(<TextArea readOnly />)
  expect(container.querySelector('.nut-textarea-textarea')).toHaveAttribute(
    'readonly'
  )
})

test('textarea disabled test', () => {
  const { container } = render(<TextArea disabled />)
  expect(container.querySelector('.nut-textarea-textarea')).toHaveAttribute(
    'disabled'
  )
  expect(container.querySelector('.nut-textarea')).toHaveClass(
    'nut-textarea-disabled'
  )
})

test('textarea onChange event test', () => {
  const handleChange = vi.fn()
  const TextareaDemo = () => {
    const [value, setValue] = useState('文字')
    return (
      <TextArea
        data-testid="textarea"
        defaultValue={value}
        onChange={handleChange}
      />
    )
  }

  const { container } = render(<TextareaDemo />)
  expect(container.querySelector('.nut-textarea-textarea')?.innerHTML).toBe(
    '文字'
  )
  const textareaEl = container.querySelector(
    '.nut-textarea-textarea'
  ) as Element
  fireEvent.change(textareaEl, { target: { value: '文字改变' } })
  expect(handleChange).toBeCalled()
  expect(container.querySelector('.nut-textarea-textarea')?.innerHTML).toBe(
    '文字改变'
  )
})

test('textarea onFocus event test', () => {
  const handleFocus = vi.fn()
  const handleBlur = vi.fn()
  const TextareaDemo = () => {
    return (
      <TextArea
        data-testid="textarea"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    )
  }

  const { container } = render(<TextareaDemo />)

  const textareaEl = container.querySelector(
    '.nut-textarea-textarea'
  ) as Element
  fireEvent.focus(textareaEl)
  expect(handleFocus).toBeCalled()
  fireEvent.blur(textareaEl)
  expect(handleBlur).toBeCalled()
})
