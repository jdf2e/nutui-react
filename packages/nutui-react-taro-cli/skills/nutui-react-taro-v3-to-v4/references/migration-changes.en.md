# Known breaking changes and compatible upgrades

For sources and version checks, see [Supporting tools in the main guide](../SKILL.en.md#supporting-tools).

## Empty — enums + defaults + class names, all breaking

- `size`: removes `base`/`small`, now `full`/`half`/`partial`; **default `base` → `half`**.
  - `size="base"` → `full` (full-page) or `partial` (inline); `size="small"` → `half`.
- `status`: removes `empty`/`error`; **default `empty` → `network`**.
  - `status="empty"` → `search` (or a scenario enum); `status="error"` → `network` (or pass a custom `image`).
- CSS classes: `.nut-empty-base`/`.nut-empty-small` → `.nut-empty--full`/`--half`/`--partial`; image container → `.nut-empty-image`.
- tokens: old `--nutui-empty-image-size` etc. removed; use per-size variables.

## Popover — defaults + class names, breaking

- New `type` (`status`/`description`), default `status`.
- **`theme` default `light` → `dark`**: add `theme="light"` only to preserve the v3 light style; no explicit prop is needed when accepting the new default. Existing v3 `theme="dark"` can drop the prop.
- CSS classes: removes `.nut-popover-dark` (dark is now default); light style uses `.nut-popover-light`.
- tokens: several `--nutui-popover-*` defaults adjusted.

## Toast — defaults + class name

- **Default `duration` `2s` → `3s`**: to keep 2s, pass `duration: 2` explicitly or `Toast.config({ duration: 2 })` globally.
- Removes the misspelled helper class `.nut-toast-inner-descrption` (**no replacement class**; delete or move overrides to `.nut-toast-inner`).

## Radio / Checkbox — pure style

- Radio: hotspot tweak when no text (adds `.nut-radio-nolabel`), removes checked shadow.
- Checkbox: dark-mode color fixes.
- Usually no code change, but review related style overrides.

## ResultPage — type entry point + visuals / tokens

- The doc removes the internal `src/packages/resultpage/types.ts` entry and consolidates `ResultPageStatus`, `ResultPageAction`, and `ResultPageProps` under the library's `@/types`. For application deep imports, check the target version's public exports; do not copy the library-internal alias into application code.
- Descriptions are centered by default; H5 failure icon color uses `$color-primary`. Icon, title, description, and action spacing change; a title line-height token is added.
- No v3 Props aliases are provided. Review existing style overrides.

## Skeleton — defaults + visuals / tokens

- **`duration` defaults from `0.6` to `0.4`**; pass `duration={0.6}` to preserve the old timing if required.
- `large` height changes `32px` → `28px`, `normal` `24px` → `20px`; `small` remains `16px`.
- Background token fallback becomes `$color-background`; the shimmer becomes a white diagonal band. Check animation and dark mode.

## CountDown — removed / added Props + callback behavior

- **Remove `millisecond` usages**. Precision is controlled by `format` tokens `i` / `S` / `SS` / `SSS`.
- **At zero, only `onEnd` fires, not `onPaused`**. Review logic relying on a pause callback at completion.
- Adds tenths-of-a-second token `i` (`ss.i` renders in one block) and optional `refreshInterval`; without the latter, updates still follow the format's finest unit.
- `type` remains `default` / `primary` / `text`: **no rename**. Review changed visual specifications.

## Price — compatible additions + visuals

- Adds `size="medium"`; changes `xlarge` / `large` font sizes and size-specific fonts and colors. Existing size usages need not change just because a new size exists.
- Adds `raw`: when enabled, prices containing invalid characters display unchanged. Without it, strings that cannot safely be formatted still retain the existing unformatted fallback.

## Range — visuals / tokens + DOM structure

- Thumb size changes `24px` → `20px`; border, shadow, inactive and disabled colors change. Disabled styling no longer uses overall opacity.
- `currentDescription` becomes a bubble. `.nut-range-button-number` gains `.nut-range-button-number-body` and `.nut-range-button-number-arrow` children; check overrides.
- Range labels and tick typography/sizes change. Review horizontal, vertical, and disabled states.

## ActionSheet — behavior + classes / tokens + compatible additions

- **`position` now takes effect**: previously ignored values may change placement. Remove unintended values if relying on old behavior; the default remains `bottom`.
- **`optionKey` adds the default mapping `icon: 'icon'`**: existing data with `icon` triggers left-aligned icon lists. Map to another field or remove unused icon data if unwanted.
- Header classes change from `.nut-popup-title*` to `.nut-actionsheet-header*`; migrate title and description overrides accordingly.
- Removes `--nutui-actionsheet-border-color`; use `--nutui-actionsheet-item-border-bottom`. The latter defaults from `none` to `$color-border`; set `none` to preserve no separators if required.
- List and cancel-button spacing and line heights change. Top placement, `layout="grid"`, `columns` (`4` / `5`, default `5`), and header/close Props are optional new capabilities.

## NavBar — removed tokens / defaults + compatible additions

- Remove the ineffective `--nutui-navbar-margin-bottom` declaration; no replacement is needed.
- **Background defaults from white to transparent**: set `--nutui-navbar-background` or an outer background if white is required.
- Padding and side-area widths become token-driven; some themes standardize title size to `18px`. New `subBar` is an optional secondary section; no edit is required when unused.

## Cell — class names + layout behavior + compatible additions

- **`.nut-cell-left` → `.nut-cell-body`**: migrate custom overrides.
- **Padding `13px 16px` → `16px`**: set `--nutui-cell-padding: 13px 16px` to preserve the old height if required.
- **Titles become single-line ellipses; the right side takes content-based width**: check long titles and right-side content. Use a custom title node and override truncation styles if multiline text is required.
- New `leading` and `content` are optional. Passing `content` makes `description` span the full width; this is not a layout-neutral replacement.
