/**
 * @description 用于分析标题或日志与组件的相关性
 */
import config from '../src/config.json' assert { type: 'json' }

// 分析标题与组件的相关性
export function analyzeTitleRelevance(title, componentName, componentNameCN) {
  const lowerTitle = title.toLowerCase()
  const lowerComponentName = componentName.toLowerCase()
  let relevanceScore = 0

  // 1. 作者指定 (权重: 100)
  const commitFormatMatch = title.match(/[\w:]+\((\w+)\):?/) // 修改正则表达式，使其更灵活地匹配组件名
  if (
    commitFormatMatch &&
    commitFormatMatch[1].toLowerCase() === lowerComponentName
  ) {
    relevanceScore += 100
  }

  // 2. 完全匹配 (权重: 20) - 提高权重
  if (lowerTitle.includes(lowerComponentName)) {
    relevanceScore += 20
  }
  if (title.includes(componentNameCN)) {
    relevanceScore += 20
  }

  // 3. 检查组件列表 (权重: 15) - 提高权重，支持更多分隔符
  const componentList = lowerTitle
    .split(/[,;\s\[\]]+/)
    .map((s) => s.trim())
    .filter(Boolean)
  if (componentList.includes(lowerComponentName)) {
    relevanceScore += 15
  }

  // 4. 部分匹配 (权重: 3)
  const componentWords = lowerComponentName
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
  componentWords.forEach((word) => {
    if (word.length > 1 && lowerTitle.includes(word)) {
      relevanceScore += 3
    }
  })

  // 5. 检查中文关键词匹配 (权重: 3)
  const cnKeywords = componentNameCN.split(/[s,，]/).filter(Boolean)
  cnKeywords.forEach((keyword) => {
    if (title.includes(keyword)) {
      relevanceScore += 3
    }
  })

  // 6. 上下文语义分析 (权重: 30)
  // 检查是否是组件的主要功能描述
  const isMainFeature =
    title.includes(`${componentName}组件`) ||
    title.includes(`${componentNameCN}组件`) ||
    (title.includes(componentName) && title.includes('组件'))
  if (isMainFeature) {
    relevanceScore += 30
  }

  // 相关性阈值
  const RELEVANCE_THRESHOLD = 3

  return {
    score: relevanceScore,
    isRelevant: relevanceScore >= RELEVANCE_THRESHOLD, // 只有达到阈值才算相关
    details: {
      commitFormat: commitFormatMatch ? commitFormatMatch[1] : null,
      exactMatchEn: lowerTitle.includes(lowerComponentName),
      exactMatchCn: title.includes(componentNameCN),
      partialMatches: componentWords.filter(
        (word) => word.length > 1 && lowerTitle.includes(word)
      ),
      cnMatches: cnKeywords.filter((keyword) => title.includes(keyword)),
    },
  }
}

// 分析标题与所有组件的相关性，返回相关性最高的组件们

export function findMostRelevantComponents(title) {
  let maxScore = -1
  let mostRelevantComponents = []
  let relevanceDetails = null

  config.nav.forEach((nav) => {
    nav.packages.forEach((pkg) => {
      const result = analyzeTitleRelevance(title, pkg.name, pkg.cName)
      if (result.score > maxScore) {
        maxScore = result.score
        mostRelevantComponents = [pkg]
        relevanceDetails = result
      } else if (result.score === maxScore && maxScore > 0) {
        mostRelevantComponents.push(pkg)
      }
    })
  })
  const result = {
    components: maxScore >= 15 ? mostRelevantComponents : [],
    score: maxScore,
    details: relevanceDetails,
  }

  if (result.components && result.components.length > 0) {
    return result.components.map((pkg) => pkg.name)
  }
  return []
}

const testTitles = [
  'fix: usecallback to fix render too many times, button,animatingnumbers,avatar,audio; and fix avatargroup when length > maxsize (#2628) ',
  'fix(dialog): 关闭按钮默认在底部，24px白色图标 (#2118) @irisSong',
  'feat(calendar): support renderBottomButton props (#2645) ',
  '希望Dialog组件内置的确认以及取消按钮对异步自带loading或者可以手动设置loading #1202',
  '[FR]: getSystemInfoSync 微信小程序从基础库 2.20.1 开始，本接口停止维护，需要兼容新老接口',
]

// console.log('\n相关性分析结果:')
// testTitles.forEach((title) => {
// console.log('\n标题:', title)
// const result = findMostRelevantComponents(title)
// console.log(`相关组件: ${result})}`)
// console.log(`相关性得分: ${result.score}`)
// console.log('详细信息:', result.details)
// })
