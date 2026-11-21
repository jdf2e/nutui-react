#!/usr/bin/env node

/**
 * NutUI-React GitHub 研发提效与巡检助手 (github-copilot-hub.mjs)
 *
 * 功能模块：
 *  1. status / report : 全景巡检（可合并 PR 绿灯清单、卡点 PR 诊断、零回复待跟进 Issue）
 *  2. pr-ready        : 专项筛选满足合并条件的 PR（CI 全绿 + 无冲突 + 非 Draft），支持桌面通知与 Webhook 推送
 *  3. review <pr>     : 拉取指定 PR 的 Diff 与文件，执行本地质量门禁与规范扫描，输出评审报告（支持 --post 同步到 GitHub）
 *  4. issue <num>     : 拉取指定 Issue 详情，自动检索匹配的本地组件源码与测试文件，生成诊断与修复上下文
 */

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execSync, execFileSync } from 'node:child_process';
import https from 'node:https';

const ROOT_DIR = process.cwd();
const PACKAGES_DIR = path.join(ROOT_DIR, 'src', 'packages');
const REPO = process.env.GITHUB_REPO || 'jdf2e/nutui-react';

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bold: '\x1b[1m'
};

function c(text, color = colors.reset) {
  return `${color}${text}${colors.reset}`;
}

function appendStepSummary(markdown) {
  if (process.env.GITHUB_STEP_SUMMARY) {
    try {
      fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdown + '\n\n', 'utf-8');
    } catch {
      // ignore
    }
  }
}

/**
 * 自动检查 gh CLI 与获取可用的 GitHub Token：
 * 1. 检查是否安装了 gh CLI
 * 2. 检查当前环境变量中的 GITHUB_TOKEN 是否有效（若存在失效的 GITHUB_TOKEN 则自动剔除再试）
 * 3. 若未登录 gh，在 macOS 下自动回退读取 Keychain 中的 GitHub OAuth 凭证
 * 4. 若均不可用，给出跨平台清晰的安装与登录指引
 */
function resolveGitHubEnv() {
  const env = { ...process.env };

  // 1. 检查 gh 是否安装
  try {
    execSync('gh --version', { stdio: 'ignore', env });
  } catch {
    console.error(c(`\n❌ 未检测到 GitHub CLI (gh) 工具！`, colors.red + colors.bold));
    console.error(c(`👉 请先安装 gh CLI:`, colors.yellow));
    console.error(`   - macOS:   brew install gh`);
    console.error(`   - Windows: winget install --id GitHub.cli`);
    console.error(`   - Linux:   参考 https://github.com/cli/cli#installation\n`);
    process.exit(1);
  }

  // 2. 直接用当前环境检查 gh auth status
  try {
    execSync('gh auth status', { stdio: 'ignore', env });
    return env;
  } catch {
    // 如果环境变量里存在过期的 GITHUB_TOKEN，剔除后再测一次 gh 原生登录态
    if (env.GITHUB_TOKEN) {
      delete env.GITHUB_TOKEN;
      try {
        execSync('gh auth status', { stdio: 'ignore', env });
        return env;
      } catch {
        // 继续往下尝试 Keychain
      }
    }
  }

  // 3. 尝试从 Git Credential Helper (macOS Keychain 等) 自动提取凭证
  try {
    const credOut = execSync(
      'printf "protocol=https\\nhost=github.com\\n" | git credential fill',
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'], timeout: 3000 }
    );
    const match = credOut.match(/^password=(.+)$/m);
    if (match && match[1]) {
      env.GITHUB_TOKEN = match[1].trim();
      execSync('gh auth status', { stdio: 'ignore', env });
      return env;
    }
  } catch {
    // ignore
  }

  // 4. 引导用户登录
  console.error(c(`\n❌ 当前尚未登录 GitHub CLI (gh) 或本地 Token 已过期！`, colors.red + colors.bold));
  console.error(c(`👉 请在终端运行以下命令完成一键登录授权：`, colors.yellow));
  console.error(c(`   gh auth login\n`, colors.cyan + colors.bold));
  process.exit(1);
}

const GH_ENV = resolveGitHubEnv();

function assertPositiveId(id, label = '编号') {
  const str = String(id || '').trim();
  if (!/^[1-9]\d*$/.test(str)) {
    console.error(c(`❌ 无效的 ${label}: "${id}"（必须为正整数，如 3600）`, colors.red));
    process.exit(1);
  }
  return str;
}

function runGhJson(argsInput) {
  const args = Array.isArray(argsInput) ? argsInput : argsInput.trim().split(/\s+/);
  try {
    const out = execFileSync('gh', args, {
      encoding: 'utf-8',
      env: GH_ENV,
      stdio: ['pipe', 'pipe', 'pipe'],
      maxBuffer: 20 * 1024 * 1024
    });
    return JSON.parse(out);
  } catch (err) {
    console.error(c(`❌ 执行 gh ${args.join(' ')} 失败: ${err.stderr || err.message}`, colors.red));
    process.exit(1);
  }
}

function runGhText(argsInput) {
  const args = Array.isArray(argsInput) ? argsInput : argsInput.trim().split(/\s+/);
  try {
    return execFileSync('gh', args, {
      encoding: 'utf-8',
      env: GH_ENV,
      stdio: ['pipe', 'pipe', 'pipe'],
      maxBuffer: 20 * 1024 * 1024
    });
  } catch (err) {
    console.error(c(`❌ 执行 gh ${args.join(' ')} 失败: ${err.stderr || err.message}`, colors.red));
    process.exit(1);
  }
}

function withTempMarkdownFile(prefix, content, fn) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `nutui-${prefix}-`));
  const tmpFile = path.join(tmpDir, 'message.md');
  fs.writeFileSync(tmpFile, content, 'utf-8');
  try {
    return fn(tmpFile);
  } finally {
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch {
      // ignore
    }
  }
}

/**
 * 分析单个 PR 的 CI 与可合并状态
 */
