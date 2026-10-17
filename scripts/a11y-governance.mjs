import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

/**
 * NutUI-React 无障碍治理统一脚本
 * 
 * 功能：
 * 1. 自动为装饰性图标添加 aria-hidden (Web) / ariaHidden (Taro)。
 * 2. 自动将 Taro (.taro.tsx) 中的无障碍属性转为驼峰式。
 * 3. 修复 JSX 语法瑕疵 (如 / /> 转为 />) 并保护箭头函数。
 * 4. 排除系统级非图标组件 (SearchBar, Tag 等)。
 */

// 提取文件中从 @nutui/icons-react 引入的组件名
const getImportedIcons = (content) => {
  const iconImports = []
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]@nutui\/icons-react(?:-taro)?['"]/g
  let match
  while ((match = importRegex.exec(content)) !== null) {
    const imports = match[1]
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => s.split(/\s+as\s+/)[0]) // 处理 import { Close as MyClose }
    iconImports.push(...imports)
  }
  return new Set(iconImports)
}

// 定义功能性图标及其默认标签 (中文字符串)
const functionalLabels = {
  Close: '关闭',
  Plus: '增加',
  Minus: '减少',
  Del: '删除',
  Delete: '删除',
  Failure: '失败',
  Error: '错误',
  Success: '成功',
  Check: '完成',
  Left: '上一页',
  Right: '下一页',
  ArrowLeft: '上一页',
  ArrowRight: '下一页',
  Notice: '通知',
}

const runGovernance = async () => {
  const files = await glob('src/packages/**/*.{tsx,taro.tsx}')
  console.log(`🚀 Starting Intelligent A11y Governance for ${files.length} files...`)

  let processedCount = 0

  files.forEach((file) => {
    const isTaro = file.endsWith('.taro.tsx')
    let content = fs.readFileSync(file, 'utf-8')
    const originalContent = content

    const importedIcons = getImportedIcons(content)

    // 步骤 1：Taro 属性规范化 (仅限 .taro.tsx)
    if (isTaro) {
      const mapping = {
        'aria-label=': 'ariaLabel=',
        'aria-checked=': 'ariaChecked=',
        'aria-disabled=': 'ariaDisabled=',
        'aria-busy=': 'ariaBusy=',
        'aria-hidden="true"': 'ariaHidden',
        'aria-hidden ': 'ariaHidden ',
      }
      Object.entries(mapping).forEach(([key, val]) => {
        content = content.replace(new RegExp(key, 'g'), val)
      })
    }

    // 步骤 2：图标智能治理
    const iconPattern = /<([A-Z][a-zA-Z0-9]+)\s+([^>]*?)\/?>/g
    content = content.replace(iconPattern, (match, tagName, attrs) => {
      if (importedIcons.has(tagName)) {
        // 识别交互属性 (onClick, onTouchStart, onXxx)
        const hasEventHandler = /on[A-Z][a-zA-Z]+[=\s{]/.test(attrs)
        const label = functionalLabels[tagName]
        
        // 如果已经是正确的功能图标治理，且已有 label，或者是不需要的治理，跳过
        const hasLabel = attrs.includes('aria-label') || attrs.includes('ariaLabel')
        const hasHidden = attrs.includes('aria-hidden') || attrs.includes('ariaHidden')
        
        // 判定：是否有事件，或者该图标在功能性映射表中
        const isFunctional = hasEventHandler || !!label

        const labelAttrPrefix = isTaro ? 'ariaLabel' : 'aria-label'
        const hiddenAttr = isTaro ? 'ariaHidden' : 'aria-hidden="true"'

        let cleanAttrs = attrs.replace(/\/\s*$/, '').trim()

        if (isFunctional) {
          // 如果是功能图标，必须有 label 且不能有 hidden
          if (hasHidden) {
            // 纠错：移除 aria-hidden (包括两边的空格)
            cleanAttrs = cleanAttrs.replace(/\s*(aria-hidden="true"|ariaHidden)\s*/g, ' ').trim()
          }
          
          if (!hasLabel) {
            const finalLabel = label || '操作'
            const labelAttr = `${labelAttrPrefix}="${finalLabel}"`
            if (cleanAttrs === '') {
              return `<${tagName} ${labelAttr} />`
            }
            return `<${tagName} ${labelAttr} ${cleanAttrs} />`
          }
          
          // 如果已经有 label 且之前有 hidden，返回修复后的标签
          if (hasHidden) {
             if (cleanAttrs === '') {
               return `<${tagName} />`
             }
             return `<${tagName} ${cleanAttrs} />`
          }
          return match
        } else {
          // 如果是装饰性图标，必须有 hidden 且最好没 label
          if (hasHidden || hasLabel) return match // 已经治理过或被标记为功能性
          
          if (cleanAttrs === '') {
            return `<${tagName} ${hiddenAttr} />`
          }
          return `<${tagName} ${hiddenAttr} ${cleanAttrs} />`
        }
      }
      return match
    })

    // 步骤 3：语法清理 & 保护箭头函数
    // 将 "/ />" 修复为 "/>"，但防止误伤 "=>"
    content = content.replace(/\/ \/>/g, '/>')
    
    // 步骤 4：恢复由于误匹配可能导致的箭头函数损坏 (针对极极端情况)
    content = content.replace(/= \/>/g, '=>')

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf-8')
      console.log(`✅ [FIXED] ${file}`)
      processedCount++
    }
  })

  console.log(`\n✨ Governance complete! Modified ${processedCount} files.`)
}

runGovernance().catch((err) => {
  console.error('❌ Error during A11y governance:', err)
  process.exit(1)
})
