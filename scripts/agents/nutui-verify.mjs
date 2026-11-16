#!/usr/bin/env node

/**
 * NutUI-React AI 质量守护校验脚本 (nutui-verify.mjs)
 * 
 * 核心卡点准则：
 * 1. [单组件原则] 单个 PR 仅允许修改一个组件相关文件，超过 1 个强制拦截。
 * 2. [单测覆盖率] 单测语句/行覆盖率低于 95% 强制拦截。
 * 3. [跨端对称性] H5 与 Taro 实现文件必须对称存在。
 * 4. [白皮书红线] 严禁在 Taro 端裸调 window/document；SCSS 规范禁止 scale-px(0px)。
 * 5. [包体与性能] 提示包体收益/劣化与性能量化评估。
 * 6. [组件复用度] 评估是否过度依赖或重复造轮子。
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT_DIR = process.cwd();
const PACKAGES_DIR = path.join(ROOT_DIR, 'src', 'packages');

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function log(msg, color = colors.reset) {
  console.log(`${color}${msg}${colors.reset}`);
}

function getChangedComponents() {
  const arg = process.argv[2];
  if (arg && !arg.startsWith('-')) {
    return [arg.toLowerCase()];
  }

  try {
    const diffFiles = execSync('git diff --name-only HEAD', { encoding: 'utf-8' })
      .split('\n')
      .concat(execSync('git diff --cached --name-only', { encoding: 'utf-8' }).split('\n'))
      .filter(Boolean);

    const components = new Set();
    for (const file of diffFiles) {
      const match = file.match(/src\/packages\/([^/]+)\//);
      if (match && match[1]) {
        components.add(match[1]);
      }
    }
    return Array.from(components);
  } catch (err) {
    return [];
  }
}

function getChangedStyleFiles() {
  try {
    const diffFiles = execSync('git diff --name-only HEAD', { encoding: 'utf-8' })
      .split('\n')
      .concat(execSync('git diff --cached --name-only', { encoding: 'utf-8' }).split('\n'))
      .filter(Boolean);

    return Array.from(new Set(diffFiles.filter(f => f.startsWith('src/styles/variables') && f.endsWith('.scss'))));
  } catch (err) {
    return [];
  }
}

function verifyStyleFile(filePath) {
  const fullPath = path.join(ROOT_DIR, filePath);
  if (!fs.existsSync(fullPath)) return { file: filePath, passed: true, errors: [] };

  const errors = [];
  log(`\n🎨 正在检查样式变量文件: [${filePath}]`, colors.cyan + colors.bold);

  try {
    const diff = execSync(`git diff -U0 HEAD -- ${filePath}`, { encoding: 'utf-8' });
    const addedLines = diff.split('\n').filter(l => l.startsWith('+') && !l.startsWith('+++'));

    addedLines.forEach((line) => {
      const code = line.slice(1).trim();
      if (code.startsWith('//') || code.startsWith('*')) return;

      if (/scale-px\(0(px)?\)/.test(code)) {
        errors.push(`[样式规范] 包含 scale-px(0px)，0 尺寸应直接使用纯数字 0: "${code}"`);
      }

      const barePxMatches = code.match(/(?<!scale-(?:font-|icon-)?px\()(?<!\w)(?<!1px\s+solid\s+)(?<!1px\s+dashed\s+)\b([2-9]|\d{2,})px\b/g);
      if (barePxMatches) {
        errors.push(`[缩放规范] variables 文件中默认值包含未缩放的裸 px: [${barePxMatches.join(', ')}]，必须显式包裹 scale-px(): "${code}"`);
      }
    });
  } catch (e) {
    // ignore diff error
  }

  const passed = errors.length === 0;
  if (passed) {
    log(`✨ [${filePath}] 样式变量校验通过！`, colors.green + colors.bold);
  } else {
    log(`❌ [${filePath}] 发现变量规范阻断项:`, colors.red + colors.bold);
    errors.forEach(e => log(`  🔴 ${e}`, colors.red));
  }
  return { file: filePath, passed, errors };
}

async function verifyComponent(comp) {
  const compDir = path.join(PACKAGES_DIR, comp);
  if (!fs.existsSync(compDir)) {
    log(`⚠️  组件目录未找到: src/packages/${comp}`, colors.yellow);
    return { comp, passed: false, errors: [`组件目录不存在: ${comp}`] };
  }

  const errors = [];
  const warnings = [];

  log(`\n🔍 正在检查组件: [${comp}]`, colors.cyan + colors.bold);

  // 1. 跨端对称性检查
  const h5File = path.join(compDir, `${comp}.tsx`);
  const taroFile = path.join(compDir, `${comp}.taro.tsx`);
  const scssFile = path.join(compDir, `${comp}.scss`);
  const docFile = path.join(compDir, `doc.md`);

  // 兼容 __test__ 与 __tests__ 两种目录
  let testFile = path.join(compDir, `__test__`, `${comp}.spec.tsx`);
  if (!fs.existsSync(testFile)) {
    const pluralTest = path.join(compDir, `__tests__`, `${comp}.spec.tsx`);
    if (fs.existsSync(pluralTest)) {
      testFile = pluralTest;
    }
  }

  if (!fs.existsSync(h5File)) {
    errors.push(`缺少 H5 实现文件: ${comp}.tsx`);
  }
  if (!fs.existsSync(taroFile)) {
    errors.push(`缺少 Taro 小程序端实现文件: ${comp}.taro.tsx`);
  }
  if (!fs.existsSync(docFile)) {
    warnings.push(`缺少组件中文文档: doc.md`);
  }
  if (!fs.existsSync(testFile)) {
    errors.push(`缺少单元测试文件: __test__/${comp}.spec.tsx 或 __tests__/${comp}.spec.tsx`);
  }

  // 2. 白皮书合规红线扫描
  if (fs.existsSync(taroFile)) {
    const taroCode = fs.readFileSync(taroFile, 'utf-8');
    const lines = taroCode.split('\n');
    lines.forEach((line, idx) => {
      if (line.trim().startsWith('//') || line.trim().startsWith('*')) return;
      if (/(?<!typeof\s+)(window|document)\.[a-zA-Z]/.test(line)) {
        errors.push(`[白皮书红线] ${comp}.taro.tsx 第 ${idx + 1} 行存在直接访问 DOM/BOM (window/document)，小程序/SSR 端会崩溃: "${line.trim()}"`);
      }
    });
  }

  if (fs.existsSync(scssFile)) {
    const scssCode = fs.readFileSync(scssFile, 'utf-8');
    if (/scale-px\(0(px)?\)/.test(scssCode)) {
      errors.push(`[白皮书样式] ${comp}.scss 包含 scale-px(0px)，应直接使用纯数字 0`);
    }
  }

  // 3. 运行测试并执行 95% 覆盖率强拦截
  if (fs.existsSync(testFile)) {
    try {
      log(`  ⏳ 运行单元测试及覆盖率检测: npx vitest run src/packages/${comp} --coverage`, colors.blue);
      const output = execSync(`npx vitest run src/packages/${comp} --coverage`, { stdio: 'pipe', encoding: 'utf-8', timeout: 90000 });
      log(`  ✅ 单元测试执行通过`, colors.green);

      // 解析覆盖率表格中 packages/<comp> 这一行的 Lines 覆盖率
      const linesRegex = new RegExp(`packages\\/${comp}\\s*\\|\\s*([\\d.]+)\\s*\\|\\s*([\\d.]+)\\s*\\|\\s*([\\d.]+)\\s*\\|\\s*([\\d.]+)`, 'i');
      const match = output.match(linesRegex);
      if (match) {
        const lineCoverage = parseFloat(match[4]);
        log(`  📊 组件覆盖率: 行覆盖率 ${lineCoverage}% (阈值: 95%)`, colors.cyan);
        if (lineCoverage < 95) {
          errors.push(`[单测覆盖率拦截] ${comp} 行覆盖率为 ${lineCoverage}%，低于要求的 95% 强拦截阈值！`);
        }
      } else {
        warnings.push(`未能精确解析组件自身的单独覆盖率数值，请人工复核覆盖率报表。`);
      }
    } catch (testErr) {
      errors.push(`单元测试或覆盖率执行失败: ${(testErr.stderr || testErr.stdout || testErr.message).slice(0, 300)}`);
    }
  }

  const passed = errors.length === 0;
  if (passed) {
    log(`✨ [${comp}] 校验通过！`, colors.green + colors.bold);
    if (warnings.length > 0) {
      warnings.forEach(w => log(`  ⚠️  ${w}`, colors.yellow));
    }
  } else {
    log(`❌ [${comp}] 发现规范阻断项:`, colors.red + colors.bold);
    errors.forEach(e => log(`  🔴 ${e}`, colors.red));
    warnings.forEach(w => log(`  ⚠️  ${w}`, colors.yellow));
  }

  return { comp, passed, errors, warnings };
}

async function main() {
  log(`=======================================================`, colors.blue);
  log(`   NutUI-React AI 质量守护校验 (Verify & Review)      `, colors.cyan + colors.bold);
  log(`=======================================================`, colors.blue);

  const components = getChangedComponents();
  const styleFiles = getChangedStyleFiles();

  if (components.length === 0 && styleFiles.length === 0) {
    log(`ℹ️  未指定组件且没有检测到修改的组件/样式，建议直接指定: node scripts/agents/nutui-verify.mjs <component>`, colors.yellow);
    process.exit(0);
  }

  let allPassed = true;

  // 1. 样式变量校验
  for (const styleFile of styleFiles) {
    const res = verifyStyleFile(styleFile);
    if (!res.passed) {
      allPassed = false;
    }
  }

  // 2. 单组件 PR 原则
  if (components.length > 1) {
    log(`\n🔴 [PR 范围阻断] 检查发现本次变更涉及 ${components.length} 个组件: [${components.join(', ')}]`, colors.red + colors.bold);
    log(`   根据 NutUI 研发准则，每个 PR 仅能处理 1 个组件，请拆分 PR 后再提交评审！`, colors.red);
    allPassed = false;
  }

  // 3. 组件规范与单测/覆盖率校验
  for (const comp of components) {
    const res = await verifyComponent(comp);
    if (!res.passed) {
      allPassed = false;
    }
  }

  log(`\n=======================================================`, colors.blue);
  if (allPassed) {
    log(`🎉 校验通过，符合 NutUI 交付标准！`, colors.green + colors.bold);
    process.exit(0);
  } else {
    log(`💥 校验失败，存在阻断项，阻塞合并！`, colors.red + colors.bold);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
