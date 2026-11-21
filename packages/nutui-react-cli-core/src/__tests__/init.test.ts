import { describe, expect, it } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { runInit } from '../commands/init.js'
import type { CliConfig } from '../config.js'

describe('init command', () => {
  it('initializes AGENTS.md, .cursorrules, .claude/CLAUDE.md and skills in target directory', () => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'nutui-init-test-'))
    const mockSkillsDir = path.join(tmpDir, 'source-skills')
    fs.mkdirSync(path.join(mockSkillsDir, 'nutui-react'), { recursive: true })
    fs.writeFileSync(
      path.join(mockSkillsDir, 'nutui-react/SKILL.md'),
      '# Mock Skill'
    )

    const config: CliConfig = {
      binName: 'nutui-react',
      cliPkgName: '@nutui/nutui-react-cli',
      npmPackageName: '@nutui/nutui-react',
      platform: 'h5',
      libLabel: 'NutUI React（H5）',
      demoLabel: 'H5',
      version: '4.1.0',
      dataDir: '',
      skillsDir: mockSkillsDir,
      langs: ['zh', 'en'],
      defaultLang: 'zh',
      langLabel: { zh: '中文', en: '英文' },
      mcp: { serverName: 'nutui-react', toolPrefix: 'nutui_' },
    }

    runInit({
      config,
      targetDir: tmpDir,
      force: true,
    })

    const agentsMd = fs.readFileSync(path.join(tmpDir, 'AGENTS.md'), 'utf-8')
    expect(agentsMd).toContain('# NutUI AI Coding Guidelines')
    expect(agentsMd).toContain('nutui-react info <ComponentName> --dense')
    expect(agentsMd).toContain('nutui-react token <ComponentName> --dense')

    const cursorRules = fs.readFileSync(
      path.join(tmpDir, '.cursorrules'),
      'utf-8'
    )
    expect(cursorRules).toContain('nutui-react info <Component> --dense')

    const claudeMd = fs.readFileSync(
      path.join(tmpDir, '.claude/CLAUDE.md'),
      'utf-8'
    )
    expect(claudeMd).toContain('nutui-react info <Component> --dense')

    const installedSkill = fs.readFileSync(
      path.join(tmpDir, '.cursor/skills/nutui-react/SKILL.md'),
      'utf-8'
    )
    expect(installedSkill).toBe('# Mock Skill')

    // Clean up
    fs.rmSync(tmpDir, { recursive: true, force: true })
  })
})
