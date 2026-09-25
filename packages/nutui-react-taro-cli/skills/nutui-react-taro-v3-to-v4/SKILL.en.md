---
name: nutui-react-taro-v3-to-v4
description: >
  Use when upgrading a project from NutUI React Taro v3 (@nutui/nutui-react-taro 3.x, mini-program / cross-platform) to v4 (4.x). Triggers on "upgrade NutUI React Taro from v3 to v4", "migrate nutui taro v3 to v4", "bump @nutui/nutui-react-taro to 4.0". Unlike typical major upgrades, v3→v4 has almost no Props additions/removals/renames — breaking changes concentrate in **styles / CSS class names / Design Tokens / enum values / default values** (e.g. Empty's size/status, Popover's theme). This skill uses the offline CLI's migrate / diff commands to pinpoint which components actually need changes, rewriting each per the official migration doc — avoiding invented API renames or missed default-value changes.
allowed-tools:
  - Bash(nutui-react-taro *)
  - Bash(npx -y @nutui/nutui-react-taro-cli *)
  - Bash(which nutui-react-taro)
  - Bash(grep *)
---

# NutUI React Taro v3 → v4 Upgrade

You are upgrading a project from `@nutui/nutui-react-taro` **3.x** to **4.x** (Taro mini-program / cross-platform).

**Remember this counter-intuitive fact first**: v3→v4 has **almost no Props additions / renames** — most components' APIs are identical across the two versions. The real breaking changes concentrate in four dimensions:

1. **Enum / default-value changes** (most code-impacting) — e.g. Empty's `size`, `status`, Popover's `theme` default. These do **not** auto-fall-back, and the compiler won't flag them — missing one fails silently.
2. **CSS class-name changes** — if the project has custom style overrides targeting `.nut-xxx` classes, a renamed class silently breaks them.
3. **Design Token changes** — added / removed / redefaulted `var(--nutui-*)` variables.
4. **Visual-spec adjustments** — spacing, font size, icon size. Usually no code change, but verify rendering after build.

So: **don't assume upgrade = change imports or rename Props.** Use the CLI to find what each component actually changed, then fix each spot.

## Supporting tools

`@nutui/nutui-react-taro-cli` — offline, metadata bundled. If not on PATH, call via npx:

```bash
which nutui-react-taro || echo "use: npx -y @nutui/nutui-react-taro-cli <command>"
```

Two key commands:

- `nutui-react-taro migrate 3 4` — the **official migration doc** (authoritative, hand-written, filled in per-component alongside v4). This is the **primary basis** for rewrites.
- `nutui-react-taro diff 3 4 <Component>` — **measured Props diff between the two versions' meta** (precise `old → new` for enums, defaults, types). Fills in API/default-level diffs the doc doesn't spell out.

They're **complementary**: migrate explains "why & how to change" (incl. styles/classes/tokens), diff gives "what exactly differs at the API layer". Read both when changing a component.

**Always pass `--format json` and parse it — don't regex the text output.**

## Upgrade flow

Execute in order. Don't skip the scan — it decides which few components you need to touch.

### Phase 0 — Dependency upgrade (do first)

1. Bump deps to v4 (get user consent before installing):
   - `@nutui/nutui-react-taro@^4`
   - icon package `@nutui/icons-react-taro` (v4-compatible version) — if the project uses icons
2. Confirm lockfile update and `node_modules` reinstall.

### Phase 1 — Scan & inventory

Use `--apply` to scan the project and get "which components have breaking changes to handle" in one step:

```bash
nutui-react-taro migrate 3 4 --apply ./src --format json
```

Focus on three fields:

- `matchedComponents` — **components the project uses AND that have breaking changes**. This is your worklist.
- `componentsWithoutBreakingChanges` — used but not listed in the migration doc (most components; usually no change needed).
- `steps[].guide` — the migration doc text for each component to handle.

If `matchedComponents` is empty: per the current doc, the project's components need no code changes — proceed to Phase 3 verification (still worth checking styles).

