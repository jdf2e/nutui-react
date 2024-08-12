const simpleGit = require('simple-git')
const os = require('os')
const path = require('path')
const { remove, ensureDir } = require('fs-extra')
const fs = require('fs')

const home = os.homedir()
const temp = `${process.cwd()}/packages`

async function cloneJdHarmony() {
  // 填写coding地址
  const remote = ''
  const branch = 'master'
  const git = simpleGit({
    baseDir: temp,
  })
  console.log(`Clone jdharmony, branch: ${branch}`)

  await git.clone(remote, ['-b', branch, '--depth', '1'])

  console.log(`Clone completed successfully.`)
  // 修改文件夹名称
  const harmonyPath = path.join(temp, 'JDHarmony')
  const harmonyPathNew = path.join(temp, 'nutui-jdharmony')
  await remove(harmonyPathNew)
  await ensureDir(harmonyPathNew)
  fs.renameSync(harmonyPath, harmonyPathNew)
  console.log(`Rename completed successfully.`)
}

async function clone() {
  await cloneJdHarmony()
}

// 判断temp目录是否存在JDHarmony文件夹,如果不存在不存在则执行clone()

const harmonyPath = path.join(temp, 'nutui-jdharmony')
if (!fs.existsSync(harmonyPath)) {
  clone()
  console.log(`Clone JDHarmony successfully.`)
} else {
  console.log(`JDHarmony already exists.`)
}