function analyzePrStatus(pr) {
  const checks = pr.statusCheckRollup || [];
  const totalChecks = checks.length;
  const passedChecks = [];
  const failedChecks = [];
  const pendingChecks = [];

  for (const item of checks) {
    const name = item.name || item.context || 'unknown-check';
    const state = item.conclusion || item.state || '';
    const status = item.status || '';

    if (state === 'SUCCESS' || state === 'NEUTRAL' || state === 'SKIPPED') {
      passedChecks.push(name);
    } else if (
      ['FAILURE', 'ERROR', 'TIMED_OUT', 'ACTION_REQUIRED', 'CANCELLED', 'STARTUP_FAILURE', 'STALE'].includes(state)
    ) {
      failedChecks.push(name);
    } else if (status === 'IN_PROGRESS' || status === 'QUEUED' || state === 'PENDING' || state === '') {
      pendingChecks.push(name);
    } else {
      failedChecks.push(`${name} (${state})`);
    }
  }

  const isBot = pr.author?.is_bot || (pr.author?.login || '').includes('renovate') || (pr.author?.login || '').includes('dependabot');
  const noConflict = pr.mergeable === 'MERGEABLE';
  const hasConflict = pr.mergeable === 'CONFLICTING';
  const allChecksGreen =
    totalChecks > 0 &&
    passedChecks.length === totalChecks &&
    failedChecks.length === 0 &&
    pendingChecks.length === 0;
  const changesRequested = pr.reviewDecision === 'CHANGES_REQUESTED';

  // 核心判定：非 Draft + 明确无冲突 (MERGEABLE) + 至少有 1 项 CI 且全部明确通过 + 未被 Request Changes
  const isMergeReady = !pr.isDraft && noConflict && allChecksGreen && !changesRequested;

  return {
    number: pr.number,
    title: pr.title,
    author: pr.author?.login || 'unknown',
    isBot,
    isDraft: pr.isDraft,
    baseRefName: pr.baseRefName || '',
    headRefName: pr.headRefName || '',
    mergeable: pr.mergeable,
    reviewDecision: pr.reviewDecision || 'NONE',
    updatedAt: pr.updatedAt ? pr.updatedAt.slice(0, 10) : '',
    url: pr.url,
    totalChecks,
    passedCount: passedChecks.length,
    failedChecks,
    pendingChecks,
    isMergeReady
  };
}

/**
 * 发送 macOS 原生桌面通知
 */
function sendMacNotification(title, subtitle, message) {
  try {
    const script = `display notification ${JSON.stringify(message)} with title ${JSON.stringify(title)} subtitle ${JSON.stringify(subtitle)} sound name "Glass"`;
    execSync(`osascript -e '${script.replace(/'/g, "'\\''")}'`, { stdio: 'ignore' });
    console.log(c(`🔔 已发送 macOS 桌面系统通知！`, colors.green));
  } catch {
    // ignore if non-mac or blocked
  }
}

/**
 * 发送 Webhook 通知 (支持京东咚咚 / 飞书 / 钉钉 / 企业微信)
 */
function sendWebhookNotification(webhookUrl, markdownText) {
  return new Promise((resolve) => {
    try {
      const urlObj = new URL(webhookUrl);
      let payload;

      if (
        webhookUrl.includes('chat.jd.com') ||
        webhookUrl.includes('timline') ||
        webhookUrl.includes('erp.jd.com') ||
        webhookUrl.includes('jd.com')
      ) {
        // 京东咚咚群自定义机器人标准格式 (支持 markdown 与 text 双兼容)
        payload = {
          msgtype: 'markdown',
          markdown: {
            title: 'NutUI-React PR/Issue 巡检通知',
            text: markdownText,
            content: markdownText
          },
          text: {
            content: markdownText
          }
        };
      } else if (webhookUrl.includes('feishu') || webhookUrl.includes('larksuite')) {
        payload = {
          msg_type: 'text',
          content: { text: markdownText }
        };
      } else if (webhookUrl.includes('qyapi.weixin.qq.com')) {
        payload = {
          msgtype: 'markdown',
          markdown: { content: markdownText }
        };
      } else if (webhookUrl.includes('dingtalk.com')) {
        payload = {
          msgtype: 'markdown',
          markdown: { title: 'NutUI PR 巡检通知', text: markdownText }
        };
      } else {
        // 默认通用格式
        payload = {
          msgtype: 'text',
          text: { content: markdownText },
          content: markdownText
        };
      }

      const body = JSON.stringify(payload);
      let settled = false;
      const done = () => {
        if (!settled) {
          settled = true;
          clearTimeout(timer);
          resolve();
        }
      };

      const req = https.request(
        {
          hostname: urlObj.hostname,
          port: urlObj.port || 443,
          path: urlObj.pathname + urlObj.search,
          method: 'POST',
          timeout: 10000,
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(body)
          }
        },
        (res) => {
          res.resume();
          console.log(c(`📤 Webhook 推送完成 (HTTP ${res.statusCode})`, colors.green));
          done();
        }
      );

      const timer = setTimeout(() => {
        req.destroy(new Error('Webhook request timed out after 10s'));
      }, 10000);

      req.on('timeout', () => {
        req.destroy(new Error('Socket timeout'));
      });
      req.on('error', (e) => {
        console.error(c(`❌ Webhook 推送失败: ${e.message}`, colors.red));
        done();
      });
      req.write(body);
      req.end();
    } catch (e) {
      console.error(c(`❌ Webhook URL 解析失败: ${e.message}`, colors.red));
      resolve();
    }
  });
}

/**
 * 1. 检查所有 Open PR 并筛选可合并列表 & 阻塞列表
 */
