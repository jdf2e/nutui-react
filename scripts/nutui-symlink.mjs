#!/usr/bin/env node
/**
 * NutUI-React-Taro 本地软链联调管理工具
 *
 * 用法：
 *   node scripts/nutui-symlink.mjs link [targetProjectPath]
 *   node scripts/nutui-symlink.mjs unlink [targetProjectPath]
 *   node scripts/nutui-symlink.mjs status [targetProjectPath]
 */

import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, rmSync, symlinkSync } from 'node:fs'
import { resolve, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = resolve(__dirname, '..')
const defaultDemoDir = resolve(rootDir, 'packages/nutui-taro-demo')
const releaseTaroDir = resolve(rootDir, 'release/taro')

const [,, command = 'status', customTarget] = process.argv
const targetProject = customTarget ? resolve(process.cwd(), customTarget) : defaultDemoDir

function log(msg, icon = 'ℹ️') {
  console.log(`${icon} [nutui-symlink] ${msg}`)
}

function error(msg) {
  console.error(`❌ [nutui-symlink] 错误: ${msg}`)
}

function ensureReleaseTaro() {
  const pkgPath = resolve(releaseTaroDir, 'package.json')
  const distPath = resolve(releaseTaroDir, 'dist')
  if (!existsSync(pkgPath) || !existsSync(distPath)) {
    log('检测到 release/taro 尚未编译，正在执行 pnpm build:taro ...', '🔨')
    execSync('pnpm build:taro', { cwd: rootDir, stdio: 'inherit' })
  }
}

function getSymlinkPath(targetDir) {
  return resolve(targetDir, 'node_modules/@nutui/nutui-react-taro')
}

function checkStatus(targetDir) {
  const linkPath = getSymlinkPath(targetDir)
  log(`目标工程: ${targetDir}`, '📂')
  log(`软链位置: ${linkPath}`)

  if (!existsSync(linkPath) && !(() => {
    try { return lstatSync(linkPath).isSymbolicLink() } catch { return false }
  })()) {
    log('状态: 未创建软链（不存在）', '⚪')
    return false
  }

  const stat = lstatSync(linkPath)
  if (stat.isSymbolicLink()) {
    const rawTarget = execSync(`readlink "${linkPath}"`).toString().trim()
    log(`状态: 已软链 -> ${rawTarget}`, '🔗')
    const isMatching = resolve(dirname(linkPath), rawTarget) === releaseTaroDir || rawTarget === releaseTaroDir
    if (isMatching) {
      log('软链指向有效，正指向当前仓库 release/taro 本地构建产物！', '✅')
    } else {
      log(`警告: 软链指向了其他路径: ${rawTarget}`, '⚠️')
    }
    return true
  }

  log('状态: 当前为实体文件夹（普通 node_modules 依赖，非软链）', '📦')
  return false
}

function linkPnpmVirtualStores(targetDir) {
  let current = targetDir
  while (current && current !== dirname(current)) {
    const pnpmDir = resolve(current, 'node_modules/.pnpm')
    if (existsSync(pnpmDir)) {
      try {
        const entries = readdirSync(pnpmDir)
        for (const entry of entries) {
          if (entry.startsWith('@nutui+nutui-react-taro@')) {
            const pnpmNutuiDir = resolve(pnpmDir, entry, 'node_modules/@nutui/nutui-react-taro')
            if (existsSync(dirname(pnpmNutuiDir))) {
              try {
                const stat = lstatSync(pnpmNutuiDir)
                if (stat.isSymbolicLink()) {
                  rmSync(pnpmNutuiDir)
                } else if (stat.isDirectory()) {
                  const backupDir = `${pnpmNutuiDir}.backup-${Date.now()}`
                  execSync(`mv "${pnpmNutuiDir}" "${backupDir}"`)
                }
              } catch {}
              symlinkSync(releaseTaroDir, pnpmNutuiDir, 'dir')
              log(`已同步建立 pnpm 虚拟存储软链: ${pnpmNutuiDir}`, '🔗')
            }
          }
        }
      } catch (e) {
        // ignore
      }
    }
    current = dirname(current)
  }
}

function unlinkPnpmVirtualStores(targetDir) {
  let current = targetDir
  while (current && current !== dirname(current)) {
    const pnpmDir = resolve(current, 'node_modules/.pnpm')
    if (existsSync(pnpmDir)) {
      try {
        const entries = readdirSync(pnpmDir)
        for (const entry of entries) {
          if (entry.startsWith('@nutui+nutui-react-taro@')) {
            const pnpmNutuiDir = resolve(pnpmDir, entry, 'node_modules/@nutui/nutui-react-taro')
            try {
              const stat = lstatSync(pnpmNutuiDir)
              if (stat.isSymbolicLink()) {
                rmSync(pnpmNutuiDir)
                log(`已移除 pnpm 虚拟存储软链: ${pnpmNutuiDir}`, '🧹')
              }
            } catch {}
          }
        }
      } catch {}
    }
    current = dirname(current)
  }
}

function doLink(targetDir) {
  ensureReleaseTaro()
  const linkPath = getSymlinkPath(targetDir)
  const atNutuiDir = dirname(linkPath)

  if (!existsSync(targetDir)) {
    error(`目标工程不存在: ${targetDir}`)
    process.exit(1)
  }

  if (!existsSync(atNutuiDir)) {
    mkdirSync(atNutuiDir, { recursive: true })
  }

  // 如果已存在旧软链或旧目录，先行清理
  try {
    const stat = lstatSync(linkPath)
    if (stat.isSymbolicLink()) {
      rmSync(linkPath)
      log('已清除旧软链')
    } else if (stat.isDirectory()) {
      const backupDir = `${linkPath}.backup-${Date.now()}`
      log(`检测到已存在的实体依赖目录，移动备份至: ${backupDir}`, '📦')
      execSync(`mv "${linkPath}" "${backupDir}"`)
    }
  } catch (err) {
    // 路径不存在则直接跳过
  }

  // 创建绝对路径软链
  symlinkSync(releaseTaroDir, linkPath, 'dir')
  log(`成功建立软链!`, '🎉')
  log(`  源路径: ${releaseTaroDir}`)
  log(`  目标位置: ${linkPath}`)

  // 针对 pnpm monorepo / .pnpm 架构，同步替换虚拟存储包软链
  linkPnpmVirtualStores(targetDir)

  // 打印产物版本确认
  try {
    const pkg = JSON.parse(readFileSync(resolve(releaseTaroDir, 'package.json'), 'utf8'))
    log(`已链接的 NutUI-React-Taro 版本: ${pkg.version}`, '🏷️')
  } catch (e) {
    // ignore
  }

  log('提示: 若目标工程处于运行中，建议重启 dev 进程以刷新模块缓存。', '💡')
}

function doUnlink(targetDir) {
  const linkPath = getSymlinkPath(targetDir)
  try {
    const stat = lstatSync(linkPath)
    if (stat.isSymbolicLink()) {
      rmSync(linkPath)
      log(`已成功移除软链: ${linkPath}`, '🧹')
    } else {
      log(`指定路径不是软链，未做操作: ${linkPath}`, '⚠️')
    }
  } catch (err) {
    log(`未找到软链，无需移除: ${linkPath}`, '⚪')
  }
  unlinkPnpmVirtualStores(targetDir)
}

switch (command) {
  case 'link':
    doLink(targetProject)
    break
  case 'unlink':
    doUnlink(targetProject)
    break
  case 'status':
  default:
    checkStatus(targetProject)
    break
}
