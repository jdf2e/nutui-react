import axios from 'axios'
import * as fs from 'fs'
import * as path from 'path'
import { findMostRelevantComponents } from './analyze-title-relevance.mjs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import config from '../src/config.json' assert { type: 'json' }
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// 添加 GitHub API 配置
const GITHUB_API = {
  BASE_URL: 'https://api.github.com/repos/jdf2e/nutui-react',
  REPO_URL: 'https://github.com/jdf2e/nutui-react/',
  HEADERS: {
    Accept: 'application/vnd.github.v3+json',
    // Authorization: `Bearer ${PAT_TOKEN}`,
  },
}

// 修改原有的 headers 定义
const headers = GITHUB_API.HEADERS
config.nav.packages
const coms = config.nav
  .map((i) => i.packages)
  .flat(Infinity)
  .filter((i) => i.show)
async function generateContribution(componentName, componentNameCN) {
  try {
    // 获取 Issues
    const issuesResponse = await axios.get(
      'https://api.github.com/repos/jdf2e/nutui-react/issues',
      {
        params: {
          state: 'closed',
          sort: 'updated',
          direction: 'desc',
          per_page: 1000,
          // 添加过滤条件，排除 PR
          is: 'issue',
        },
        headers,
      }
    )

    const issues = issuesResponse.data
      .filter(
        (issue) =>
          !issue.pull_request &&
          findMostRelevantComponents(issue.title).includes(componentName)
      )
      .slice(0, 5)
      .map((issue) => {
        // 获取 issue 编号
        const issueNumber = issue.number
        return {
          title: issue.title,
          url: issue.html_url,
          number: issueNumber
        }
      })

    // 获取 Releases
    const releasesResponse = await axios.get(
      'https://api.github.com/repos/jdf2e/nutui-react/releases',
      {
        params: {
          per_page: 100,
        },
        headers, // 使用相同的 headers
      }
    )

    const releases = releasesResponse.data
      .reduce((acc, release) => {
        const buttonUpdates = release.body
          .split('\n')
          .filter(
            (line) =>
            {
              return findMostRelevantComponents(line).includes(componentName)
            }
          )
          .map((line) => {
            // 移除前面的 * 和空格
            let processedLine = line.replace(/^[*\s-]*/, '').replace(':art')

            // 识别提交类型并移除原始 emoji 文本
            let type = 'others'
            if (processedLine.includes(':bug:')) {
              type = 'fix'
              processedLine = processedLine.replace(':bug:', '')
            }
            if (processedLine.includes(':sparkles:')) {
              type = 'feat'
              processedLine = processedLine.replace(':sparkles:', '')
            }

            const symbols = {
              feat: '✨ ',
              fix: '🐛 ',
              docs: '📖 ',
              style: '🎨 ',
              perf: '⚡️ ',
              others: '💡 ',
            }

            // 清理并格式化内容
            let processedContent = processedLine
              .trim()
              .replace(/^(feat|fix|docs|style|perf):\s*/, '')

            // 处理 PR 链接
            const prMatch = processedContent.match(/#(\d+)/)
            if (prMatch) {
              const prNumber = prMatch[1]
              processedContent = processedContent.replace(
                `#${prNumber}`,
                `[#${prNumber}](https://github.com/jdf2e/nutui-react/pull/${prNumber})`
              )
            }

            return {
              version: release.tag_name,
              content: `- ${symbols[type]}${processedContent} \`${release.tag_name}\``,
            }
          })
        return [...acc, ...buttonUpdates]
      }, [])
      .slice(0, 5)

    // 生成 Markdown 内容
    // 生成不同语言版本的内容
    const contentZH = `## 贡献记录\n
### Issues\n
${issues.map((issue) => `- ${issue.title} [#${issue.number}](${issue.url})`).join('\n')}

> 更多已解决问题请查看 [Issues](${GITHUB_API.REPO_URL}issues?q=is%3Aissue%20state%3Aclosed%20${componentName})

### Component Logs\n
${releases.map((item) => item.content).join('\n')}

> 更多版本更新记录请查看 [Releases](${GITHUB_API.REPO_URL}/releases?q=${componentName.toLowerCase()}&expanded=true)
`

const contentEN = `## Contribution

### Issues\n
${issues.map((issue) => `- [${issue.title}](${issue.url})`).join('\n')}

> View more [Issues](${GITHUB_API.REPO_URL}issues?q=is%3Aissue%20state%3Aclosed%20${componentName})

### Component Logs\n
${releases.map((item) => item.content).join('\n')}

> View more [Releases](${GITHUB_API.REPO_URL}/releases?q=${componentName.toLowerCase()}&expanded=true)
`

const contentZHTW = `## 貢獻記錄

### Issues\n
${issues.map((issue) => `- [${issue.title}](${issue.url})`).join('\n')}

> 更多已解決問題請查看 [Issues](${GITHUB_API.REPO_URL}issues?q=is%3Aissue%20state%3Aclosed%20${componentName})

### Component Logs\n
${releases.map((item) => item.content).join('\n')}

> 更多版本更新記錄請查看 [Releases](${GITHUB_API.REPO_URL}/releases?q=${componentName.toLowerCase()}&expanded=true)
  `

  // 写入不同语言版本的文件
    const baseDir = path.resolve(
      __dirname,
      `../src/packages/${componentName.toLowerCase()}`
    )
    const files = {
      'doc.md': contentZH,
      'doc.taro.md': contentZH,
      'doc.en-US.md': contentEN,
      'doc.zh-TW.md': contentZHTW,
    }

    for (const [filename, content] of Object.entries(files)) {
      const filePath = path.join(baseDir, filename)
      if (fs.existsSync(filePath)) {
        const doc = fs.readFileSync(filePath, 'utf-8')
        const updatedDoc =
          doc.includes('## 贡献记录') ||
          doc.includes('## Contribution') ||
          doc.includes('## 貢獻記錄')
            ? doc.replace(
                /## (贡献记录|Contribution|貢獻記錄)[\s\S]*$/,
                content
              )
            : `${doc}\n${content}`

        fs.writeFileSync(filePath, updatedDoc)
        console.log(`${componentName} ${filename} 更新完成！`)
      }
    }
  } catch (error) {
    console.error(`${componentName} 文档更新失败：`, error.message)
  }
}

Promise.all(coms.map((i) => generateContribution(i.name, i.cName)))
  .then(() => console.log('所有组件文档更新完成！'))
  .catch((error) => console.error('部分组件更新失败：', error))
