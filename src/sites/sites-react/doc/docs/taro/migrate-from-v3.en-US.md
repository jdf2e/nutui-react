# Migrate from v3 to v4

This document helps you upgrade from NutUI React `3.x` to NutUI React `4.x`.

## Upgrade Steps

1. Install NutUI React 4.x for Web (H5)

```shell
npm install @nutui/nutui-react
```

2. Install NutUI React 4.x for Taro

```shell
npm install @nutui/nutui-react-taro
```

---

## Breaking Changes & Compatibility Notes

### Toast

- **Default Duration**: The default display `duration` changed from `2s` to `3s`. If you want to maintain the old 2s duration, explicitly pass `duration: 2` in individual calls or use the global config `Toast.config({ duration: 2 })`.
- **Width Bounds & Rule Cleanups**:
  - Removed the legacy `max-width: 68.2%` override rule on elements with text content, ensuring that toast widths are strictly governed by fixed pixel bounds.
  - **Description Type (Text-Only)**: Min-width is `88px`, Max-width is `200px`.
  - **Status Type (with Icon/Title)**: Min-width is `97px`, Max-width is `225px`.
- **Icon Sizing & Padding**:
  - The icon size inside the status type Toast was reduced from `24x24` to `20x20`.
  - Reset the icon's outer margins (`margin: 0`) and added `10px` vertical padding to ensure a perfect 0px spacing between elements.
- **Legacy Class Name Removal (Breaking Change)**:
  - Completely removed the legacy helper class name with a spelling mistake `.nut-toast-inner-descrption` which was conditionally added when the toast had text content. Since the new width specifications are now directly enforced on the main `.nut-toast-inner` container, this helper class is no longer functional and has been completely deleted without a replacement class.
- **Configurable Font Weights**:
  - Replaced hardcoded font weight values with customizable CSS variables:
    - Title: `var(--nutui-toast-title-font-weight, 600)`
    - Text: `var(--nutui-toast-text-font-weight, 400)`

### Radio

- **Touch Target & No-Label Centering**:
  - Removed the empty Label DOM node rendering when there are no `children` present. This eliminates the offset caused by `margin-left` and centers the standalone icon.
  - Added a `.nut-radio-nolabel` modifier class in empty state. It expands the icon's touch area to at least `32x32px` and vertically/horizontally centers it within the hotspot.
- **Removed Outer Glow**: Removed the red shadow/glow from checked radio icons (`box-shadow: none`) for a flat, clean aesthetic.

### Checkbox

- **Dark Mode Correction**:
  - Resolved incorrect color variables/mappings under Dark Mode (`theme-dark`) for Checkbox background colors and borders.

### Empty

> **No v3 compatibility in v4**: no prop aliases, no runtime fallbacks, and no `EmptyState` type alias. Migrate manually using the tables below.

- **`size` Enum Breaking Change**:
  - Removed `base` / `small`. Aligned with JD APP V11.0 empty-state spec: `full` / `half` / `partial`.
  - Default changed from `base` to `half`.
  - Recommended migration:
    - `size="base"` (v3 default, 160px image) → use `size="full"` for full-page states, or `size="partial"` for embedded partial areas.
    - `size="small"` (v3, 120px image) → `size="half"` (half-screen, 80px image).
- **Visual Spec Updates**:
  - **`full`**: 160px image, title `$font-size-md` / line height 24px / `#11141A`, description `$font-size-base` / line height 22px / `#8D9199`, 160px top spacing.
  - **`half`**: 80px image, title `$font-size-s` / line height 22px, description `$font-size-m` / line height 20px.
  - **`partial`**: 32px image in horizontal layout, text `$font-size-m` / line height 32px, padding `0 16px`, 8px gap between image and text.
- **CSS Class Name Breaking Changes**:
  - Size modifiers: `.nut-empty-base` / `.nut-empty-small` → `.nut-empty--full` / `.nut-empty--half` / `.nut-empty--partial`.
  - Image wrapper: `.nut-empty-base` / `.nut-empty-small` → `.nut-empty-image`.
  - Actions: `.nut-empty-actions-base` / `.nut-empty-actions-small` → `.nut-empty-actions`.
