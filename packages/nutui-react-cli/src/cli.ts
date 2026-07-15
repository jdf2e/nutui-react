import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { runList } from './commands/list.js'
import { runInfo } from './commands/info.js'
import { runDoc } from './commands/doc.js'
import { runDemo } from './commands/demo.js'
import { runToken } from './commands/token.js'
import type { Lang, OutputFormat } from './types.js'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
yargs(hideBin(process.argv))
  .scriptName('nutui-react')
  .usage('$0 <command> [options]')
  .option('format', {
    alias: 'f',
    describe: '输出格式',
    choices: ['text', 'json'] as const,
    default: 'text' as OutputFormat,
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
    (argv) =>
      runList({ category: argv.category, format: argv.format as OutputFormat })
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
    (argv) =>
      runInfo({
        component: argv.component as string,
        format: argv.format as OutputFormat,
      })
  )
  .command(
    'doc <component>',
    '查看组件完整文档',
    (y) =>
      y
        .positional('component', {
          type: 'string',
          describe: '组件名（大小写不敏感）',
          demandOption: true,
        })
        .option('lang', {
          alias: 'l',
          choices: ['zh', 'en'] as const,
          default: 'zh' as Lang,
          describe: '文档语言',
        }),
    (argv) =>
      runDoc({
        component: argv.component as string,
        lang: argv.lang as Lang,
        format: argv.format as OutputFormat,
      })
  )
  .command(
    'demo <component> [name]',
    '列出或查看组件 H5 示例源码',
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
    (argv) =>
      runDemo({
        component: argv.component as string,
        name: argv.name as string | undefined,
        format: argv.format as OutputFormat,
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
    (argv) =>
      runToken({
        component: argv.component as string | undefined,
        format: argv.format as OutputFormat,
      })
  )
  .demandCommand(1, '请指定一个命令。运行 nutui-react --help 查看用法。')
  .strict()
  .alias('h', 'help')
  .alias('v', 'version')
  .wrap(null)
  .parse()
