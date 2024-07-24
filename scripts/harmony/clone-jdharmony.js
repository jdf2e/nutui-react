const simpleGit = require('simple-git')
const os = require('os')
const path = require('path')
const { remove, ensureDir } = require('fs-extra')
const fs = require('fs')

const home = os.homedir()
const temp = path.join(home, 'dongdesign-jdharmony')

async function createTempDir() {
  try {
    await ensureDir(temp)
  } catch (err) {}
}

async function cleanTempDir() {
  try {
    await remove(temp)
  } catch (e) {
    console.error(e)
  }
}

async function cloneJdHarmony() {
  const remote = 'git@coding.jd.com:DongDesign/JDHarmony.git'
  const branch = 'master'
  const git = simpleGit({
    baseDir: temp,
  })
  console.log(`Clone jdharmony, branch: ${branch}`)

  await git.clone(remote, ['-b', branch, '--depth', '1'])

  console.log(`Clone completed successfully.`)
}

async function clone() {
  await cleanTempDir()
  await createTempDir()
  await cloneJdHarmony()
}

// 判断temp目录是否存在JDHarmony文件夹,如果不存在不存在则执行clone()

const harmonyPath = path.join(temp, 'JDHarmony')
if (!fs.existsSync(harmonyPath)) {
  clone()
}
