# NutUI-React

JD-style lightweight mobile React component library. One codebase generates both H5 (web) and Taro (mini-program/HarmonyOS) outputs.

## Project Structure

```
src/packages/<component>/
  <component>.tsx          # H5 implementation (DOM elements)
  <component>.taro.tsx     # Taro implementation (View/Text, no DOM)
  <component>.scss         # Shared styles (BEM)
  <component>.harmony.css  # HarmonyOS styles
  __tests__/               # vitest specs
  demos/h5/ demos/taro/    # Demo code
  doc.md doc.taro.md       # Documentation (zh-CN, zh-TW, en-US)
src/styles/variables.scss  # Global design tokens
src/styles/theme-dark.scss # Dark mode overrides
```

## Core Rules

### One Code Two Platforms

Every logic/prop/structure change in `<component>.tsx` MUST be mirrored in `<component>.taro.tsx`.
Taro files use `<View>` instead of `<div>`, `<Text>` instead of `<span>`, and must NOT use browser DOM APIs.

### CSS Variables

- Never hardcode colors or pixel values in `.scss`
- Format: `var(--nutui-<component>-<property>, <fallback>)`
- New variables must also be added to `src/styles/variables.scss`

### BEM Naming

- Block: `.nut-<component>`
- Element: `.nut-<component>__<element>`
- Modifier: `.nut-<component>--<modifier>`

### Props Convention

- Extend `BasicComponent` from `@/utils/typings`
- Use `React.forwardRef` wrapper
- Merge external `className` via `classnames` package
- Events use `on` prefix (onChange, onClose)

### Commit Convention

Angular conventional commits (enforced by commitlint):

- `feat(<component>): description`
- `fix(<component>): description`
- `docs: description`
- `refactor(<component>): description`

## Testing

- Runner: vitest
- Run single component: `npx vitest run src/packages/<component>`
- Coverage threshold: 90%

## Package Manager

pnpm only. Do not use npm or yarn.

## Reference Documentation

- `NutUI-React_组件共建规范.md` — Complete contributing guide
- `NutUI-React_组件标准白皮书.md` — Component standards whitepaper
- `NutUI-React_checklist.md` — PR review checklist
