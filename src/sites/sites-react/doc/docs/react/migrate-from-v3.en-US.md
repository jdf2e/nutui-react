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
