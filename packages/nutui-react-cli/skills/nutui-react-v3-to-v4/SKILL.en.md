---
name: nutui-react-v3-to-v4
description: >
  Use when upgrading a project from NutUI React v3 (@nutui/nutui-react 3.x, H5) to v4 (4.x). Triggers on "upgrade NutUI React from v3 to v4", "migrate nutui v3 to v4", "bump @nutui/nutui-react to 4.0". The upgrade includes Props additions and removals, type entry points, enums, defaults, event and layout behavior, CSS classes, and Design Tokens. Distinguish breaking changes from compatible additions. Use the offline CLI's migrate / diff commands to identify affected components and rewrite per the latest official migration doc, without assuming whether APIs change or overlooking runtime and visual regressions.
allowed-tools:
  - Bash(nutui-react *)
  - Bash(npx -y @nutui/nutui-react-cli *)
  - Bash(which nutui-react)
  - Bash(grep *)
---

# NutUI React v3 → v4 Upgrade

You are upgrading a project from `@nutui/nutui-react` **3.x** to **4.x** (H5).

**Follow the latest official migration doc; do not assume the scope of Props or API changes.** v3→v4 includes breaking changes, compatible upgrades, and new capabilities. Check each component across these dimensions:

1. **Props / type entry points** — CountDown removes `millisecond` and adds `refreshInterval`; Popover adds `type`; ResultPage changes its type entry point. Additions are not automatically mandatory; removed usages need cleanup.
2. **Enums / defaults** — Empty's `size` / `status`, Popover's `theme`, and Toast / Skeleton's `duration`. Old enums may cause type errors; default changes usually do not. Preserve old behavior explicitly only when required by the project.
3. **Events / runtime / layout** — CountDown no longer fires `onPaused` at zero; ActionSheet starts honoring `position`; Cell titles become single-line ellipses.
4. **CSS classes / DOM structure** — Cell and ActionSheet class changes and Range bubble structure can invalidate custom overrides.
5. **Design Tokens** — added / removed CSS variables and changed defaults.
6. **Visual specifications** — spacing, typography, icon sizes, dark mode. Verify rendering even when no code change is needed.

Inspect actual usage, then determine edits from migration notes and API diffs. Do not invent renames or treat compatible additions as mandatory changes.

## Supporting tools

`@nutui/nutui-react-cli` — offline, metadata bundled. If not on PATH, call via npx:

```bash
which nutui-react || echo "use: npx -y @nutui/nutui-react-cli <command>"
```

Two key commands:

- `nutui-react migrate 3 4` — the **official migration doc** (authoritative, hand-written, filled in per-component alongside v4). This is the **primary basis** for rewrites.
- `nutui-react diff 3 4 <Component>` — **measured Props diff between the two versions' meta** (Props additions/removals and precise `old → new` for enums, defaults, types). Fills in API/default-level diffs the doc doesn't spell out.

They're **complementary**: migrate explains why and how to change (including event behavior, styles, classes, tokens); diff reports API differences recorded in metadata. Read both. An empty diff does not prove unchanged runtime behavior.

**The offline CLI reads bundled docs and metadata, not live updates; this skill's component-change summary is neither exhaustive nor fixed.** Follow the latest [official v3 → v4 migration guide](https://nutui.jd.com/h5/react/4x/#/zh-CN/guide/migrate-from-v3). If CLI output or the summary differs, check the CLI, bundled doc, and metadata versions.

**Always pass `--format json` and parse it — don't regex the text output.**

## Upgrade flow

Execute in order. Don't skip the scan — it narrows the review scope, but still check the latest migration doc for omissions.

### Phase 0 — Dependency upgrade (do first)

1. Bump deps to v4 (get user consent before installing):
   - `@nutui/nutui-react@^4`
   - icon package `@nutui/icons-react` (v4-compatible version) — if the project uses icons
2. Confirm lockfile update and `node_modules` reinstall.

### Phase 1 — Scan & inventory

Use `--apply` to intersect project component usage with migration-doc sections (the scan does not rewrite code):

```bash
nutui-react migrate 3 4 --apply ./src --format json
```

Focus on three fields:

- `matchedComponents` — **used components with matching migration-doc sections**. This is a review list; not every entry is breaking.
- `componentsWithoutBreakingChanges` — used components without sections in the bundled doc. The field name is not proof that nothing changed.
- `steps[].guide` — migration notes for each component; distinguish required edits, optional preservation of old behavior, compatible additions, and visual review.

If `matchedComponents` is empty, verify the CLI doc version and scan scope against the latest official migration doc before proceeding to Phase 3. An empty list alone does not prove no edits are needed.

Extra scan: if the project has **custom CSS overrides** (targeting `.nut-*` classes or `--nutui-*` variables), grep them — they're the high-risk spots for class/token changes:

```bash
grep -rn --include='*.css' --include='*.scss' --include='*.less' -- '\.nut-' src
grep -rn --include='*.css' --include='*.scss' --include='*.less' -- '--nutui-' src
```

### Phase 2 — Rewrite per component

For **each** component in `matchedComponents`, plus affected components found by checking the latest doc:

```bash
# 1. Read migration notes (APIs, events, styles, classes, tokens)
nutui-react migrate 3 4 --component Empty --format json

# 2. Check API differences (Props additions/removals, enums, defaults, types)
nutui-react diff 3 4 Empty --format json

# 3. Cross-check full doc / tokens when needed
nutui-react doc Empty --format json
nutui-react token Empty --format json
```

Rewrite actual usages: remove deleted Props, type references, and CSS variables; migrate old enums and classes; check events and layout. Override new defaults only when the old experience is required. Adopt compatible additions optionally; rename Props only with documentation or API-diff evidence.

### Phase 3 — Verify

- Run existing project type checks, builds, and relevant tests to catch removed Props, old enums, and type entry-point issues.
- **Compiling ≠ correct** — defaults, event triggers, and layout changes usually do not cause compile errors. Review every affected usage, including unchanged code relying on defaults.
- Specifically verify CountDown completion callbacks, ActionSheet placement and icon layout, Cell long titles and right-side content, custom overrides, and dark mode.
- Report changed components, accepted or explicitly preserved defaults, unused optional additions, and outstanding device/browser checks.

## References

When reviewing a component, read its section in [Known breaking changes and compatible upgrades](references/migration-changes.en.md) as needed. The summary does not replace the latest official migration notes.

## Key rules

1. **Scan first, then query per component.** Treat scan results as a review list; read migration notes and API diffs against the latest official doc.
2. **Do not assume whether Props / APIs change.** Check additions/removals, types, enums, defaults, events, layout, classes, and tokens. Do not invent renames.
3. **Separate required and optional edits.** Clean up removed usages; accept new defaults or explicitly preserve old behavior based on project needs. Compatible additions are optional.
4. **Always `--format json`.** The CLI uses offline bundled data that may lag behind the latest official doc.
5. **Don't use `nutui-codemod` for v3→v4** — its rules are for v2→v3 (component/Props renames) and will mis-edit if run.
6. **Compiling does not complete the upgrade** — verify behavior and rendering of all affected components, including unchanged usages relying on defaults.
