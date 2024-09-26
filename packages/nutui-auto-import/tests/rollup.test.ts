import path from 'node:path'
import { rollupBuild, testFixtures } from '@sxzz/test-utils'
import { describe } from 'vitest'
import UnpluginStarter from '../src/rollup'

describe('rollup', async () => {
  const { dirname } = import.meta
  await testFixtures(
    '*.js',
    async (args, id) => {
      const { snapshot } = await rollupBuild(id, [
        UnpluginStarter({
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