async function cmdPrReady(options = {}) {
  console.log(c(`\n==================================================================`, colors.blue));
  console.log(c(`🚀 [NutUI-React] 正在巡检仓库 (${REPO}) 的 Open PR 状态...`, colors.cyan + colors.bold));
  console.log(c(`==================================================================\n`, colors.blue));

  const rawPrs = runGhJson(
    `pr list --repo ${REPO} --limit ${options.limit || 25} --json number,title,author,isDraft,baseRefName,headRefName,mergeable,reviewDecision,statusCheckRollup,updatedAt,url`
  );

  const analyzed = rawPrs.map(analyzePrStatus);
  const readyPrs = analyzed.filter((p) => p.isMergeReady);
  const blockedHumanPrs = analyzed.filter((p) => !p.isMergeReady && !p.isBot);
  const blockedBotPrs = analyzed.filter((p) => !p.isMergeReady && p.isBot);

  // 1) 打印可合并 PR (绿灯区)
  console.log(c(`🟢 一、满足合并条件的 PR（CI 全绿 & 无冲突，共 ${readyPrs.length} 个）`, colors.green + colors.bold));
  console.log(c(`------------------------------------------------------------------`, colors.gray));
  if (readyPrs.length === 0) {
    console.log(c(`  暂无完全满足合并条件的 PR。`, colors.yellow));
  } else {
    for (const pr of readyPrs) {
      console.log(
        `  ✅ ${c(`#${pr.number}`, colors.green + colors.bold)} [${c(pr.author, colors.cyan)}] ${c(pr.title, colors.bold)} (${c(`-> ${pr.baseRefName}`, colors.gray)})`
      );
      console.log(
        `     └─ 检查项: ${c(`${pr.passedCount}/${pr.totalChecks} 通过`, colors.green)} | 合并状态: ${c(pr.mergeable, colors.green)} | 更新于: ${pr.updatedAt}`
      );
      console.log(`     └─ 链接: ${c(pr.url, colors.blue)}`);
    }
  }

  // 2) 打印开发者提交但存在卡点/未跑 CI 的 PR
  console.log(c(`\n🟡 二、待处理 / 卡点中的开发者 PR（共 ${blockedHumanPrs.length} 个）`, colors.yellow + colors.bold));
  console.log(c(`------------------------------------------------------------------`, colors.gray));
  if (blockedHumanPrs.length === 0) {
    console.log(c(`  无卡点中的开发者 PR。`, colors.gray));
  } else {
    for (const pr of blockedHumanPrs) {
      let reason = '';
      if (pr.isDraft) {
        reason = c(`📝 Draft 草稿状态`, colors.gray);
      } else if (pr.failedChecks.length > 0) {
        reason = c(`❌ 失败门禁: [${pr.failedChecks.join(', ')}]`, colors.red);
      } else if (pr.pendingChecks.length > 0) {
        reason = c(`⏳ 运行中: [${pr.pendingChecks.join(', ')}]`, colors.yellow);
      } else if (pr.totalChecks === 0) {
        reason = c(`⚪ 未触发 CI 检查 (分支: -> ${pr.baseRefName})`, colors.gray);
      } else if (pr.mergeable === 'CONFLICTING') {
        reason = c(`💥 存在代码冲突 (CONFLICTING)`, colors.red);
      } else if (pr.mergeable === 'UNKNOWN') {
        reason = c(`🔄 合并性计算中 (mergeable=UNKNOWN，GitHub 正在后台重算)`, colors.yellow);
      } else {
        reason = c(`⏳ 待人工 Review 确认 (${pr.reviewDecision})`, colors.yellow);
      }
      console.log(
        `  🔸 ${c(`#${pr.number}`, colors.yellow + colors.bold)} [${c(pr.author, colors.cyan)}] ${pr.title}`
      );
      console.log(`     └─ 状态: ${reason} | 链接: ${c(pr.url, colors.blue)}`);
    }
  }

  // 3) 机器人依赖更新 PR 汇总
  if (blockedBotPrs.length > 0) {
    console.log(
      c(`\n🤖 三、Renovate / Bot 依赖更新阻断汇总（共 ${blockedBotPrs.length} 个因单测/门禁未合入）`, colors.magenta + colors.bold)
    );
    console.log(
      c(`  包含 PR: ${blockedBotPrs.map((p) => `#${p.number}`).join(', ')}`, colors.gray)
    );
  }

  // 桌面通知 & Webhook 推送
  if (options.notify && readyPrs.length > 0) {
    const prNums = readyPrs.map((p) => `#${p.number}`).join(', ');
    sendMacNotification(
      'NutUI-React PR 合并提醒',
      `发现 ${readyPrs.length} 个 PR 已满足合并条件`,
      `可合并 PR: ${prNums} (${readyPrs[0].title})`
    );
  }

  const webhookUrl = options.webhook || process.env.NUTUI_WEBHOOK_URL;
  if (webhookUrl && readyPrs.length > 0) {
    const lines = [
      `🟢 【NutUI-React 可合并 PR 提醒】当前共 ${readyPrs.length} 个 PR 已通过全部门禁且无冲突：`,
      ...readyPrs.map((p) => `- #${p.number} [@${p.author}] ${p.title} (-> ${p.baseRefName})\n  ${p.url}`)
    ];
    await sendWebhookNotification(webhookUrl, lines.join('\n'));
  }

  // 输出 GitHub Actions Step Summary
  const summaryLines = [
    `## 🚀 NutUI-React PR 自动化巡检看板`,
    `### 🟢 一、满足合并条件的 PR（共 ${readyPrs.length} 个）`,
    readyPrs.length === 0
      ? `> 暂无完全满足合并条件的 PR。`
      : `| PR | 作者 | 标题 | 目标分支 | CI 状态 | 更新日期 |\n| :---: | :--- | :--- | :---: | :---: | :---: |\n` +
        readyPrs
          .map(
            (p) =>
              `| [#${p.number}](${p.url}) | @${p.author} | ${p.title} | \`${p.baseRefName}\` | ✅ ${p.passedCount}/${p.totalChecks} | ${p.updatedAt} |`
          )
          .join('\n'),
    `\n### 🟡 二、待处理 / 卡点中的开发者 PR（共 ${blockedHumanPrs.length} 个）`,
    blockedHumanPrs.length === 0
      ? `> 无卡点中的开发者 PR。`
      : blockedHumanPrs
          .map(
            (p) =>
              `- [#${p.number}](${p.url}) [@${p.author}] **${p.title}** (\`-> ${p.baseRefName}\`) — ${
                p.failedChecks.length > 0
                  ? `❌ 失败: \`${p.failedChecks.join(', ')}\``
                  : p.totalChecks === 0
                    ? `⚪ 未触发 CI`
                    : `⏳ 待完成`
              }`
          )
          .join('\n')
  ];
  appendStepSummary(summaryLines.join('\n\n'));

  return { readyPrs, blockedHumanPrs, blockedBotPrs };
}

/**
 * 2. 巡检待回复 / 待修复的 Open Issues
 */
async function cmdIssuesTriage(options = {}) {
  console.log(c(`\n==================================================================`, colors.blue));
  console.log(c(`📬 [NutUI-React] 正在巡检仓库 (${REPO}) 的 Open Issues...`, colors.cyan + colors.bold));
  console.log(c(`==================================================================\n`, colors.blue));

  const issues = runGhJson(
    `issue list --repo ${REPO} --limit ${options.limit || 15} --json number,title,author,labels,createdAt,comments,body,url`
  );

  // 获取本地所有组件目录名，用于自动归属组件
  const localComponents = fs.existsSync(PACKAGES_DIR)
    ? fs.readdirSync(PACKAGES_DIR).filter((f) => fs.statSync(path.join(PACKAGES_DIR, f)).isDirectory())
    : [];

  for (const issue of issues) {
    if (issue.author?.is_bot || issue.title === 'Dependency Dashboard') continue;

    const commentCount = (issue.comments || []).length;
    const bodyText = issue.body || '';
    const pkgMatch = bodyText.match(/@nutui\/[a-zA-Z0-9_-]+/g);
    const verMatch = bodyText.match(/\b\d+\.\d+\.\d+(?:-[a-zA-Z0-9._-]+)?\b/g);
    const hasExplicitPackage = Boolean(pkgMatch && pkgMatch.length > 0);
    const hasExplicitVersion = Boolean(verMatch && verMatch.length > 0);

    const textToMatch = `${issue.title} ${bodyText}`.toLowerCase();
    const matchedComps = localComponents.filter((comp) => {
      if (comp.length <= 2) return false;
      const regex = new RegExp(`\\b${comp}\\b`, 'i');
      return regex.test(textToMatch) || issue.title.toLowerCase().includes(comp);
    });

    // 判断 Issue 类型
    let category = '🔍 Bug / 待排查';
    if (textToMatch.includes('icons-react')) {
      category = '🎨 图标库 (@nutui/icons-react-taro) 关联问题';
    } else if (textToMatch.includes('feature') || textToMatch.includes('建议') || textToMatch.includes('支持')) {
      category = '✨ Feature / 功能诉求';
    }

    const statusBadge =
      commentCount === 0
        ? c(`[🚨 0 回复 - 待首响]`, colors.red + colors.bold)
        : c(`[💬 ${commentCount} 条回复]`, colors.green);

    console.log(`  ${statusBadge} ${c(`#${issue.number}`, colors.cyan + colors.bold)} ${c(issue.title, colors.bold)}`);
    console.log(
      `     └─ 提问者: @${issue.author?.login} | 创建时间: ${issue.createdAt.slice(0, 10)} | 分类: ${category}`
    );
    console.log(
      `     └─ 包名与版本: ${hasExplicitPackage ? pkgMatch[0] : '⚠️ 缺失包名'} / ${hasExplicitVersion ? verMatch[0] : '⚠️ 缺失版本号'}`
    );
    console.log(
      `     └─ 关联本地组件: ${matchedComps.length > 0 ? c(matchedComps.map((m) => `src/packages/${m}`).join(', '), colors.yellow) : c('未匹配到单一组件', colors.gray)}`
    );
    console.log(`     └─ 链接: ${c(issue.url, colors.blue)}\n`);

    // 若开启了 --auto-triage 且该 Issue 尚无任何回复、并且缺少包名或版本号，自动在云端/本地发送首响引导
    if (options.autoTriage && commentCount === 0 && (!hasExplicitPackage || !hasExplicitVersion)) {
      const compHint =
        matchedComps.length > 0
          ? `我们已初步将该问题关联至组件模块：${matchedComps.map((m) => `\`src/packages/${m}\``).join(', ')}。`
          : '';
      const autoReplyBody = [
        `> 🤖 **说明：本回复由AI生成，我们会定时跟进。**`,
        ``,
        `您好 @${issue.author?.login}，感谢反馈！${compHint}`,
        ``,
        `为了确保修复补丁能准确发布到您使用的版本分支（如 \`v3.x\` / \`v4.x\`）并评估对跨端与包体积的影响，烦请补充确认以下信息：`,
        `- **完整包名**：（例如 \`@nutui/nutui-react\`、\`@nutui/nutui-react-taro\` 或 \`@nutui/icons-react-taro\`）`,
        `- **具体版本号**：（例如 \`3.0.24\` 或 \`4.0.0-beta.14\`）`,
        `- **最小复现代码片段或复现步骤**`,
        ``,
        `补充后我们的定时巡检工作流将自动跟进排查与修复！`
      ].join('\n');

      withTempMarkdownFile(`auto-triage-${issue.number}`, autoReplyBody, (tmpFile) => {
        runGhText(['issue', 'comment', String(issue.number), '--repo', REPO, '--body-file', tmpFile]);
        console.log(c(`     ✅ [Auto-Triage] 已为缺失版本/包名的 Issue #${issue.number} 自动发送信息补充引导回复！`, colors.green + colors.bold));
      });
    }
  }
}

