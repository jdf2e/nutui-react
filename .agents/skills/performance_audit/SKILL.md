# NutUI-React Performance Audit Skill

## Overview

This skill provides a unified workflow for auditing the performance, footprint, and codebase health of the NutUI-React component library.

## Commands

### `npm run performance:audit`

Executes all associated scripts and generates a Markdown report at `scripts/performance/audit-report.md`.

## Included Audits

1.  **Bundle Size Audit**: Calculates individual component file sizes (pre/post-gzip).
2.  **Tree-shaking Verification**: Validates the correct elimination of unused code during bundling.
3.  **Render Performance Audit**: Checks for unnecessary re-renders in React components.

## When to Run

- **Before major releases**: To ensure no regression in bundle size.
- **Reviewing new components**: To verify they align with the library's performance standards.
- **Refactoring core logic**: To ensure Tree-shaking is not accidentally broken.

## Reporting

The results are output to the terminal in a formatted Markdown table for easy copy-pasting into PR reviews or documentation.
