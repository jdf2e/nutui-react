import babel from '@babel/core'
import { describe, expect, it } from 'vitest'
import { replaceIcons } from '../src/replace-icons'

const plugin = replaceIcons({
  targetLibrary: '@test/aa',
  sourceLibrary: ['@nutui/icons-react'],
  iconMappings: {
    Loading: 'Star',
  },
  exclude: ['Loading1', 'ArrowSize6'],
})

const babelOptions = {
  presets: ['@babel/preset-react'],
  plugins: [plugin],
}
const caseIns = `
import { ArrowSize6 as Arrow, Loading, Loading1 } from '@nutui/icons-react'
const ReplaceOne = () => {
  return <><Loading /> <Arrow /></>
}
`
describe('', () => {
  it('replace Loading icons with Star', () => {
    const ast = babel.transformSync(caseIns, babelOptions)
    // @ts-ignore
    expect(ast.code).toMatchSnapshot()
  })
})