- **Theme Variable Updates**:
  - Added `--nutui-empty-title-color`, `--nutui-empty-description-color`, and per-size variables (e.g. `--nutui-empty-full-image-size`).
  - Font sizes default to `$font-size-*` theme tokens; line heights use `$line-height-*` when available (e.g. 24px, 20px), otherwise design-spec px values (e.g. 22px, 32px).
  - Legacy `--nutui-empty-image-size`, `--nutui-empty-image-small-size`, and `--nutui-empty-background-color` have been removed; use per-size variables instead. The component itself is transparent; use an outer container (e.g. `Cell`) for display backgrounds.
- **`status` Enum Breaking Change**:
  - 8 built-in scenarios: `network` / `comment` / `search` / `shop` / `address` / `order` / `favor` / `cart`.
  - Removed `empty` and `error`; default changed from `empty` to `network`.
  - Recommended v3 → v4 mapping (code changes required; no automatic conversion):
    - `status="empty"` → `status="search"` (generic empty) or another enum above
    - `status="error"` → `status="network"` or a custom `image`
  - Images load from CDN URLs at runtime; see `src/types/spec/empty/base.ts` for the mapping.

### Popover

> **No v3 compatibility in v4**: no prop aliases and no `.nut-popover-dark` class fallback. Migrate manually using the table below.

- **New `type` bubble variant (breaking default behavior)**:
  - Added `type`: `status` (icon + text + close) or `description` (text only).
  - Default `status`; max width 240px for status, 208px for description.
- **`theme` default changed (breaking)**:
  - Default changed from `light` to `dark` (design-spec dark bubble).
  - **Light style is preserved**: set `theme="light"` for the bright white-background style.
  - Recommended migration:
    - v3 default bright style → set `theme="light"` explicitly
    - v3 `theme="dark"` → can remove the prop in v4 (already the default look)
- **Visual spec updates**:
  - **Common**: height 28px, font 12px, background `$color-mask`, text `$color-primary-text`, padding 6px vertical / 8px horizontal.
  - **Status**: icon/close 12×12 at 80% opacity; close button touch hotspot at least 36×36px.
  - **Description**: text only, 8px horizontal padding.
- **CSS class name breaking changes**:
  - Removed `.nut-popover-dark`; default styles match the design-spec dark bubble.
  - Bright style uses `.nut-popover-light` (`theme="light"`).
  - Added `.nut-popover--status` / `.nut-popover--description`.
- **Theme variable updates**:
  - Added `--nutui-popover-padding-horizontal`, `--nutui-popover-padding-vertical`, `--nutui-popover-height`, `--nutui-popover-icon-size`, `--nutui-popover-icon-color`, `--nutui-popover-status-max-width`, `--nutui-popover-description-max-width`, `--nutui-popover-action-hotspot-size`.
  - `--nutui-popover-content-background-color` default changed from `#ffffff` to `$color-mask`; `--nutui-popover-text-color` from `$color-mask` to `$color-primary-text`.
  - `--nutui-popover-item-width` default changed from `160px` to `240px` (same as status max width).

### ResultPage

> **No v3 compatibility in v4**: no prop aliases. Migrate manually using the table below.

- **Type entry change**:
  - Removed `src/packages/resultpage/types.ts`; import `ResultPageStatus`, `ResultPageAction`, and `ResultPageProps` from `@/types`.
- **Visual spec aligned with JD APP 16.0**:
  - Description text is centered by default; H5 error icon color aligns with `$color-primary` (`#ff2159`).
  - 4px below icon; 4px between title and description; 12px above actions; 12px between buttons (`margin: 0 6px`).
  - Title: `$font-size-md` / line height 24px; description line height 22px.
- **Theme variable updates**:
  - Added `--nutui-resultpage-title-line-height`.
  - `--nutui-resultpage-icon-margin-bottom` default `12px` → `4px`; `--nutui-resultpage-title-margin-bottom` `12px` → `4px`; `--nutui-resultpage-title-font-size` `$font-size-xl` → `$font-size-md`; `--nutui-resultpage-description-line-height` `20px` → `22px`; `--nutui-resultpage-actions-margin-top` `16px` → `12px`.
