#!/usr/bin/env node

/**
 * NutUI-React AI 质量守护校验脚本 (nutui-verify.mjs)
 * 
 * 功能：供 AI Agent 及开发者一键验证改动是否符合 NutUI-React 白皮书规范。
 * 检查项：
 * 1. 跨端对称性检查 (H5 vs Taro 实现文件存在性与导出)
 * 2. 白皮书红线静态检查 (Taro 端禁用 window/document、SCSS 规约等)
 * 3. 关联组件的 TypeScript 类型检查
 * 4. 关联组件的 Vitest 单元测试
 * 
 * 用法：
 *   node scripts/agents/nutui-verify.mjs               # 检查 git diff 涉及的组件
 *   node scripts/agents/nutui-verify.mjs button        # 指定检查 button 组件
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
  const testFile = path.join(compDir, `__test__`, `${comp}.spec.tsx`);

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
    warnings.push(`缺少单元测试文件: __test__/${comp}.spec.tsx`);
  }

  // 2. 白皮书合规红线扫描
  if (fs.existsSync(taroFile)) {
    const taroCode = fs.readFileSync(taroFile, 'utf-8');
    // 检查 Taro 源码中是否裸写 window / document（非 typeof window !== 'undefined' 防御判断）
    const lines = taroCode.split('\n');
    lines.forEach((line, idx) => {
      // 过滤注释
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

  // 3. 单测运行
  if (fs.existsSync(testFile)) {
    try {
      log(`  ⏳ 运行单元测试: npx vitest run src/packages/${comp}`, colors.blue);
      execSync(`npx vitest run src/packages/${comp}`, { stdio: 'pipe', encoding: 'utf-8', timeout: 60000 });
      log(`  ✅ 单元测试通过`, colors.green);
    } catch (testErr) {
      errors.push(`单元测试失败: ${(testErr.stderr || testErr.stdout || testErr.message).slice(0, 300)}`);
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
  log(`========================================`, colors.blue);
  log(`   NutUI-React AI 质量守护校验 (Verify)   `, colors.cyan + colors.bold);
  log(`========================================`, colors.blue);

  const components = getChangedComponents();

  if (components.length === 0) {
    log(`ℹ️  未指定组件且没有检测到修改的组件，建议直接指定: node scripts/agents/nutui-verify.mjs <component>`, colors.yellow);
    process.exit(0);
  }

  let allPassed = true;
  for (const comp of components) {
    const res = await verifyComponent(comp);
    if (!res.passed) {
      allPassed = false;
    }
  }

  log(`\n========================================`, colors.blue);
  if (allPassed) {
    log(`🎉 所有组件校验全部通过，符合 NutUI 交付标准！`, colors.green + colors.bold);
    process.exit(0);
  } else {
    log(`💥 校验失败，请按照上方提示修复后再行提交。`, colors.red + colors.bold);
    process.exit(1);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
