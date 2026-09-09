import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { extractComponents, scanProject } from '../utils/scan.js'

describe('extractComponents', () => {
  it('解析单行具名 import', () => {
    const c = extractComponents(`import { Button, Cell } from '@nutui/nutui-react'`)
    expect(c.sort()).toEqual(['Button', 'Cell'])
  })

  it('解析多行 import', () => {
    const c = extractComponents(`import {
      Button,
      Empty,
      Toast,
    } from '@nutui/nutui-react'`)
    expect(c.sort()).toEqual(['Button', 'Empty', 'Toast'])
  })

  it('识别 -taro 包与 icons 包', () => {
    const src = `
      import { Cell } from '@nutui/nutui-react-taro'
      import { Dongdong } from '@nutui/icons-react-taro'
    `
    expect(extractComponents(src).sort()).toEqual(['Cell', 'Dongdong'])
  })

  it('as 别名取原名，type 前缀剥除', () => {
    const c = extractComponents(
      `import { Button as Btn, type ButtonProps } from '@nutui/nutui-react'`
    )
    expect(c.sort()).toEqual(['Button', 'ButtonProps'])
  })

  it('忽略非 NutUI import', () => {
    const c = extractComponents(`import { useState } from 'react'`)
    expect(c).toEqual([])
  })

  it('不误伤子路径 import（如 dist/style）', () => {
    // 具名 import 才计入；副作用 import '@nutui/nutui-react/dist/style.css' 无具名列表
    const c = extractComponents(`import '@nutui/nutui-react/dist/style.css'`)
    expect(c).toEqual([])
  })
})

describe('scanProject', () => {
  let dir: string
  beforeAll(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'nutui-scan-'))
    fs.mkdirSync(path.join(dir, 'src'), { recursive: true })
    fs.writeFileSync(
      path.join(dir, 'src', 'a.tsx'),
      `import { Button, Empty } from '@nutui/nutui-react'`
    )
    fs.writeFileSync(
      path.join(dir, 'src', 'b.ts'),
      `import { Cell } from '@nutui/nutui-react'`
    )
    // node_modules 应被跳过
    fs.mkdirSync(path.join(dir, 'node_modules'), { recursive: true })
    fs.writeFileSync(
      path.join(dir, 'node_modules', 'x.tsx'),
      `import { ShouldSkip } from '@nutui/nutui-react'`
    )
  })
  afterAll(() => fs.rmSync(dir, { recursive: true, force: true }))

  it('聚合去重、跳过 node_modules', () => {
    const r = scanProject(dir)
    expect(r.components).toEqual(['Button', 'Cell', 'Empty'])
    expect(r.components).not.toContain('ShouldSkip')
  })

  it('files 只含有 NutUI import 的文件', () => {
    const r = scanProject(dir)
    expect(r.files).toHaveLength(2)
  })

  it('传入单文件也可扫描', () => {
    const r = scanProject(path.join(dir, 'src', 'a.tsx'))
    expect(r.components).toEqual(['Button', 'Empty'])
    expect(r.scannedFileCount).toBe(1)
  })
})
