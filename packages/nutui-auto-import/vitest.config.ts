import { defineConfig } from 'vitest/config'
// 增加配置文件后才能让 workspace 中的子包的测试生效。
export default defineConfig({
  test: {},
})
