import os
import sys
import asyncio
import subprocess
from google.antigravity import Agent, LocalAgentConfig, ToolContext, types
import pydantic

# Define the structured output schema for the resolution summary
class FixSummary(pydantic.BaseModel):
    issue_id: str
    root_cause: str
    files_modified: list[str]
    tests_run: bool
    test_results: str
    pr_submitted: bool
    commit_hash: str | None = None

# Custom Tools for the Agent

def run_git_command(command: str) -> str:
    """Executes a git command in the repository.

    Args:
        command: The git command arguments to run (e.g., "status", "diff").
    """
    try:
        res = subprocess.run(
            ["git"] + command.split(),
            capture_output=True,
            text=True,
            check=True
        )
        return res.stdout or "Command executed successfully with empty output."
    except subprocess.CalledProcessError as e:
        return f"Error executing git command: {e.stderr}"

def run_test_suite() -> str:
    """Runs the vitest test suite to verify changes.
    """
    try:
        res = subprocess.run(
            ["npx", "vitest", "run"],
            capture_output=True,
            text=True,
            timeout=180
        )
        return res.stdout + "\n" + res.stderr
    except subprocess.TimeoutExpired:
        return "Test suite execution timed out."
    except Exception as e:
        return f"Error running tests: {str(e)}"

def git_create_branch_and_commit(issue_id: str, commit_message: str) -> str:
    """Creates a new git branch for the issue and commits all local changes.

    Args:
        issue_id: The ID of the issue (e.g., "3396").
        commit_message: The conventional commit message (e.g., "fix(datepicker): solve range bounds").
    """
    branch_name = f"fix/issue-{issue_id}"
    try:
        # Create and checkout branch
        subprocess.run(["git", "checkout", "-b", branch_name], check=True)
        # Stage all changes
        subprocess.run(["git", "add", "."], check=True)
        # Commit
        subprocess.run(["git", "commit", "-m", commit_message], check=True)
        return f"Successfully created branch {branch_name} and committed changes."
    except subprocess.CalledProcessError as e:
        return f"Error creating branch/commit: {e.stderr or str(e)}"

async def main():
    # Retrieve configuration from environment
    issue_id = os.environ.get("ISSUE_ID", "3396")
    issue_title = os.environ.get("ISSUE_TITLE", "DatePicker type time range boundary bug")
    issue_body = os.environ.get("ISSUE_BODY", "DatePicker fails to calculate minutes range for restricted hours under time/hour-minutes mode.")
    
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("CRITICAL: GEMINI_API_KEY environment variable is missing.")
        print("Please obtain an API key from Google AI Studio: https://aistudio.google.com/app/api-keys")
        sys.exit(1)

    print(f"🚀 Starting Antigravity Issue Resolver for Issue #{issue_id}...")
    
    # 1. Configure the Agent with standard capabilities, system instructions, and custom tools
    config = LocalAgentConfig(
        model="gemini-3.5-flash",
        api_key=api_key,
        system_instructions=(
            "You are an expert autonomous software engineer agent for the NutUI-React project.\n"
            "Your task is to analyze the provided GitHub issue, locate the bug in the codebase, "
            "implement a fix, verify it by running tests, and prepare a commit.\n\n"
            "CRITICAL RULES:\n"
            "1. NutUI-React uses dual H5 and Taro components (e.g., button.tsx and button.taro.tsx).\n"
            "   Any fix applied to one must be fully aligned in the other.\n"
            "2. Never use hardcoded colors or sizes; use HSL CSS Variables with default Fallbacks.\n"
            "3. Run the test suite using run_test_suite() to verify the fix."
        ),
        tools=[
            run_git_command,
            run_test_suite,
            git_create_branch_and_commit
        ],
        response_schema=FixSummary,
        capabilities=types.CapabilitiesConfig(
            enable_subagents=True  # Allows spawning subagents for modular tasks (e.g., writing tests)
        )
    )

    # 2. Launch the agent and run the resolution turn
    async with Agent(config=config) as agent:
        prompt = (
            f"Here is the issue details:\n"
            f"ID: {issue_id}\n"
            f"Title: {issue_title}\n"
            f"Description: {issue_body}\n\n"
            f"Please solve this issue. Walk through these steps:\n"
            f"1. Search the codebase for the relevant component files.\n"
            f"2. Edit the files to fix the issue.\n"
            f"3. Run the tests to ensure they pass.\n"
            f"4. Create a git branch and commit the fix.\n"
            f"5. Provide a summary of the actions taken."
        )

        response = await agent.chat(prompt)
        
        # 3. Retrieve and output structured JSON results
        data = await response.structured_output()
        print("\n✨ Issue Resolution Summary from Agent:")
        import json
        print(json.dumps(data, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    asyncio.run(main())