/**
 * 3. 针对单个远程 PR 进行本地 AI 规范 + 代码深度评审
 */
async function cmdReviewPr(rawPrNumber, options = {}) {
  const prNumber = assertPositiveId(rawPrNumber, 'PR 编号');

  console.log(c(`\n==================================================================`, colors.blue));
  console.log(c(`🧐 [NutUI-React] 正在对 PR #${prNumber} 执行远程 Diff 深度审查...`, colors.cyan + colors.bold));
  console.log(c(`==================================================================\n`, colors.blue));

  let pr = runGhJson([
    'pr',
    'view',
    prNumber,
    '--repo',
    REPO,
    '--json',
    'number,title,author,isDraft,baseRefName,headRefName,headRefOid,files,additions,deletions,mergeable,reviewDecision,statusCheckRollup,body,url'
  ]);
  let diffText = runGhText(['pr', 'diff', prNumber, '--repo', REPO]);

  // 校验 headRefOid 一致性，避免在 pr view 与 pr diff 之间产生并发新提交导致快照错位
  const verifyPr = runGhJson([
    'pr',
    'view',
    prNumber,
    '--repo',
    REPO,
    '--json',
    'number,title,author,isDraft,baseRefName,headRefName,headRefOid,files,additions,deletions,mergeable,reviewDecision,statusCheckRollup,body,url'
  ]);
  if (verifyPr.headRefOid !== pr.headRefOid) {
    pr = verifyPr;
    diffText = runGhText(['pr', 'diff', prNumber, '--repo', REPO]);
  }
  const reviewedHeadOid = pr.headRefOid;

  const files = (pr.files || []).map((f) => f.path);
  const components = Array.from(
    new Set(
      files
        .map((f) => {
          const m = f.match(/^src\/packages\/([^/]+)\//);
          return m ? m[1] : null;
        })
        .filter(Boolean)
    )
  );

  const findings = [];
  const highlights = [];

  // 规则 1：单组件 PR 原则
  if (components.length > 1) {
    findings.push({
      level: '🔴 Blocker',
      rule: '单组件 PR 原则',
      detail: `本次 PR 同时修改了 ${components.length} 个组件 (${components.join(', ')})，违反单组件原子 PR 规范。`
    });
  } else if (components.length === 1) {
    highlights.push(`✅ **单组件原则**：仅聚焦于 \`${components[0]}\` 单个组件。`);
  }

  // 规则 2：双端对称修改检查 (.tsx 与 .taro.tsx)
  for (const comp of components) {
    const touchedH5 = files.includes(`src/packages/${comp}/${comp}.tsx`);
    const touchedTaro = files.includes(`src/packages/${comp}/${comp}.taro.tsx`);
    if (touchedH5 && !touchedTaro) {
      findings.push({
        level: '🟡 Warning',
        rule: 'H5/Taro 双端同步检查',
        detail: `修改了 \`${comp}.tsx\` (H5)，但未修改 \`${comp}.taro.tsx\` (Taro)，请确认小程序端是否需要同步适配。`
      });
    } else if (!touchedH5 && touchedTaro) {
      findings.push({
        level: '🟡 Warning',
        rule: 'H5/Taro 双端同步检查',
        detail: `修改了 \`${comp}.taro.tsx\` (Taro)，但未同步修改 \`${comp}.tsx\` (H5)，请确认是否为小程序专属逻辑。`
      });
    } else if (touchedH5 && touchedTaro) {
      highlights.push(`✅ **双端对称**：H5 (\`${comp}.tsx\`) 与 Taro (\`${comp}.taro.tsx\`) 均已同步修改。`);
    }
  }

  // 规则 3：Diff 内容静态扫描（DOM 越界、scale-px(0px)、console.log 残留、any 类型）
  let currentFile = '';
  for (const line of diffText.split('\n')) {
    if (line.startsWith('+++ b/')) {
      currentFile = line.slice(6).trim();
      continue;
    }
    if (!line.startsWith('+') || line.startsWith('+++')) continue;
    const addedCode = line.slice(1);
    if (addedCode.trim().startsWith('//') || addedCode.trim().startsWith('*')) continue;

    // Taro 端裸调 window / document
    if (currentFile.endsWith('.taro.tsx') && /(?<!typeof\s+)(window|document)\.[a-zA-Z]/.test(addedCode)) {
      findings.push({
        level: '🔴 Blocker',
        rule: 'Taro 端 DOM/BOM 隔离红线',
        detail: `\`${currentFile}\` 新增代码直接调用了 \`window/document\` (\`${addedCode.trim()}\`)，在小程序环境下会导致运行时异常。`
      });
    }

    // SCSS scale-px(0px)
    if (currentFile.endsWith('.scss') && /scale-px\(0(px)?\)/.test(addedCode)) {
      findings.push({
        level: '🔴 Blocker',
        rule: 'SCSS 0 值规范',
        detail: `\`${currentFile}\` 使用了 \`scale-px(0px)\`，请直接使用纯数字 \`0\`。`
      });
    }

    // 组件源码残留 console.log
    if (
      currentFile.startsWith('src/packages/') &&
      !currentFile.includes('demo') &&
      !currentFile.includes('__test') &&
      /\bconsole\.log\s*\(/.test(addedCode)
    ) {
      findings.push({
        level: '🟡 Warning',
        rule: '调试代码清理',
        detail: `\`${currentFile}\` 存在新增的 \`console.log\` 调试语句 (\`${addedCode.trim()}\`)，建议合并前移除。`
      });
    }

    // 显式 any 类型检查
    if (
      currentFile.startsWith('src/packages/') &&
      (currentFile.endsWith('.ts') || currentFile.endsWith('.tsx')) &&
      !currentFile.includes('__test') &&
      /:\s*any\b/.test(addedCode)
    ) {
      findings.push({
        level: '🟡 Warning',
        rule: 'TypeScript 类型严谨性',
        detail: `\`${currentFile}\` 新增了显式 \`any\` 类型 (\`${addedCode.trim()}\`)，建议使用明确的类型定义。`
      });
    }
  }

  // 规则 4：CI 状态汇总
  const prStatus = analyzePrStatus(pr);
  if (prStatus.isMergeReady) {
    highlights.push(`✅ **CI 门禁全绿**：全部 ${prStatus.totalChecks} 项自动化检查已通过，且无代码冲突。`);
  } else if (prStatus.failedChecks.length > 0) {
    findings.push({
      level: '🔴 Blocker',
      rule: 'CI 自动化门禁未通过',
      detail: `以下 CI 检查失败：\`${prStatus.failedChecks.join(', ')}\``
    });
  }

  const blockerCount = findings.filter((f) => f.level.includes('Blocker')).length;
  const verdict =
    blockerCount === 0 && prStatus.isMergeReady
      ? '🟢 **建议批准合并 (LGTM / Merge Ready)**'
      : blockerCount > 0
        ? '🔴 **存在阻断项，需修改后再合并 (Changes Requested)**'
        : '🟡 **代码无阻断项，建议关注提示项或等待 CI 完成**';

  console.log(`📌 PR 标题: ${c(`#${pr.number} ${pr.title}`, colors.bold)} (@${pr.author?.login})`);
  console.log(`🌿 分支流向: ${c(`${pr.headRefName} -> ${pr.baseRefName}`, colors.cyan)}`);
  console.log(`📊 变更规模: ${files.length} 个文件 (${c(`+${pr.additions}`, colors.green)} / ${c(`-${pr.deletions}`, colors.red)})`);
  console.log(`🏆 评审结论: ${verdict}\n`);

  if (highlights.length > 0) {
    console.log(c(`✨ 检查亮点:`, colors.green + colors.bold));
    highlights.forEach((h) => console.log(`  - ${h}`));
    console.log('');
  }

  if (findings.length > 0) {
    console.log(c(`⚠️ 发现的问题 (${findings.length} 项):`, colors.yellow + colors.bold));
    findings.forEach((f, i) => {
      console.log(`  ${i + 1}. [${f.level}] **${f.rule}**: ${f.detail}`);
    });
    console.log('');
  } else {
    console.log(c(`🎉 未发现代码规范或跨端违规项！\n`, colors.green));
  }

  // 如果传入 --post，则可将评审结论作为评论发布到 GitHub PR
  if (options.post) {
    const latestHead = runGhJson(['pr', 'view', prNumber, '--repo', REPO, '--json', 'headRefOid']);
    const headChanged = latestHead.headRefOid && reviewedHeadOid && latestHead.headRefOid !== reviewedHeadOid;
    const effectiveVerdict = headChanged
      ? `🟡 **评审期间检测到新提交 (${reviewedHeadOid.slice(0, 7)} -> ${latestHead.headRefOid.slice(0, 7)})，请等待新提交 CI 完成**`
      : verdict;

    const mdBody = [
      `### 🤖 NutUI 本地 AI 深度评审报告`,
      `- **评审提交**：\`${(reviewedHeadOid || '').slice(0, 7)}\``,
      `- **综合判定**：${effectiveVerdict}`,
      `- **涉及组件**：${components.length ? components.map((x) => `\`${x}\``).join(', ') : '非组件源码'}`,
      `- **变更统计**：${files.length} 个文件 (+${pr.additions} / -${pr.deletions})`,
      '',
      highlights.length ? `#### ✨ 亮点通过项\n${highlights.map((h) => `- ${h}`).join('\n')}\n` : '',
      findings.length
        ? `#### 🔍 审查发现项\n${findings.map((f) => `- **[${f.level}] ${f.rule}**：${f.detail}`).join('\n')}`
        : `#### 🎉 静态与跨端一致性扫描无异常`
    ]
      .filter(Boolean)
      .join('\n');

    withTempMarkdownFile(`pr-review-${prNumber}`, mdBody, (tmpFile) => {
      runGhText(['pr', 'comment', prNumber, '--repo', REPO, '--body-file', tmpFile]);
      console.log(c(`✅ 已将评审报告同步发布至 GitHub PR #${prNumber} 评论区！`, colors.green + colors.bold));
    });
  }
}

/**
 * 4. 针对单个 Issue 生成深度诊断上下文（自动定位组件源码与问题点）
 */
async function cmdInspectIssue(rawIssueNumber, options = {}) {
  const issueNumber = assertPositiveId(rawIssueNumber, 'Issue 编号');

  console.log(c(`\n==================================================================`, colors.blue));
  console.log(c(`🩺 [NutUI-React] 正在对 Issue #${issueNumber} 执行源码定位与诊断...`, colors.cyan + colors.bold));
  console.log(c(`==================================================================\n`, colors.blue));

  const issue = runGhJson([
    'issue',
    'view',
    issueNumber,
    '--repo',
    REPO,
    '--json',
    'number,title,author,createdAt,labels,body,comments,url'
  ]);

  const bodyText = issue.body || '';
  // 提取或检验 Issue 中是否包含明确的包名与版本号
  const pkgMatch = bodyText.match(/@nutui\/[a-zA-Z0-9_-]+/g);
  const verMatch = bodyText.match(/\b\d+\.\d+\.\d+(?:-[a-zA-Z0-9._-]+)?\b/g);
  const hasExplicitPackage = Boolean(pkgMatch && pkgMatch.length > 0);
  const hasExplicitVersion = Boolean(verMatch && verMatch.length > 0);

  console.log(`📌 标题: ${c(`#${issue.number} ${issue.title}`, colors.bold)}`);
  console.log(`👤 作者: @${issue.author?.login} | 创建时间: ${issue.createdAt.slice(0, 10)}`);
  console.log(`📦 识别到的包名: ${hasExplicitPackage ? c(Array.from(new Set(pkgMatch)).join(', '), colors.green) : c('⚠️ 未明确提供包名 (@nutui/nutui-react 或 @nutui/nutui-react-taro)', colors.red)}`);
  console.log(`🏷️  识别到的版本: ${hasExplicitVersion ? c(Array.from(new Set(verMatch)).join(', '), colors.green) : c('⚠️ 未明确提供版本号 (需在回复中引导补充版本与包信息)', colors.red)}`);
  console.log(`🔗 链接: ${c(issue.url, colors.blue)}\n`);
  console.log(c(`📝 Issue 描述摘要:`, colors.cyan + colors.bold));
  console.log(c(`------------------------------------------------------------------`, colors.gray));
  console.log((issue.body || '（无内容）').trim().slice(0, 1000));
  console.log(c(`------------------------------------------------------------------\n`, colors.gray));

  // 自动匹配本地组件目录
  const localComponents = fs.existsSync(PACKAGES_DIR)
    ? fs.readdirSync(PACKAGES_DIR).filter((f) => fs.statSync(path.join(PACKAGES_DIR, f)).isDirectory())
    : [];
  const textToMatch = `${issue.title} ${issue.body || ''}`.toLowerCase();
  const matchedComps = localComponents.filter((comp) => {
    if (comp.length <= 2) return false;
    return new RegExp(`\\b${comp}\\b`, 'i').test(textToMatch) || issue.title.toLowerCase().includes(comp);
  });

  if (matchedComps.length > 0) {
    console.log(c(`🎯 自动定位到的本地组件源码路径:`, colors.green + colors.bold));
    for (const comp of matchedComps) {
      const compDir = path.join(PACKAGES_DIR, comp);
      const files = fs.readdirSync(compDir);
      console.log(`  📦 组件 [${c(comp, colors.yellow + colors.bold)}] -> \`src/packages/${comp}/\``);
      console.log(`     └─ 核心文件: ${files.filter((f) => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.scss')).join(', ')}`);
    }
  } else {
    console.log(c(`ℹ️ 未在 src/packages/ 下匹配到同名组件，可能涉及跨包依赖（如 @nutui/icons-react-taro）或全局构建配置。`, colors.yellow));
  }

  // 专项跨库检测：如果 Issue 涉及 @nutui/icons-react-taro / Skyline / Icon
  if (textToMatch.includes('icons-react') || textToMatch.includes('skyline') || matchedComps.includes('icon')) {
    console.log(c(`\n🔗 跨包生态关联诊断 (@nutui/icons-react-taro):`, colors.magenta + colors.bold));
    const iconPkgPath = path.join(ROOT_DIR, 'node_modules', '@nutui', 'icons-react-taro', 'package.json');
    if (fs.existsSync(iconPkgPath)) {
      const iconPkg = JSON.parse(fs.readFileSync(iconPkgPath, 'utf-8'));
      console.log(`  - 当前仓库安装版本: ${c(`@nutui/icons-react-taro@${iconPkg.version}`, colors.cyan)}`);
      console.log(`  - 模板实现路径: \`node_modules/@nutui/icons-react-taro/src/IconTemplate.tsx\``);
    }
    const localIconsRepo = path.resolve(ROOT_DIR, '..', 'nutui-icons');
    if (fs.existsSync(localIconsRepo)) {
      console.log(`  - 检测到本机兄弟源码仓库: ${c(localIconsRepo, colors.green)}`);
      if (textToMatch.includes('skyline')) {
        console.log(
          c(
            `  💡 [AI 根因知识库匹配]: 微信小程序 Skyline 渲染引擎不支持复杂的 CSS mask / -webkit-mask 合成或对未闭合矢量/伪元素会产生黑边/边框渲染异常；需检查 @nutui/icons-react-taro 的 Skyline 适配分支 (feat/skyline-icons) 或 IconFont / SVG <Image svg> 模式切换！`,
            colors.yellow
          )
        );
      }
    }
  }

  // 输出 AI Issue 回复/修复方案质量门禁 Checklist（强制评估包体积、双端兼容性与可落地性）
  console.log(c(`\n🛡️  [AI Issue 方案与回复质量核验清单 (Response Gate)]:`, colors.cyan + colors.bold));
  console.log(`  1. 📦 ${c('包体积影响评估', colors.bold)}: 方案是否要求用户额外引入大体积文件（如 358KB 的全量 style_iconfont.css）或新增运行时依赖？必须优先提供【零体积膨胀】方案！`);
  console.log(`  2. 🔄 ${c('H5 / Taro / Harmony 多端兼容', colors.bold)}: 临时 Workaround 或源码修复是否会破坏 WebView / H5 / 鸿蒙端现有表现？`);
  console.log(`  3. 🛠️  ${c('直接源码闭环判断', colors.bold)}: 若属于本仓库或兄弟仓库 (@nutui/icons-react-taro) 的明确缺陷，应直接生成修复分支/PR 并附上预计修复版本，而非仅停留在口头解释。`);

  if (options.replyFile && fs.existsSync(options.replyFile)) {
    const AI_SIGNATURE = `> 🤖 *注：本回复由 AI 辅助生成，我们会定时跟进。*`;
    let replyContent = fs.readFileSync(options.replyFile, 'utf-8').trim();

    // 若缺少明确的包名或版本号，自动在回复末尾提醒补充
    if (!hasExplicitPackage || !hasExplicitVersion) {
      const missingNotice = `\n\n---\n💡 **补充信息提醒**：为了确保修复补丁能准确发布到您使用的版本分支（如 \`v3.x\` / \`v4.x\`），烦请补充确认您当前使用的 **完整包名**（如 \`@nutui/nutui-react\` 或 \`@nutui/nutui-react-taro\`）及 **具体版本号**。`;
      if (!replyContent.includes('补充信息提醒') && !replyContent.includes('具体版本号')) {
        replyContent += missingNotice;
      }
    }

    // 强制携带 AI 生成与定时跟进标识
    if (!replyContent.includes('本回复由AI生成') && !replyContent.includes('本回复由 AI')) {
      replyContent = `${AI_SIGNATURE}\n\n${replyContent}`;
    }

    withTempMarkdownFile(`issue-reply-${issueNumber}`, replyContent, (finalTmpFile) => {
      const out = runGhText(['issue', 'comment', issueNumber, '--repo', REPO, '--body-file', finalTmpFile]);
      console.log(c(`\n✅ 已将回复内容发布至 GitHub Issue #${issueNumber}！`, colors.green + colors.bold));
      if (out.trim()) console.log(`🔗 评论链接: ${c(out.trim(), colors.blue)}`);
    });
  }
}

/**
 * 5. 针对因单测覆盖率 (<95%) 被拦截的 PR 执行本地自愈诊断 (heal-pr)
 *    自动拉取远程 PR 改动文件，在隔离 worktree 中跑 vitest --coverage，输出精确的未覆盖行号与对应源码上下文
 */
async function cmdHealPr(rawPrNumber) {
  const prNumber = assertPositiveId(rawPrNumber, 'PR 编号');

  console.log(c(`\n==================================================================`, colors.blue));
  console.log(c(`🩹 [NutUI-React] 正在对卡点 PR #${prNumber} 执行单测覆盖率自愈诊断...`, colors.cyan + colors.bold));
  console.log(c(`==================================================================\n`, colors.blue));

  const pr = runGhJson([
    'pr',
    'view',
    prNumber,
    '--repo',
    REPO,
    '--json',
    'number,title,author,isDraft,baseRefName,headRefName,headRefOid,files,statusCheckRollup,url'
  ]);

  const files = (pr.files || []).map((f) => f.path);
  const components = Array.from(
    new Set(
      files
        .map((f) => {
          const m = f.match(/^src\/packages\/([a-zA-Z0-9_-]+)\//);
          return m ? m[1] : null;
        })
        .filter(Boolean)
    )
  );

  const status = analyzePrStatus(pr);
  console.log(`📌 PR: ${c(`#${pr.number} ${pr.title}`, colors.bold)} (@${pr.author?.login})`);
  console.log(`📦 涉及组件: ${components.length > 0 ? c(components.join(', '), colors.yellow + colors.bold) : '无组件源码变更'}`);
  console.log(`🚦 失败门禁: ${status.failedChecks.length > 0 ? c(status.failedChecks.join(', '), colors.red) : c('无', colors.green)}\n`);

  if (components.length === 0) {
    console.log(c(`ℹ️ 该 PR 未涉及 src/packages/ 下的组件修改，无需补充组件单测。`, colors.yellow));
    return;
  }

  const tmpWorktree = fs.mkdtempSync(path.join(os.tmpdir(), `nutui-heal-pr-${prNumber}-`));
  const repoUrl = `https://github.com/${REPO}.git`;
  let worktreeAdded = false;

  try {
    console.log(c(`⏳ 1. 正在从 ${repoUrl} 拉取远程 PR #${prNumber} 至独立隔离环境 (${tmpWorktree})...`, colors.cyan));
    execFileSync('git', ['fetch', repoUrl, `pull/${prNumber}/head`], { stdio: 'ignore' });
    const fetchedSha = execFileSync('git', ['rev-parse', 'FETCH_HEAD'], { encoding: 'utf-8' }).trim();
    execFileSync('git', ['worktree', 'add', '--detach', tmpWorktree, fetchedSha], { stdio: 'ignore' });
    worktreeAdded = true;
    fs.symlinkSync(path.join(ROOT_DIR, 'node_modules'), path.join(tmpWorktree, 'node_modules'), 'dir');

    let hasTestFailure = false;

    for (const comp of components) {
      console.log(c(`⏳ 2. 正在运行组件 [${comp}] 的单元测试与 v8 覆盖率分析...`, colors.cyan));
      let output = '';
      let cmdFailed = false;
      try {
        output = execFileSync('npx', ['vitest', 'run', `src/packages/${comp}`, '--coverage'], {
          cwd: tmpWorktree,
          encoding: 'utf-8',
          stdio: ['pipe', 'pipe', 'pipe'],
          timeout: 120000
        });
      } catch (err) {
        cmdFailed = true;
        output = (err.stdout || '') + '\n' + (err.stderr || '') + '\n' + (err.message || '');
      }

      // 提取 packages/<comp> 下的覆盖率明细行
      const lines = output.split('\n');
      const tableLines = lines.filter(
        (l) => l.includes(`packages/${comp}`) || l.includes(`${comp}.tsx`) || l.includes(`File`) || l.includes(`---`)
      );
      const hasCoverageTable = tableLines.some((l) => l.includes('% Stmts') || l.includes(`packages/${comp}`));

      if (!hasCoverageTable) {
        hasTestFailure = true;
        console.error(c(`\n❌ 组件 [${comp}] 未能生成覆盖率报告，测试执行或配置异常:`, colors.red + colors.bold));
        console.error(output.trim().slice(-2000));
        continue;
      }

      if (cmdFailed) {
        hasTestFailure = true;
      }

      console.log(c(`\n📊 组件 [${comp}] 覆盖率诊断报表:`, colors.yellow + colors.bold));
      console.log(c(`------------------------------------------------------------------`, colors.gray));
      tableLines.forEach((l) => console.log(`  ${l}`));
      console.log(c(`------------------------------------------------------------------`, colors.gray));

      // 解析具体哪个文件哪些行未覆盖，并打印对应源码上下文，方便 AI 或开发者秒补单测
      const fileRowRegex = new RegExp(`^\\s*([a-zA-Z0-9_.-]+\\.tsx?)\\s*\\|[^|]+\\|[^|]+\\|[^|]+\\|\\s*([\\d.]+)\\s*\\|\\s*([^|\\n]+)`, 'gm');
      let match;
      while ((match = fileRowRegex.exec(output)) !== null) {
        const fileName = match[1].trim();
        const lineCov = parseFloat(match[2]);
        const uncoveredStr = match[3].replace(/\.\.\./g, '').trim();
        const targetFile = path.join(tmpWorktree, 'src', 'packages', comp, fileName);

        if (fs.existsSync(targetFile) && uncoveredStr && lineCov < 95) {
          console.log(
            c(`\n🎯 待补测文件: src/packages/${comp}/${fileName} (当前行覆盖率: ${lineCov}%，目标: >= 95%)`, colors.red + colors.bold)
          );
          console.log(c(`📍 未覆盖行号区间: ${uncoveredStr}`, colors.yellow));

          const srcLines = fs.readFileSync(targetFile, 'utf-8').split('\n');
          const ranges = uncoveredStr.split(',').map((s) => s.trim()).filter(Boolean);
          for (const r of ranges.slice(0, 5)) {
            const [startStr, endStr] = r.split('-');
            const start = Math.max(1, parseInt(startStr, 10) - 2);
            const end = Math.min(srcLines.length, parseInt(endStr || startStr, 10) + 2);
            if (isNaN(start) || isNaN(end)) continue;
            console.log(c(`\n   --- 源码上下文 (L${start}~L${end}) ---`, colors.cyan));
            for (let ln = start; ln <= end; ln++) {
              const isUncovered = ln >= parseInt(startStr, 10) && ln <= parseInt(endStr || startStr, 10);
              const prefix = isUncovered ? c(`>> L${ln}:`, colors.red + colors.bold) : c(`   L${ln}:`, colors.gray);
              console.log(`   ${prefix} ${srcLines[ln - 1]}`);
            }
          }
        }
      }
    }

    if (hasTestFailure) {
      process.exitCode = 1;
    }
  } finally {
    try {
      if (worktreeAdded) {
        execFileSync('git', ['worktree', 'remove', tmpWorktree, '--force'], { stdio: 'ignore' });
      } else {
        fs.rmSync(tmpWorktree, { recursive: true, force: true });
      }
    } catch {
      // ignore
    }
  }
}

async function main() {
  const args = process.argv.slice(2);
  const subCmd = args[0] || 'status';
  const targetId = args.find((a, idx) => idx > 0 && !a.startsWith('-'));
  const notify = args.includes('--notify');
  const post = args.includes('--post');
  const autoTriage = args.includes('--auto-triage');
  const webhookArg = args.find((a) => a.startsWith('--webhook='));
  const webhook = webhookArg ? webhookArg.replace('--webhook=', '').trim() : null;
  const replyFileArg = args.find((a) => a.startsWith('--reply-file='));
  const replyFile = replyFileArg ? replyFileArg.replace('--reply-file=', '').trim() : null;

  if (subCmd === 'status' || subCmd === 'report') {
    await cmdPrReady({ notify, webhook });
    await cmdIssuesTriage({ autoTriage });
  } else if (subCmd === 'pr-ready') {
    await cmdPrReady({ notify, webhook });
  } else if (subCmd === 'issues') {
    await cmdIssuesTriage({ autoTriage });
  } else if (subCmd === 'review') {
    await cmdReviewPr(targetId, { post });
  } else if (subCmd === 'issue') {
    await cmdInspectIssue(targetId, { replyFile });
  } else if (subCmd === 'heal-pr') {
    await cmdHealPr(targetId);
  } else if (subCmd === 'test-webhook') {
    const testUrl = webhook || targetId || process.env.NUTUI_WEBHOOK_URL;
    if (!testUrl) {
      console.error(c(`❌ 请通过 --webhook=<URL> 或环境变量 NUTUI_WEBHOOK_URL 提供咚咚/飞书/企微机器人 Webhook 地址！`, colors.red));
      process.exit(1);
    }
    await sendWebhookNotification(
      testUrl,
      `🟢 **【NutUI-React 自动化巡检连通性测试】**\n- 状态：咚咚/群机器人 Webhook 接入成功！\n- 仓库：\`${REPO}\``
    );
  } else {
    console.log(`用法:
  node scripts/agents/github-copilot-hub.mjs status              # 全景巡检（可合并 PR + 待跟进 Issue）
  node scripts/agents/github-copilot-hub.mjs pr-ready [--notify] # 检查满足合并条件的 PR 并发送通知
  node scripts/agents/github-copilot-hub.mjs review <PR号>       # 对指定 PR 进行远程 Diff 规范与跨端评审
  node scripts/agents/github-copilot-hub.mjs heal-pr <PR号>      # 对卡在 95% 覆盖率门禁的 PR 进行隔离单测诊断并定位未覆盖源码
  node scripts/agents/github-copilot-hub.mjs issue <Issue号>     # 诊断指定 Issue 并定位本地组件源码
  node scripts/agents/github-copilot-hub.mjs test-webhook <URL>  # 测试咚咚 / 飞书 / 企微机器人 Webhook 连通性`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
