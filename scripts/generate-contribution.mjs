/**
 * description: 生成Contribution数据
 *
 * 使用说明：
 * 1. 在 GitHub 设置中生成 Personal Access Token:
 *    - 访问 https://github.com/settings/tokens
 *    - 选择 "Generate new token (classic)"
 *    - 勾选 "repo" 权限
 *    - 生成并复制 token
 * 2. 执行命令：export GITHUB_TOKEN=your_token && node scripts/generate-contribution.mjs
 */
import axios from 'axios'
import * as fs from 'fs'
import * as path from 'path'
import { findMostRelevantComponents } from './analyze-title-relevance.mjs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import config from '../src/config.json' assert { type: 'json' }
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const GITHUB_API = {
  BASE_URL: 'https://api.github.com/repos/jdf2e/nutui-react',
  REPO_URL: 'https://github.com/jdf2e/nutui-react/',
  HEADERS: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
}
console.log(`Bearer ${process.env.GITHUB_TOKEN}`)
const headers = GITHUB_API.HEADERS
const coms = config.nav
  .map((i) => i.packages)
  .flat(Infinity)
  .filter((i) => i.show)

async function generateContribution(componentName) {
  try {
    const issuesResponse = await axios.get(
      'https://api.github.com/repos/jdf2e/nutui-react/issues',
      {
        params: {
          state: 'closed',
          sort: 'updated',
          direction: 'desc',
          per_page: 1000,
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
      .map((issue) => ({
        title: issue.title,
        url: issue.html_url,
        number: issue.number,
      }))

    const releasesResponse = await axios.get(
      'https://api.github.com/repos/jdf2e/nutui-react/releases',
      {
        params: {
          per_page: 100,
        },
        headers,
      }
    )

    const releases = releasesResponse.data
      .reduce((acc, release) => {
        const buttonUpdates = release.body
          .split('\n')
          .filter((line) => {
            return findMostRelevantComponents(line).includes(componentName)
          })
          .map((line) => {
            let processedLine = line.replace(/^[*\s-]*/, '').replace(':art')
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

            let processedContent = processedLine
              .trim()
              .replace(/^(feat|fix|docs|style|perf):\s*/, '')

            const prMatch = processedContent.match(/#(\d+)/)
            if (prMatch) {
              const prNumber = prMatch[1]
              processedContent = processedContent.replace(
                `#${prNumber}`,
                `[#${prNumber}](https://github.com/jdf2e/nutui-react/pull/${prNumber})`
              )
            }

            // 检查是否已经包含表情符号
            const hasEmoji = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(processedContent)

            return {
              version: release.tag_name,
              type,
              content: hasEmoji ? processedContent : `${symbols[type]}${processedContent}`,
              rawContent: processedContent,
              tagName: release.tag_name,
            }
          })
        return [...acc, ...buttonUpdates]
      }, [])
      .slice(0, 5)

    // 生成结构化数据
    const contributionData = {
      issues: {
        [componentName]: issues,
      },
      logs: {
        [componentName]: releases,
      },
    }

    return contributionData
  } catch (error) {
    console.error(error.message)
  }
}

Promise.all(coms.map((i) => generateContribution(i.name)))
  .then((results) => {
    const allContributions = results.reduce(
      (acc, curr, index) => {
        if (curr) {
          const componentName = coms[index].name
          acc.issues[componentName] = curr.issues[componentName]
          acc.logs[componentName] = curr.logs[componentName]
        }
        return acc
      },
      { issues: {}, logs: {} }
    )

    // 将数据写入到 JSON 文件
    const outputPath = path.resolve(
      __dirname,
      '../src/sites/sites-react/doc/components/contribution/contribution.json'
    )
    fs.writeFileSync(
      outputPath,
      JSON.stringify(allContributions, null, 2),
      'utf8'
    )
    console.log('已成功写入到:', outputPath)
  })
  .catch((error) => console.error('获取贡献数据失败：', error))
