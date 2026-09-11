---
name: nutui-react-to-taro
description: >
  Use when migrating a project (or a code snippet) from NutUI React
  (@nutui/nutui-react, H5) to NutUI React Taro (@nutui/nutui-react-taro,
  mini-program / cross-platform Taro). Trigger scenarios such as "migrate NutUI
  React to Taro", "make this H5 NutUI page run inside a mini-program", or
  converting H5 NutUI components to the Taro runtime. The two packages share the
  same set of components, and the vast majority map one-to-one — so the real
  work is package-name / import rewrites, native-tag → Taro-component
  replacement, style-unit fixes, and cross-checking the few components whose
  props differ across the two ends.
allowed-tools:
  - Bash(nutui-react *)
  - Bash(nutui-react-taro *)
  - Bash(npx -y @nutui/nutui-react-cli *)
  - Bash(npx -y @nutui/nutui-react-taro-cli *)
  - Bash(which nutui-react)
  - Bash(which nutui-react-taro)
---

# NutUI React (H5) → NutUI React Taro migration

You are responsible for migrating code from `@nutui/nutui-react` (H5) to
`@nutui/nutui-react-taro` (Taro mini-program / cross-platform). The two packages
are built from the **same codebase**, so nearly every component shares the same
name and largely the same props across both ends. This makes the migration
highly rule-based — but a few steps still require real judgment and cannot be
done with blind find-and-replace.

Two CLIs back this work; both are offline, with metadata shipped alongside the packages:

- `@nutui/nutui-react-cli` — **source-end** (H5) source of truth: `nutui-react info <C>`
- `@nutui/nutui-react-taro-cli` — **target-end** (Taro) source of truth: `nutui-react-taro info <C>`

If a CLI is not on PATH, invoke it via npx (no install needed):

```bash
which nutui-react      || echo "use: npx -y @nutui/nutui-react-cli info <C> --format json"
which nutui-react-taro || echo "use: npx -y @nutui/nutui-react-taro-cli info <C> --format json"
```

**The most important habit: for every component you touch, diff its props with
both CLIs before rewriting.** Props are usually identical, but once they differ
(Uploader, Image, InputNumber, etc.) blindly copying them produces code that
silently fails on the mini-program. Always pass `--format json` and parse it.

## Migration flow

Execute the phases below in order. Do not skip the scan — it is what tells you which files are risky.

### Phase 0 — Environment setup (project config, do this first)

Migrated code can only run in Taro if the project is configured properly. The
authoritative source is NutUI's official "Getting Started" (start-react) docs.

1. **Install dependencies** (ask the user for consent before running the install):
   - `@nutui/nutui-react-taro`, `@nutui/icons-react-taro`
   - `@tarojs/plugin-html` — **its version must match the project's Taro version**
   - `babel-plugin-import` (only if the project needs on-demand imports)
2. **Modify `config/index.js`** — enable the HTML plugin and set the design size
   so NutUI (a 375-based library) scales correctly:
   ```js
   config = {
     plugins: ['@tarojs/plugin-html'],
     designWidth(input) {
       if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) return 375
       return 750
     },
     deviceRatio: { 640: 2.34 / 2, 750: 1, 828: 1.81 / 2, 375: 2 / 1 },
   }
   ```
3. **Import the global stylesheet at the app entry** (`app.tsx` / `app.ts`):
   ```js
   import '@nutui/nutui-react-taro/dist/style.css'
   ```

You may edit `config/index.js` and the entry file directly. Confirm with the
user before installing dependencies.

### Phase 1 — Scan and inventory

Find all NutUI usage and flag high-risk files up front:

```bash
# which files import the H5 package
grep -rn "@nutui/nutui-react\b\|@nutui/icons-react\b" src --include=*.tsx --include=*.ts

# high-risk signals — these files need line-by-line human / AI judgment (see Phase 3):
grep -rln "\bAudio\b" src              # Audio has no counterpart on the Taro end (see pitfalls)
grep -rln "document\.\|window\.\|localStorage\|URL.createObjectURL\|addEventListener" src
grep -rln "getElementById\|querySelector\|createElement\|canvas" src   # canvas / DOM logic
```

List the components involved, then confirm each one exists on the Taro end:

```bash
nutui-react-taro list --format json    # confirm component names / spot the Audio gap
```

### Phase 2 — Mechanical rewrite (rules ①–④)

Process each file with the rule table below. These are rule-based enough to do
quickly, but ② and ③ still need light judgment (see notes).

### Phase 3 — Semantic rewrite and props cross-check (rules ⑤–⑥)

For every high-risk file flagged in Phase 1, and every component you migrate:

```bash
# diff props: what the H5 end has vs. what the Taro end accepts
nutui-react info Uploader --format json
nutui-react-taro info Uploader --format json
# for components needing a semantic rewrite (e.g. Signature), read the full Taro doc first
nutui-react-taro doc Signature --format json
```

Rewrite Web-only APIs into Taro APIs, remove / replace props the Taro end does
not accept, and handle the pitfalls below.

### Phase 4 — Verification

- Build the Taro target and confirm it compiles: e.g.
  `taro build --type weapp --watch` (or `--type h5`).
- Manually re-check every high-risk file — **a passing compile does not mean**
  the canvas / Web API rewrites behave correctly.
- Report which files were fully auto-migrated and which need user review.

## Rule table (before → after)

### ① Package names and imports — pure replacement

```diff
- import { Button, Cell } from '@nutui/nutui-react'
+ import { Button, Cell } from '@nutui/nutui-react-taro'
- import { Dongdong } from '@nutui/icons-react'
+ import { Dongdong } from '@nutui/icons-react-taro'
```

