通过配置 postcss 对组件库的 css 进行优化。

1. Taro 环境下的配置示例

```text
{
  "mini": {
    "postcss": {
      "@nutui/optimize-css": {
        "enable": true,
        "config": {
          "removeRtl": true,
          "cssVariables": {
            "include": [path.join(__dirname, 'variables.scss')],
            "exclude": ["--nutui-color-primary-text"],
            "type": "replace"
          }
        }
      }
    }
  }
}
```

配置说明：

1. removeRtl：删除 rtl 相关样式
2. cssVariables
   - include: 指定css变量的文件
   - exclude: 设置哪些 css 变量不进行替换, 在 JS 控制 css 变量时可以使用 exclude 指定
   - type: css 变量的替换方案，默认不处理，当设置 replace 时，可将 css 变量替换为实际值
