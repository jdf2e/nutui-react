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

### Skeleton

- **`size` visual spec updates (compatible)**:
  - `large` (title) height changed from `32px` to `28px`; `normal` (price) height from `24px` to `20px`; `small` (paragraph) stays `16px`; border radius stays `4px`.
  - Size semantics: `small` for paragraph, `normal` for price, `large` for title.
- **`duration` default changed (breaking default behavior)**:
  - The shimmer sweep duration default changed from `0.6` (600ms) to `0.4` (400ms). To keep the original pace, pass `duration={0.6}` explicitly.
- **Background token update**:
  - `--nutui-skeleton-background` default fallback changed from `$color-background-sunken` to `$color-background`, following the `color-background` token in dark mode automatically.
- **Shimmer visual redesign**:
  - The loading shimmer changed from a dark horizontal-translate overlay to a white 30° diagonal light band (80px wide, gradient opacity 0% → 50% → 0%), sweeping left to right over 400ms and looping after a ~1s pause.

### Range

- **Thumb visual spec updates (compatible)**:
  - Thumb size changed from `24px` to `20px` (`--nutui-range-button-width`, `--nutui-range-button-height`).
  - Thumb border color changed from `$color-primary` to `$color-border` (`--nutui-range-button-border`).
  - Thumb shadow changed from a single `0 1px 2px rgba(0,0,0,0.15)` to a softer three-layer shadow.
- **Track color token update (compatible)**:
  - `--nutui-range-inactive-color` (inactive track background) default fallback changed from `$color-primary-light-pressed` to `$color-background-component`, following the component background token in dark mode automatically.
- **Disabled state implementation change (compatible)**:
  - The disabled state changed from an overall `opacity: 0.54` to coloring the selected range with the new `--nutui-range-disabled-color` token (default `$color-primary-light-pressed`), avoiding the HarmonyOS issue where opacity is distributed to child layers.
- **Bubble display (new)**:
  - The `currentDescription` current value changed from plain text to a dark bubble (background `$color-mask`, text `$color-primary-text`, `6px` radius, with an arrow pointing to the thumb). The horizontal bubble sits above the thumb, and the vertical bubble sits to the right of the thumb. If you customized styles via `.nut-range-button-number`, note it now contains two inner layers: `.nut-range-button-number-body` (bubble body) and `.nut-range-button-number-arrow` (arrow).
- **Range labels and marks updates (compatible)**:
  - The left/right range label font size changed from `12px` to `16px` (`$font-size-md`), line height `24px`.
  - The mark dot size changed from `11px` to `8px`, mark text font size from `12px` to `14px` with `24px` line height, distributed aligned to the mark dot center line.

### ActionSheet (Feedback)

- **`position` prop now takes effect (behavior change)**:
  - Previously the component hardcoded the popup position to `bottom` and ignored an externally passed `position`. It now supports `top` / `bottom`, still defaulting to `bottom`. If you passed `position` before and relied on it being ignored, remove that prop.
- **Default styling of bottom list items changed (behavior change)**:
  - A default divider is now shown between list items: the default value of `--nutui-actionsheet-item-border-bottom` changed from `none` to `$color-border` (the last item has no divider). The item line height changed from `24px` to `22px`, the vertical padding from `10px` to `13px`, and the list container gained `16px` of horizontal padding. The cancel button no longer has a top divider or gap above it, and its line height is now `40px` with a `$font-size-md` font size. To keep the old divider-free look, set `--nutui-actionsheet-item-border-bottom` to `none`.
- **`optionKey` now includes `icon` by default (behavior change)**:
  - The default `optionKey` now includes `icon: 'icon'`. When items in a bottom-list `options` contain an `icon` field, the list automatically switches to a left-aligned icon list layout. If your data already has a field named `icon` that you do not want rendered as an icon, point `optionKey` at a different icon field name or remove that field.
- **Header structure moved from Popup rendering to component self-rendering (compatible)**:
  - The title and description are now rendered by ActionSheet itself, changing the DOM from `.nut-popup-title*` to `.nut-actionsheet-header*`. If you overrode the action sheet header via `.nut-popup-title` class names, migrate to `.nut-actionsheet-header`, `.nut-actionsheet-header-title`, and `.nut-actionsheet-header-description`.
- **Removed CSS variable `--nutui-actionsheet-border-color` (breaking change)**:
  - This variable previously set the color of the divider below the title and above the cancel button. Since the header is now self-rendered and the cancel button no longer has a top divider, the variable is no longer used and has been removed. If you customized the divider color via `--nutui-actionsheet-border-color`, use `--nutui-actionsheet-item-border-bottom` instead.
- **Top popup and grid layout (new)**:
  - Pop up from the top via `position="top"`; the content is displayed as a grid. `options` support an `icon` field (a string is rendered with `Image`, or a custom node can be passed), and `columns` sets the number of columns (only `4` / `5`, default `5`). `cancelText` is rendered as a "collapse" button in top mode. The grid layout can also be used for bottom popups via `layout="grid"`.
- **Header styling and close capabilities (new)**:
  - Added `titleAlign` (`left` / `center`, default `center`; `description` only takes effect when `center`), `headerLeft`, and `headerRight` for customizing the left and right content of the header, as well as `closeable` / `closeIconPosition` to control the display and position of the close button. All of the above are purely additive and do not affect existing usage.
