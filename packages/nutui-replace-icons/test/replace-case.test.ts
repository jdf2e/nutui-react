import babel from '@babel/core'
import { describe, expect, it } from 'vitest'
import { replaceIcons } from '../src/replace-icons'

const plugin = replaceIcons({
  sourceLibrary: ['@nutui/icons-react', '@nutui/icons-react-taro'],
  targetLibrary: '@test/aa',
  iconMappings: {
    Loading: 'Star',
  },
})

const babelOptions = {
  presets: ['@babel/preset-react'],
  plugins: [plugin],
}
const caseIns = `
import { Loading } from '@nutui/icons-react'
import { ArrowSize6 as Arrow } from '@nutui/icons-react'
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
