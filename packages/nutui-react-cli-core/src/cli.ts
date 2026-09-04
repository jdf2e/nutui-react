// core CLI 入口：各叶子包构造 CliConfig 后调 runCli。命令 / 文案 / 语言选项均随 config 参数化。
import yargs from 'yargs'
import { runList } from './commands/list.js'
import { runInfo } from './commands/info.js'
import { runDoc } from './commands/doc.js'
import { runDemo } from './commands/demo.js'
import { runToken } from './commands/token.js'
import { runMigrate } from './commands/migrate.js'
import { runDiff } from './commands/diff.js'
import { runMcp } from './commands/mcp.js'
import type { CliConfig } from './config.js'
import type { Lang, OutputFormat } from './types.js'

export type { CliConfig } from './config.js'

export function runCli(config: CliConfig, argv: string[]): void {
  // 仅当该端支持多语言时才暴露 --lang（Taro 只有 zh，隐藏该选项）。
  const multiLang = config.langs.length > 1

  const cli = yargs(argv)
    .scriptName(config.binName)
    .usage('$0 <command> [options]')
    .option('format', {
      alias: 'f',
      describe: '输出格式',
      choices: ['text', 'json'] as const,
      default: 'text' as OutputFormat,
      global: true,
    })
    .option('nutui-version', {
      alias: 'nv',
      type: 'string',
      describe:
        '目标 NutUI 版本（如 3、3.1.0、4.0.0-beta.7）；省略则从 node_modules / package.json 自动检测',
      global: true,
    })
    .command(
      ['list', 'ls'],
      '列出全部组件（按分类）',
      (y) =>
        y.option('category', {
          alias: 'c',
          type: 'string',
          describe: '按分类 enName 筛选（如 base / feedback）',
        }),
      (a) =>
        runList({
          config,
          category: a.category,
          format: a.format as OutputFormat,
          nutuiVersion: a['nutui-version'] as string | undefined,
        })
    )
    .command(
      'info <component>',
      '查看组件 Props 表',
      (y) =>
        y.positional('component', {
          type: 'string',
          describe: '组件名（大小写不敏感，如 Button）',
          demandOption: true,
        }),
      (a) =>
        runInfo({
          config,
          component: a.component as string,
          format: a.format as OutputFormat,
          nutuiVersion: a['nutui-version'] as string | undefined,
        })
    )
    .command(
      'doc <component>',
      '查看组件完整文档',
      (y) => {
        let b = y.positional('component', {
          type: 'string',
          describe: '组件名（大小写不敏感）',
          demandOption: true,
        })
        if (multiLang) {
          b = b.option('lang', {
            alias: 'l',
            choices: config.langs,
            default: config.defaultLang,
            describe: '文档语言',
          }) as typeof b
        }
        return b
      },
      (a) =>
        runDoc({
          config,
          component: a.component as string,
          lang: (a.lang as Lang) ?? config.defaultLang,
          format: a.format as OutputFormat,
          nutuiVersion: a['nutui-version'] as string | undefined,
        })
    )
    .command(
      'demo <component> [name]',
      `列出或查看组件 ${config.demoLabel} 示例源码`,
      (y) =>
        y
          .positional('component', {
            type: 'string',
            describe: '组件名（大小写不敏感）',
            demandOption: true,
          })
          .positional('name', {
            type: 'string',
            describe: '示例名（如 demo1）；省略则列出全部',
          }),
      (a) =>
        runDemo({
          config,
          component: a.component as string,
          name: a.name as string | undefined,
          format: a.format as OutputFormat,
          nutuiVersion: a['nutui-version'] as string | undefined,
        })
    )
    .command(
      'token [component]',
      '查看 Design Token（省略组件名则列全局 token）',
      (y) =>
        y.positional('component', {
          type: 'string',
          describe: '组件名（大小写不敏感）；省略则列出全局 token',
        }),
      (a) =>
        runToken({
          config,
          component: a.component as string | undefined,
          format: a.format as OutputFormat,
          nutuiVersion: a['nutui-version'] as string | undefined,
        })
    )
    .command(
      'migrate [from] [to]',
      '输出 vN→vM 迁移指南（默认 3 4）；--component 看单组件，--apply <dir> 扫描项目生成迁移提示',
      (y) =>
        y
          .positional('from', {
            type: 'string',
            describe: '起始大版本（如 3），默认 3',
          })
          .positional('to', {
            type: 'string',
            describe: '目标大版本（如 4），默认 from+1',
          })
          .option('component', {
            alias: 'c',
            type: 'string',
            describe: '只输出该组件的迁移说明（大小写不敏感）',
          })
          .option('apply', {
            type: 'string',
            describe: '扫描该目录，只输出项目用到组件的迁移步骤并生成给 Agent 的提示',
          }),
      (a) =>
        runMigrate({
          config,
          from: a.from as string | undefined,
          to: a.to as string | undefined,
          component: a.component as string | undefined,
          apply: a.apply as string | undefined,
          format: a.format as OutputFormat,
        })
    )
    .command(
      'diff <v1> <v2> [component]',
      '跨版本 Props 差异比对（新增 / 移除 / 类型或默认值变更）',
      (y) =>
        y
          .positional('v1', {
            type: 'string',
            describe: '起始版本（如 3、3.1.0）',
            demandOption: true,
          })
          .positional('v2', {
            type: 'string',
            describe: '目标版本（如 4、4.0.0-beta.7）',
            demandOption: true,
          })
          .positional('component', {
            type: 'string',
            describe: '只比对该组件（大小写不敏感）；省略则比对全部',
          }),
      (a) =>
        runDiff({
          config,
          v1: a.v1 as string,
          v2: a.v2 as string,
          component: a.component as string | undefined,
          format: a.format as OutputFormat,
        })
    )
    .command(
      'mcp',
      '启动本地 MCP 服务（stdio），供 Claude Code / Cursor / VS Code / Codex 等调用',
      (y) => y,
      () => runMcp({ config })
    )
    .demandCommand(
      1,
      `请指定一个命令。运行 ${config.binName} --help 查看用法。`
    )
    .strict()
    .alias('h', 'help')
    .alias('v', 'version')
    .version(config.version)
    .wrap(null)

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  cli.parse()
}
