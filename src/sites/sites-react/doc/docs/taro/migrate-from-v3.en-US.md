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
