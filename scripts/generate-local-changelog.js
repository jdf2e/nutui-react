const shell = require('shelljs')
const fs = require('fs')
const { join } = require('path')

const beforeTag = process.argv[2]
const nextTag = process.argv[3]

shell.exec(
  `git log -1 --format=%ai ${beforeTag}`,
  { silent: true },
  (code, stdout, stderr) => {
    shell.exec(
      `git log --since="${stdout.replace('\n', '')}" --pretty=format:"%s" next`,
      { silent: true },
      (code, stdout, stderr) => {
        const logs = stdout.split('\n')
        const rules = [
          'build',
          'chore',
          'ci',
          'docs',
          'feat',
          'fix',
          'perf',
          'refactor',
          'revert',
          'style',
          'test',
        ]
        const logsWithGithubUser = {
          build: [],
          chore: [],
          ci: [],
          docs: [],
          feat: [],
          fix: [],
          perf: [],
          refactor: [],
          revert: [],
          style: [],
          test: [],
          others: [],
        }
        const logSymbol = {
          build: '* 📦 ',
          chore: '* 🏡 ',
          ci: '* 🤖 ',
          docs: '* 📖 ',
          feat: '* :sparkles: ',
          fix: '* :bug: ',
          perf: '* zap: ',
          refactor: '* 🪵 ',
          revert: '* 🚦 ',
          style: '* :art: ',
          test: '* 💡 ',
          others: '* 🔔 ',
        }
        logs.forEach((log, index) => {
          if (log.indexOf(beforeTag) === -1) {
            const a = rules.filter((rule) => {
              return log.toLowerCase().startsWith(rule)
            })
            if (a.length) {
              logsWithGithubUser[a[0]].push(log)
            } else {
              logsWithGithubUser.others.push(log)
            }
          }
        })

        let changeLog = ''
        rules.forEach((rule) => {
          const logs = logsWithGithubUser[rule]
          if (!logs.length) return
          changeLog += `${logs.map((log) => `${logSymbol[rule]}${log}`).join('\n')}\n`
        })
        shell.exec(
          'date "+%Y-%m-%d"',
          { silent: true },
          (code, stdout, stderr) => {
            const res = `# ${nextTag}\n\`${stdout.replaceAll('\n', '')}\`\n\n\n${changeLog}\n\n`

            fs.writeFileSync(
              join(__dirname, '../CHANGELOG.md'),
              res +
                fs.readFileSync(join(__dirname, '../CHANGELOG.md'), {
                  encoding: 'utf8',
                })
            )
          }
        )
      }
    )
  }
)