Extra scan: if the project has **custom CSS overrides** (targeting `.nut-*` classes or `--nutui-*` variables), grep them — they're the high-risk spots for class/token changes:

```bash
grep -rn "\.nut-" src --include=*.css --include=*.scss --include=*.less
grep -rn -- "--nutui-" src --include=*.css --include=*.scss --include=*.less
```

### Phase 2 — Rewrite per component

For **each** component in `matchedComponents`:

```bash
# 1. Read the official migration note (why & how; styles/classes/tokens)
nutui-react-taro migrate 3 4 --component Empty --format json

# 2. See precise API diff (enums, defaults, types old → new)
nutui-react-taro diff 3 4 Empty --format json

# 3. Cross-check full doc / tokens when needed
nutui-react-taro doc Empty --format json
nutui-react-taro token Empty --format json
```

Then rewrite per the migration note. Focus on **enum / default / class-name / token** changes; don't invent Props renames.

### Phase 3 — Verify

- Build the project and confirm it compiles (e.g. `taro build --type weapp` / `--type h5`).
- **Compiling ≠ correct** — enum/default changes don't raise compile errors. Verify actual rendering of every component you touched in Phase 1/2.
- Report: which components were changed, which custom style overrides need review, which you recommend the user eyeball on device/simulator.

## Known breaking changes (as of current doc — always defer to live `migrate` output)

The migration doc is filled in continuously through v4 beta; below are currently-covered components. **Always run `migrate 3 4` for the latest list; don't rely on this table alone.**

### Empty — enums + defaults + class names, all breaking

- `size`: removes `base`/`small`, now `full`/`half`/`partial`; **default `base` → `half`**.
  - `size="base"` → `full` (full-page) or `partial` (inline); `size="small"` → `half`.
- `status`: removes `empty`/`error`; **default `empty` → `network`**.
  - `status="empty"` → `search` (or a scenario enum); `status="error"` → `network` (or pass a custom `image`).
- CSS classes: `.nut-empty-base`/`.nut-empty-small` → `.nut-empty--full`/`--half`/`--partial`; image container → `.nut-empty-image`.
- tokens: old `--nutui-empty-image-size` etc. removed; use per-size variables.

### Popover — defaults + class names, breaking

- New `type` (`status`/`description`), default `status`.
- **`theme` default `light` → `dark`**: v3 code relying on the light default must add `theme="light"`; v3 `theme="dark"` can drop the prop.
- CSS classes: removes `.nut-popover-dark` (dark is now default); light style uses `.nut-popover-light`.
- tokens: several `--nutui-popover-*` defaults adjusted.

### Toast — defaults + class name

- **Default `duration` `2s` → `3s`**: to keep 2s, pass `duration: 2` explicitly or `Toast.config({ duration: 2 })` globally.
- Removes the misspelled helper class `.nut-toast-inner-descrption` (**no replacement class**; delete or move overrides to `.nut-toast-inner`).

### Radio / Checkbox — pure style

- Radio: hotspot tweak when no text (adds `.nut-radio-nolabel`), removes checked shadow.
- Checkbox: dark-mode color fixes.
- Usually no code change, but review related style overrides.

## Key rules

1. **Scan first, then query per component.** `migrate 3 4 --apply ./src` gives the worklist; `migrate --component X` + `diff 3 4 X` per component before changing.
2. **Breaking changes are in styles/classes/tokens/enums/defaults, not Props names.** Don't invent API renames.
3. **Enum/default changes must be fixed and won't raise compile errors** — Empty `size`/`status`, Popover `theme`, Toast `duration` are the danger zones; missing one fails silently.
4. **Always `--format json`.**
5. **Don't use `nutui-codemod` for v3→v4** — its rules are for v2→v3 (component/Props renames) and will mis-edit if run.
6. **Compiling isn't done** — eyeball rendering of changed components, hand off spots needing human confirmation.
