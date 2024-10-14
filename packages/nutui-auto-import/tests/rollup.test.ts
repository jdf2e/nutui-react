import path from 'node:path'
import { rollupBuild, testFixtures } from '@sxzz/test-utils'
import { describe } from 'vitest'
import { babel } from '@rollup/plugin-babel'
import NutUIAutoImport from '../src/rollup'

describe('rollup', async () => {
  const { dirname } = import.meta
  await testFixtures(
    '*.jsx',
    async (args, id) => {
      const { snapshot } = await rollupBuild(id, [
        babel({ babelHelpers: 'bundled' }),
        NutUIAutoImport({
          libraryName: '@nutui/nutui-react',
          style: 'css',
          taro: false,
        }),
      ])
      return snapshot
    },
    { cwd: path.resolve(dirname, 'fixtures'), promise: true }
  )
})