### ② Native HTML tags → Taro components — replace + add import

Taro has no DOM. Replace native tags and add the corresponding import from `@tarojs/components`.

| H5 | Taro | Notes |
| --- | --- | --- |
| `<div>` | `<View>` | block-level container |
| `<p>` | `<View>` | |
| `<span>` | `<Text>` or `<View>` | **`<Text>` is for pure inline text only; use `<View>` if it contains child elements** |
| `<img>` | `<Image>` | |

```diff
+ import { View } from '@tarojs/components'
  <Cell onClick={() => setIsVisible(!isVisible)}>
-   <span>Basic usage</span>
-   <div style={{ marginInlineStart: '10px', color: '#999' }}>{val}</div>
+   <View>Basic usage</View>
+   <View style={{ marginLeft: pxTransform(10), color: '#999' }}>{val}</View>
  </Cell>
```

### ③ Style units — bare px and logical properties

- Bare numeric px must become strings: `margin: 8` → `margin: '8px'`.
- Mini-programs do not support logical properties: `marginInlineStart` →
  `marginLeft`, `insetInlineStart` → `left`, etc.
- For values that need cross-device scaling, use `pxTransform(10)` imported from
  `@nutui/nutui-react-taro` (returns an rpx-adapted length).

```diff
- const marginStyle = { margin: 8 }
+ const marginStyle = { margin: '8px' }
```

### ④ Touch event types

Mini-program touch events are not `MouseEvent`. Loosen the type and import
`ITouchEvent` from `@tarojs/components`.

```diff
+ import { ITouchEvent } from '@tarojs/components'
- const testClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {}
+ const testClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent) => {}
```

### ⑤ Web-only API → Taro API — requires reasoning, rewrite case by case

The Taro runtime provides only a **limited emulation** of `window` / `document` /
DOM, and its coverage drifts by target version — **do not delete wholesale**.
Judge case by case: map to `@tarojs/taro` or the component's own capabilities
where possible; keep what the runtime genuinely supports (e.g. the async
`getBoundingClientRect`); delete only logic that truly cannot be migrated. Common
mappings:

| H5 pattern | Taro replacement |
| --- | --- |
| `alert` / popping a toast via DOM | `Taro.showToast(...)` (`import Taro from '@tarojs/taro'`) |
| `URL.createObjectURL(file)` | pick the matching Taro chooser/upload API by file type (`Taro.chooseMedia` for images/video; check the `@tarojs/taro` docs for other types), then use its temp path — don't force video / audio / generic files through image picking |
| `document.createElement` + manual DOM manipulation | prefer component props / ref; when you genuinely need to touch nodes use APIs like `Taro.createSelectorQuery`, don't blindly delete the logic |
| `window.location` / route navigation | `Taro.navigateTo` / `Taro.redirectTo` |
| `localStorage` | `Taro.setStorageSync` / `Taro.getStorageSync` |
| `addEventListener('scroll')` | Taro page / scroll events or component props |

### ⑥ Component prop differences — cross-check with both CLIs

The vast majority of props are identical, but some components genuinely differ.
**Never assume — diff.** Confirmed examples (verify live at migration time,
versions drift):

| Component | H5-only props | Taro-only props | Handling |
| --- | --- | --- | --- |
| `Uploader` | `accept`, `capture` | `mediaType`, `sizeType`, `sourceType`, `camera` | re-express the intent with Taro's file-picking props |
| `Image` | `fit`, `lazy`, `position`, `alt` | — | remove / remap (e.g. `fit` → check the CLI doc for `mode` semantics) |
| `InputNumber` | `select` | `type` | check the CLI doc |
| `Button` | — | (`openType`, `hoverClass` … are mini-program pass-through attrs) | add mini-program-specific props as needed |

## Pitfalls (blind replacement gets these wrong)

1. **`Audio` has no counterpart on the Taro end.** It only exists in the H5
   package. When a file uses NutUI's `Audio`, stop and tell the user — suggest
   `Taro.createInnerAudioContext()` or a custom solution. Do not invent an
   import out of thin air.
2. **Do not blindly replace every `document`.** Some components accept it as-is
   — e.g. `Popup`'s `portal={document.body}` **stays unchanged** on the Taro end
   (the component handles it). Judge by component semantics / CLI doc, not by grep.
3. **Canvas-based components (e.g. `Signature`) are a semantic rewrite.** The H5
   end often has hand-written DOM manipulation (`document.createElement('img')`,
   appending to a node). On the Taro end, delete that DOM logic and use the
   component's `canvasId` prop + ref methods. Read `nutui-react-taro doc
   Signature` first.
4. **`<span>` → `<Text>` or `<View>`.** `<Text>` is inline and for pure text
   only; wrapping child elements in `<Text>` breaks the layout. Use `<View>`
   when there are nested elements.

## Core rules

1. **Before rewriting each component, cross-check its props with `nutui-react
   info <C>` and `nutui-react-taro info <C>`.** This is the heart of the whole
   migration — see rule ⑥.
2. **Always use `--format json`** — parse the structured output, do not regex
   the text.
3. **Confirm the component exists on the Taro end** with `nutui-react-taro
   list`; watch for the `Audio` gap.
4. **Rules ①–④ are mechanical; ⑤–⑥ and the pitfalls need judgment** — handle
   the latter case by case, and flag anything that cannot be safely
   auto-migrated for user review. Do not claim a file is fully migrated until
   the Taro build compiles.
5. **Do the environment setup first** — migrating code is pointless if the
   project cannot compile Taro + NutUI.
