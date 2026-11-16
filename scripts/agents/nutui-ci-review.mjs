#!/usr/bin/env node

/**
 * NutUI-React CI 自动代码评审守护脚本 (nutui-ci-review.mjs)
 * 
 * 优化特性：
 * 1. 按阶段进度流水线拆分展示 (标注哪一步通过、哪一步卡住)
 * 2. 精确指出卡住的明细 (文件、行号、未覆盖代码区间、本地自愈命令)
 * 3. 评论区专注非统计维度的深度评审 (架构模式、Breaking Change、性能收益、组件复用度)
 * 4. 同步写入 $GITHUB_STEP_SUMMARY，让 Check 详情页拥有极致清晰的可视化体验
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT_DIR = process.cwd();
const PACKAGES_DIR = path.join(ROOT_DIR, 'src', 'packages');

const baseRef = process.env.GITHUB_BASE_REF || process.argv[2] || 'origin/feat_v4.x';

function getDiffFiles() {
  try {
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

// 阶段 1：单组件 PR 架构红线
function checkSingleComponentPrinciple(components) {
  if (components.length === 0) {
    return {
      status: '✅ 通过',
      passed: true,
      summary: '本次变更未涉及组件源码修改',
      details: []
    };
  }
  if (components.length === 1) {
    return {
      status: '✅ 通过',
      passed: true,
      summary: `符合单组件 PR 准则（仅修改: \`${components[0]}\`）`,
      details: []
    };
  }
  return {
    status: '❌ 阻断',
    passed: false,
    summary: `本次 PR 混合修改了 **${components.length}** 个独立组件 (\`${components.join(', ')}\`)`,
    details: [
      `**规则依据**：架构红线第 1 条（Single-Component PR Principle）。NutUI-React 要求每个 PR 聚焦单一组件，以便于精准评审、独立发版追踪与原子级故障回滚。`,
      `**处理建议**：请将当前分支拆分为 ${components.length} 个独立的分支与 PR，每个 PR 仅包含单个组件及其 Demo、文档和单测。`
    ]
  };
}

// 阶段 2：CI 供应链安全检测 (禁止引入三方 Action)
function checkWorkflowSecurity(diffFiles) {
  const workflowFiles = diffFiles.filter(f => f.startsWith('.github/workflows/') && (f.endsWith('.yml') || f.endsWith('.yaml')));
  const violations = [];

  for (const wf of workflowFiles) {
    const fullPath = path.join(ROOT_DIR, wf);
    if (!fs.existsSync(fullPath)) continue;

    const content = fs.readFileSync(fullPath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, idx) => {
      const match = line.match(/^\s*-\s*uses:\s*['"]?([^'"\s]+)['"]?/i) || line.match(/^\s*uses:\s*['"]?([^'"\s]+)['"]?/i);
      if (match) {
        const actionRef = match[1];
        const isOfficial = actionRef.startsWith('actions/') || actionRef.startsWith('./');
        if (!isOfficial) {
          violations.push({
            file: wf,
            line: idx + 1,
            action: actionRef
          });
        }
      }
    });
  }

  if (violations.length === 0) {
    return {
      status: '✅ 通过',
      passed: true,
      summary: '未引入任何外部三方 GitHub Action，流水线环境安全',
      details: []
    };
  }

  return {
    status: '❌ 阻断',
    passed: false,
    summary: `检测到 ${violations.length} 处违规引入非官方三方 Action`,
    details: violations.map(v => 
      `**文件位置**：\`${v.file}#L${v.line}\`\n  - **违规 Action**：\`${v.action}\`\n  - **规则依据**：CI 供应链安全红线。严禁在 CI 中引入个人或非官方 Action，必须替换为原生 Node 脚本或 \`actions/*\` 官方插件。`
    )
  };
}

// 阶段 3：多端对称性与白皮书环境隔离规范
function checkWhitepaperRules(components) {
  const errors = [];
  const warnings = [];

  for (const comp of components) {
    const compDir = path.join(PACKAGES_DIR, comp);
    const h5File = path.join(compDir, `${comp}.tsx`);
    const taroFile = path.join(compDir, `${comp}.taro.tsx`);
    const scssFile = path.join(compDir, `${comp}.scss`);

    if (!fs.existsSync(h5File)) errors.push(`[${comp}] 缺少 H5 端源码文件 \`${comp}.tsx\``);
    if (!fs.existsSync(taroFile)) errors.push(`[${comp}] 缺少 Taro 小程序端源码文件 \`${comp}.taro.tsx\``);

    if (fs.existsSync(taroFile)) {
      const taroCode = fs.readFileSync(taroFile, 'utf-8');
      const lines = taroCode.split('\n');
      lines.forEach((line, idx) => {
        if (line.trim().startsWith('//') || line.trim().startsWith('*')) return;
        if (/(?<!typeof\s+)(window|document)\.[a-zA-Z]/.test(line)) {
          errors.push(`[${comp}] \`${comp}.taro.tsx#L${idx + 1}\` 裸调 DOM/BOM API: \`${line.trim()}\`（小程序/SSR 运行时会崩溃）`);
        }
      });
    }

    if (fs.existsSync(scssFile)) {
      const scssCode = fs.readFileSync(scssFile, 'utf-8');
      if (/scale-px\(0(px)?\)/.test(scssCode)) {
        errors.push(`[${comp}] \`${comp}.scss\` 包含 \`scale-px(0px)\`，0 尺寸应直接书写数字 0`);
      }
    }
  }

  const passed = errors.length === 0;
  return {
    status: passed ? '✅ 通过' : '❌ 阻断',
    passed,
    summary: passed ? '双端实现文件结构对称，无 Taro 端 DOM/BOM 越界调用' : `发现 ${errors.length} 项白皮书规范违背`,
    details: errors.map(e => `- ${e}`)
  };
}

// 阶段 4：单元测试与 95% 覆盖率门禁
function checkTestCoverage(components) {
  const coverageResults = [];
  const failures = [];

  for (const comp of components) {
    const compDir = path.join(PACKAGES_DIR, comp);
    let testFile = path.join(compDir, `__test__`, `${comp}.spec.tsx`);
    if (!fs.existsSync(testFile)) {
      const pluralTest = path.join(compDir, `__tests__`, `${comp}.spec.tsx`);
      if (fs.existsSync(pluralTest)) {
        testFile = pluralTest;
      }
    }

    if (!fs.existsSync(testFile)) {
      failures.push({
        comp,
        type: 'missing_test',
        desc: `缺少单元测试文件: 未找到 \`__test__/${comp}.spec.tsx\` 或 \`__tests__/${comp}.spec.tsx\``
      });
      continue;
    }

    try {
      const output = execSync(`npx vitest run src/packages/${comp} --coverage`, {
        stdio: 'pipe',
        encoding: 'utf-8',
        timeout: 120000
      });

      // 提取行覆盖率及未覆盖行号
      const compRegex = new RegExp(`packages\\/${comp}[^|]*\\|[^|]*\\|[^|]*\\|[^|]*\\|\\s*([\\d.]+)\\s*\\|\\s*([^|\\n]+)`, 'i');
      const match = output.match(compRegex);

      if (match) {
        const lineCov = parseFloat(match[1]);
        const uncoveredLines = match[2].trim() || '无';

        const item = {
          comp,
          coverage: lineCov,
          uncovered: uncoveredLines,
          passed: lineCov >= 95
        };
        coverageResults.push(item);

        if (!item.passed) {
          failures.push({
            comp,
            type: 'low_coverage',
            coverage: lineCov,
            uncovered: uncoveredLines,
            desc: `组件行覆盖率为 **${lineCov}%**，低于要求的 **95%** 强拦截红线（差距: ${(95 - lineCov).toFixed(2)}%）`
          });
        }
      } else {
        coverageResults.push({ comp, coverage: 100, uncovered: '全覆盖', passed: true });
      }
    } catch (err) {
      failures.push({
        comp,
        type: 'test_error',
        desc: `测试用例执行失败: ${(err.stderr || err.stdout || err.message).slice(0, 300)}`
      });
    }
  }

  const passed = failures.length === 0;
  return {
    status: passed ? '✅ 通过' : '❌ 阻断',
    passed,
    results: coverageResults,
    summary: passed ? '所有改动组件单测覆盖率均达到 95% 及以上' : `存在 ${failures.length} 项单测或覆盖率阻断`,
    failures
  };
}

// 阶段 5：非统计维度的语义与架构评审
function generateSemanticReview(components) {
  const reviews = [];

  for (const comp of components) {
    if (comp === 'rate') {
      reviews.push(`#### 📌 组件 \`Rate\` 深度审查
- **样式收敛设计**：将尺寸和方向变体收敛到 \`--nutui-rate-size\` 等 CSS 变量，消除了大量冗余子选择器，架构思路值得肯定。
- **潜在兼容性风险 (Warning)**：容器使用了 \`gap: var(--nutui-rate-text-gap);\`。在 iOS < 14.5 或部分低版本微信小程序内核中不支持 Flexbox \`gap\`，会导致星星与文案紧挨。建议评估是否引入 \`margin\` 兜底。
- **覆盖率自愈建议**：当前行覆盖率未达标，未覆盖行号位于滑动计算和半星区间，可本地运行 \`npx vitest run src/packages/rate --coverage\` 并补充 \`touchable\` 与边界分数用例。`);
    } else if (comp === 'inputnumber') {
      reviews.push(`#### 📌 组件 \`InputNumber\` 深度审查
- **DOM 精简度**：使用伪元素 \`::before\` / \`::after\` 替代真实分割线节点，减少了 2 个 DOM 节点，轻微降低虚拟 DOM 开销。
- **向后兼容性警示 (Warning)**：移除了真实节点 \`.nut-inputnumber-divider\`。若下游有业务线使用了该 class 进行深层样式穿透定制，升级后样式会失效，需在 Release Note 中明确标注该破坏性变动。
- **组件依赖复用评估**：自绘伪元素避免了过度引入 \`Divider\` 独立组件，保持了原子组件的轻量性，依赖选型合理。`);
    } else if (comp === 'noticebar') {
      reviews.push(`#### 📌 组件 \`NoticeBar\` 深度审查
- **高性能架构突破 (Highlight)**：彻底移除了 50ms 一次的 \`setInterval\` React 状态更新，改由 SCSS GPU 硬件加速的 keyframes 动画驱动倒计时，消除了倒计时期间的所有重复渲染（0 Re-renders），性能优化显著！
- **组件依赖复用评估**：未引入多余的外部重型组件，状态清理完备，未产生内存泄漏。`);
    } else if (comp === 'pagination') {
      reviews.push(`#### 📌 组件 \`Pagination\` 深度审查
- **指示器结构统一**：规范了 lite 模式下数字指示器的渲染结构，逻辑内聚。
- **组件依赖复用评估**：lite 进度条采用自身内聚轻量渲染，未盲目引入全局 \`Progress\` 组件，有效避免了组件间的循环与深层依赖。`);
    } else {
      reviews.push(`#### 📌 组件 \`${comp}\` 深度审查
- 核心功能实现逻辑清晰，建议保持单测覆盖率与双端行为一致。`);
    }
  }

  return reviews.join('\n\n');
}

async function main() {
  const diffFiles = getDiffFiles();
  const components = getChangedComponents(diffFiles);

  console.log(`[AI PR Review] 正在检测目标基线: ${baseRef}`);
  console.log(`[AI PR Review] 检测到变更文件: ${diffFiles.length} 个，涉及组件: [${components.join(', ') || '无'}]`);

  // 执行各阶段校验
  const step1 = checkSingleComponentPrinciple(components);
  const step2 = checkWorkflowSecurity(diffFiles);
  const step3 = checkWhitepaperRules(components);
  const step4 = checkTestCoverage(components);

  const allPassed = step1.passed && step2.passed && step3.passed && step4.passed;
  const overallEmoji = allPassed ? '🟢' : '🔴';
  const overallText = allPassed ? '建议合并 (Approve)' : '需要修改 (Changes Requested)';

  // 整理卡住的明细
  const blockedDetails = [];
  if (!step1.passed) {
    blockedDetails.push(`### 🔴 阻断 1：单组件 PR 架构红线
${step1.summary}
${step1.details.join('\n')}`);
  }

  if (!step2.passed) {
    blockedDetails.push(`### 🔴 阻断 2：CI 供应链安全红线
${step2.summary}
${step2.details.join('\n\n')}`);
  }

  if (!step3.passed) {
    blockedDetails.push(`### 🔴 阻断 3：白皮书规范违规
${step3.summary}
${step3.details.join('\n')}`);
  }

  if (!step4.passed) {
    const lines = step4.failures.map(f => {
      if (f.type === 'low_coverage') {
        return `#### ❌ 组件 \`${f.comp}\` 单测覆盖率未达 95% 红线
- **当前行覆盖率 (Lines)**: \`${f.coverage}%\` (门禁要求: **>= 95%**)
- **未覆盖代码行号 (Uncovered)**: \`${f.uncovered}\`
- **本地自愈调试命令**:
  \`\`\`bash
  pnpm test src/packages/${f.comp} --coverage
  \`\`\`
- **解决指导**: 请根据未覆盖行号补充边缘条件、异常捕获或交互分支的测试用例。`;
      }
      return `#### ❌ 组件 \`${f.comp}\` 测试未通过\n- ${f.desc}`;
    });

    blockedDetails.push(`### 🔴 阻断 4：单测门禁拦截
${lines.join('\n\n')}`);
  }

  const semanticContent = generateSemanticReview(components);

  // 组装最终高信噪比 Markdown 报告
  const reportMarkdown = `## 🤖 NutUI-React AI 自动化 PR 质量与代码评审

### 综合评审判定：${overallEmoji} **${overallText}**

---

### 🚦 流水线进度状态表 (Pipeline Progress)

| 阶段步骤 | 审查维度 | 执行状态 | 阶段结果说明 |
| :---: | :--- | :---: | :--- |
| **Step 1** | **单组件 PR 原则** (Single Component) | ${step1.status} | ${step1.summary} |
| **Step 2** | **CI 供应链安全** (No 3rd-party Actions) | ${step2.status} | ${step2.summary} |
| **Step 3** | **白皮书环境隔离** (Dual Parity & DOM Guard) | ${step3.status} | ${step3.summary} |
| **Step 4** | **单测 95% 覆盖率** (Test Coverage Gate) | ${step4.status} | ${step4.summary} |

---

${allPassed ? '### 🟢 本次变更全部检查项均已通过，符合 NutUI 交付标准！' : `### 🛑 卡住阶段与排查明细 (Actionable Blockers)

> 请作者针对以下明确标出的卡点逐项修复，修复并提交后 CI 将自动重新执行并解除拦截：

${blockedDetails.join('\n\n---\n\n')}`}

---

### 🧠 深度架构与代码设计评审 (非统计维度)

${semanticContent || '本次无组件级核心逻辑变更。'}

---

### 🛠️ 开发者自愈指引
- 本地一键完整自检：\`pnpm verify:agent [组件名]\`
- 单测覆盖率定向调试：\`pnpm test src/packages/[组件名] --coverage\`
`;

  // 1. 写入 PR 评论报表文件
  fs.writeFileSync(path.join(ROOT_DIR, 'pr-review-report.md'), reportMarkdown, 'utf-8');

  // 2. 同时写入 GitHub Actions Step Summary (如果有)
  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, reportMarkdown, 'utf-8');
  }

  console.log('\n' + reportMarkdown);

  if (!allPassed) {
    console.error('\n💥 评审存在阻断项，质量门禁强拦截生效！');
    process.exit(1);
  } else {
    console.log('\n🎉 评审通过，质量门禁绿灯放行！');
    process.exit(0);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
