#!/usr/bin/env python3
"""
NutUI-React Issue Resolver — Two-Phase Claude CLI Orchestrator

Phase 1: Analyze (read-only, fast) → structured JSON assessment
Phase 2: Execute (write-enabled) → code fix, test, commit

CLAUDE.md is auto-loaded by the claude CLI, so project conventions
are injected without needing to repeat them in prompts.
"""
import os
import sys
import subprocess
import json
import re

PHASE1_TIMEOUT = 120
PHASE2_TIMEOUT = 480


def extract_json_block(text):
    matches = re.findall(r'```json\s*\n(.*?)\n```', text, re.DOTALL)
    if matches:
        try:
            return json.loads(matches[-1])
        except json.JSONDecodeError:
            pass
    try:
        return json.loads(text)
    except (json.JSONDecodeError, ValueError):
        pass
    return None


def run_claude(prompt, allowed_tools, timeout):
    result = subprocess.run(
        ["claude", "-p", prompt, "--allowedTools", allowed_tools],
        capture_output=True,
        text=True,
        timeout=timeout,
    )
    if result.returncode != 0:
        raise RuntimeError(f"Claude exited {result.returncode}: {result.stderr}")
    return result.stdout


def main():
    issue_id = os.environ.get("ISSUE_ID", "")
    issue_title = os.environ.get("ISSUE_TITLE", "")
    issue_body = os.environ.get("ISSUE_BODY", "")

    if not issue_id or not issue_title:
        print("Error: ISSUE_ID and ISSUE_TITLE required")
        sys.exit(1)

    branch_name = f"fix/issue-{issue_id}"

    # ==================== Phase 1: Analysis ====================
    phase1_prompt = f"""Analyze this GitHub issue. Do NOT modify any files.

## Issue #{issue_id}: {issue_title}
{issue_body}

## Task
1. Identify affected component(s) and source files
2. Determine root cause or what needs to be implemented
3. Assess complexity and whether this can be auto-fixed

## Output
Respond with ONLY a JSON code block:
```json
{{
  "verdict": "auto_fixable | needs_human | unclear",
  "component": "component-name",
  "root_cause": "explanation of the problem",
  "files_to_modify": ["src/packages/..."],
  "fix_description": "what to change and why",
  "compatibility": "backward compatible | breaking change | new feature",
  "rejection_reason": "only if verdict is not auto_fixable"
}}
```"""

    print(f"[Phase 1] Analyzing issue #{issue_id}...")
    try:
        output = run_claude(phase1_prompt, "Bash,Read", PHASE1_TIMEOUT)
    except subprocess.TimeoutExpired:
        print("[Phase 1] Analysis timed out")
        sys.exit(1)
    except RuntimeError as e:
        print(f"[Phase 1] Error: {e}")
        sys.exit(1)

    analysis = extract_json_block(output)
    if not analysis:
        print("[Phase 1] Failed to parse JSON output")
        print(output[:500])
        sys.exit(1)

    print(f"[Phase 1] Verdict: {analysis.get('verdict')}")
    print(f"[Phase 1] Component: {analysis.get('component')}")
    print(f"[Phase 1] Root cause: {analysis.get('root_cause', '')[:200]}")

    # ==================== Decision Gate ====================
    verdict = analysis.get("verdict", "unclear")

    if verdict == "needs_human":
        print(f"[Decision] Issue #{issue_id} requires human intervention")
        print(f"  Reason: {analysis.get('rejection_reason')}")
        sys.exit(0)

    if verdict == "unclear":
        print(f"[Decision] Issue #{issue_id} lacks sufficient information")
        sys.exit(0)

    if verdict != "auto_fixable":
        print(f"[Decision] Unknown verdict: {verdict}")
        sys.exit(1)

    # ==================== Phase 2: Execution ====================
    analysis_json = json.dumps(analysis, ensure_ascii=False, indent=2)

    phase2_prompt = f"""Execute this pre-analyzed fix for Issue #{issue_id}.

## Analysis
```json
{analysis_json}
```

## Execution Steps
1. Modify the files listed in files_to_modify (add related files if strictly necessary)
2. Run tests: `npx vitest run src/packages/{analysis.get('component', '')}`
3. If tests fail, fix and retry (max 2 attempts)
4. Create branch and commit:
   - `git checkout -b {branch_name}`
   - `git add .`
   - Commit with Angular format: `fix({analysis.get('component', '')}): <summary>`

Start immediately. Do not ask questions."""

    print(f"[Phase 2] Executing fix...")
    try:
        output = run_claude(phase2_prompt, "Bash,Read,Edit,Write", PHASE2_TIMEOUT)
    except subprocess.TimeoutExpired:
        print("[Phase 2] Execution timed out")
        sys.exit(1)
    except RuntimeError as e:
        print(f"[Phase 2] Error: {e}")
        sys.exit(1)

    print(output)
    print(f"[Done] Fix for issue #{issue_id} completed")


if __name__ == "__main__":
    main()
