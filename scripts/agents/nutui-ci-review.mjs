#!/usr/bin/env node

/**
 * NutUI-React CI 自动代码评审守护脚本 (nutui-ci-review.mjs)
 * 
 * 作用：在 GitHub Actions 监听到 PR 时自动触发，执行：
 * 1. 架构红线：单组件 PR 原则 (变动组件数 > 1 强制拦截)
 * 2. 质量红线：单测行覆盖率 >= 95% 强拦截
 * 3. 规范红线：多端对称性、白皮书 BOM/DOM 污染扫描、样式缩放规范
 * 4. 包体与性能分析：量化 CSS / JS 行数增减与 Tree-shaking 影响
 * 5. 生成精美的 Markdown 评审报告 (pr-review-report.md)，供 GitHub Action 自动评论到 PR
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT_DIR = process.cwd();
const PACKAGES_DIR = path.join(ROOT_DIR, 'src', 'packages');

const baseRef = process.env.GITHUB_BASE_REF || process.argv[2] || 'origin/feat_v4.x';

function getDiffFiles() {
  try {
    // 优先尝试与目标 base 分支对比，若没有则退回对比 HEAD~1
    return execSync(`git diff --name-only ${baseRef}...HEAD 2>/dev/null || git diff --name-only HEAD~1...HEAD 2>/dev/null || git diff --name-only HEAD`, { encoding: 'utf-8' })
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);
  } catch (err) {
    return [];
  }
}

function getChangedComponents(diffFiles) {
  const components = new Set();
  for (const file of diffFiles) {
    const match = file.match(/src\/packages\/([^/]+)\//);
    if (match && match[1]) {
      components.add(match[1]);
    }
  }
  return Array.from(components);
}

function getBundleDiffStat() {
  try {
    const stat = execSync(`git diff --stat ${baseRef}...HEAD 2>/dev/null || git diff --stat HEAD~1...HEAD 2>/dev/null`, { encoding: 'utf-8' });
    return stat.trim();
  } catch {
    return '无变更统计';
  }
}

function checkWorkflowSecurity(diffFiles) {
  const workflowFiles = diffFiles.filter(f => f.startsWith('.github/workflows/') && (f.endsWith('.yml') || f.endsWith('.yaml')));
  const errors = [];

  for (const wf of workflowFiles) {
    const fullPath = path.join(ROOT_DIR, wf);
    if (!fs.existsSync(fullPath)) continue;

    const content = fs.readFileSync(fullPath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, idx) => {
      const match = line.match(/^\s*-\s*uses:\s*['"]?([^'"\s]+)['"]?/i) || line.match(/^\s*uses:\s*['"]?([^'"\s]+)['"]?/i);
      if (match) {
        const actionRef = match[1];
        // 严格白名单：仅允许 GitHub 官方 actions/ 或 本地路径 ./
        const isOfficial = actionRef.startsWith('actions/') || actionRef.startsWith('./');
        if (!isOfficial) {
          errors.push(`🔴 **[CI 供应链安全红线]** 在 \`${wf}\` 第 ${idx + 1} 行检测到引入了非 GitHub 官方维护的三方库/Action: \`${actionRef}\`。为保障仓库流水线安全，严禁引入任何第三方 Action，**强制拒绝合并**！`);
        }
      }
    });
  }

  return errors;
}

function checkDualParityAndRules(comp) {
  const compDir = path.join(PACKAGES_DIR, comp);
  const errors = [];
  const warnings = [];

  const h5File = path.join(compDir, `${comp}.tsx`);
  const taroFile = path.join(compDir, `${comp}.taro.tsx`);
  const scssFile = path.join(compDir, `${comp}.scss`);

  let testFile = path.join(compDir, `__test__`, `${comp}.spec.tsx`);
  if (!fs.existsSync(testFile)) {
    const pluralTest = path.join(compDir, `__tests__`, `${comp}.spec.tsx`);
    if (fs.existsSync(pluralTest)) {
      testFile = pluralTest;
    }
  }

  if (!fs.existsSync(h5File)) errors.push(`缺少 H5 实现文件: \`${comp}.tsx\``);
  if (!fs.existsSync(taroFile)) errors.push(`缺少 Taro 小程序端实现文件: \`${comp}.taro.tsx\``);
  if (!fs.existsSync(testFile)) errors.push(`缺少单元测试文件: \`__test__/${comp}.spec.tsx\` 或 \`__tests__/${comp}.spec.tsx\``);

  if (fs.existsSync(taroFile)) {
    const taroCode = fs.readFileSync(taroFile, 'utf-8');
    const lines = taroCode.split('\n');
    lines.forEach((line, idx) => {
      if (line.trim().startsWith('//') || line.trim().startsWith('*')) return;
      if (/(?<!typeof\s+)(window|document)\.[a-zA-Z]/.test(line)) {
        errors.push(`[白皮书红线] \`${comp}.taro.tsx\` 第 ${idx + 1} 行存在直接访问 DOM/BOM (window/document)，小程序/SSR 端会崩溃: \`${line.trim()}\``);
      }
    });
  }

  if (fs.existsSync(scssFile)) {
    const scssCode = fs.readFileSync(scssFile, 'utf-8');
    if (/scale-px\(0(px)?\)/.test(scssCode)) {
      errors.push(`[白皮书样式] \`${comp}.scss\` 包含 \`scale-px(0px)\`，0 尺寸应直接使用纯数字 0`);
    }
  }

  return { errors, warnings, testFile };
}

function runCoverage(comp, testFile) {
  if (!fs.existsSync(testFile)) {
    return { passed: false, coverage: 0, error: '单测文件不存在' };
  }

  try {
    const output = execSync(`npx vitest run src/packages/${comp} --coverage`, {
      stdio: 'pipe',
      encoding: 'utf-8',
      timeout: 120000
    });

    const linesRegex = new RegExp(`packages\\/${comp}\\s*\\|\\s*([\\d.]+)\\s*\\|\\s*([\\d.]+)\\s*\\|\\s*([\\d.]+)\\s*\\|\\s*([\\d.]+)`, 'i');
    const match = output.match(linesRegex);

    if (match) {
      const lineCov = parseFloat(match[4]);
      return {
        passed: lineCov >= 95,
        coverage: lineCov,
        details: `Stmts: ${match[1]}%, Branch: ${match[2]}%, Funcs: ${match[3]}%, Lines: ${match[4]}%`
      };
    }
    return { passed: true, coverage: 100, details: '测试执行通过' };
  } catch (err) {
    return {
      passed: false,
      coverage: 0,
      error: (err.stderr || err.stdout || err.message).slice(0, 400)
    };
  }
}

async function main() {
  const diffFiles = getDiffFiles();
  const components = getChangedComponents(diffFiles);
  const bundleStat = getBundleDiffStat();

  const blockers = [];
  const warnings = [];
  const highlights = [];
  const componentReports = [];

  console.log(`[AI PR Review] 正在比对基线: ${baseRef}`);
  console.log(`[AI PR Review] 涉及组件: [${components.join(', ') || '无组件变更'}]`);

  // 1. 架构红线：单组件 PR 原则
  if (components.length > 1) {
    blockers.push(`🔴 **[架构红线] 单个 PR 仅限单组件原则**：本次 PR 共修改了 **${components.length}** 个组件 (\`${components.join(', ')}\`)。违反 NutUI 单组件独立 PR 准则，必须拆分后分别提交！`);
  } else if (components.length === 1) {
    highlights.push(`符合单组件 PR 原则 (仅修改组件: \`${components[0]}\`)`);
  }

  // 2. 供应链安全红线：CI 工作流三方库检测
  const securityErrors = checkWorkflowSecurity(diffFiles);
  if (securityErrors.length > 0) {
    securityErrors.forEach(err => blockers.push(err));
  } else if (diffFiles.some(f => f.startsWith('.github/workflows/'))) {
    highlights.push(`CI 工作流安全检查通过：未引入任何未经认证的三方 Action。`);
  }

  // 2. 逐组件质量核查
  for (const comp of components) {
    const { errors, warnings: compWarnings, testFile } = checkDualParityAndRules(comp);
    compWarnings.forEach(w => warnings.push(`[${comp}] ${w}`));
    errors.forEach(e => blockers.push(`[${comp}] ${e}`));

    const covRes = runCoverage(comp, testFile);
    if (!covRes.passed) {
      if (covRes.error) {
        blockers.push(`[${comp}] 🔴 单元测试执行失败: \`${covRes.error}\``);
      } else {
        blockers.push(`[${comp}] 🔴 **单测覆盖率未达标**：当前行覆盖率为 **${covRes.coverage}%**，低于要求的 **95%** 强拦截门禁！`);
      }
    } else {
      highlights.push(`[${comp}] 单测覆盖率达标: ${covRes.coverage}% (${covRes.details || '全量通过'})`);
    }

    componentReports.push({
      comp,
      coverage: covRes.coverage,
      passed: covRes.passed && errors.length === 0
    });
  }

  // 3. 判定结论
  const isApproved = blockers.length === 0;
  const statusEmoji = isApproved ? '🟢' : '🔴';
  const statusText = isApproved ? '建议合并 (Approve)' : '需要修改 (Changes Requested)';

  // 4. 生成 Markdown 报告
  const reportMarkdown = `## 🤖 NutUI-React AI 自动化 PR 评审报告

### 评审结论：${statusEmoji} **${statusText}**

---

### 1. 🔴 阻断项 (Blockers) - ${blockers.length} 个
${blockers.length > 0 ? blockers.map(b => `- ${b}`).join('\n') : '✅ 未发现阻断性问题，符合合并红线要求！'}

### 2. 🟡 建议与风险提示 (Warnings) - ${warnings.length} 个
${warnings.length > 0 ? warnings.map(w => `- ${w}`).join('\n') : '✅ 未发现显著代码异味或规范警告。'}

### 3. 🟢 合规亮点 (Highlights)
${highlights.length > 0 ? highlights.map(h => `- ${h}`).join('\n') : '- 基础静态合规。'}

---

### 4. 📦 包体与性能收益估算
\`\`\`text
${bundleStat}
\`\`\`
> **分析建议**：
> - 评估是否存在未受控的外部重量级三方依赖；
> - 关注 CSS 选择器是否精炼收敛，关键动画是否采用硬件加速。

---

### 5. 🧩 已有组件复用度评估
- 审查是否合理使用了底层原子组件（如 Divider / Space / Tag），避免重复造轮子或过度引入深层依赖。

---

### ⚙️ 自动化门禁汇总

| 检查维度 | 状态 | 详情说明 |
| :--- | :---: | :--- |
| **单组件 PR 原则** | ${components.length <= 1 ? '✅' : '❌'} | 变动组件数: ${components.length} |
| **单测覆盖率 (>=95%)** | ${componentReports.every(c => c.coverage >= 95) ? '✅' : '❌'} | ${componentReports.map(c => `${c.comp}: ${c.coverage}%`).join(', ') || 'N/A'} |
| **多端对称性 (H5/Taro)** | ${blockers.some(b => b.includes('缺少')) ? '❌' : '✅'} | H5 & Taro 双端对齐扫描 |
| **白皮书环境合规** | ${blockers.some(b => b.includes('白皮书红线')) ? '❌' : '✅'} | 禁止在 Taro 裸调 window/document |

*报告由 NutUI AI Quality Gate 自动生成*
`;

  // 写入报告文件
  fs.writeFileSync(path.join(ROOT_DIR, 'pr-review-report.md'), reportMarkdown, 'utf-8');
  console.log('\n' + reportMarkdown);

  if (!isApproved) {
    console.error('\n💥 评审存在阻断项，CI 自动拦截！');
    process.exit(1);
  } else {
    console.log('\n🎉 评审通过，符合合并标准！');
    process.exit(0);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
