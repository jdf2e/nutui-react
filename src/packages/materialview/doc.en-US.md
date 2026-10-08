# MaterialView

Cross-platform frosted glass / material view component based on CSS `backdrop-filter`, supporting preset scenes, overlay colors, and inner glow shadows.

## Import

```tsx
import { MaterialView } from '@nutui/nutui-react'
```

## Demo

### Material Scenes

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Bottom Navigation Bar (bottom-bar)

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Immersive and Floating Bar

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

## MaterialView Props

| Property | Description | Type | Required | Default |
| --- | --- | --- | --- | --- |
| scene | Material scene preset, see MaterialScene | `MaterialScene` | No | — |
| targetId | Target identifier / ID | `string` | No | — |
| darkMode | Force dark mode (`true`: dark / `false`: light) | `boolean` | No | Follow system |
| frostedGlass | Custom frosted glass configuration | `FrostedGlassConfig` | No | — |
| gradientBlur | Custom gradient blur configuration | `GradientBlurConfig` | No | — |
| overlayColor | Custom overlay color (supports rgba / hex) | `string` | No | — |
| style | Custom inline style | `CSSProperties` | No | — |
| className | Additional class name | `string` | No | — |

## MaterialScene Values

| Value | Semantic Description | Typical Usage |
| --- | --- | --- |
| `top-solid` | Floating container with background color | Search bar, capsule nav |
| `top-plain` | Floating container without solid background | Lightweight transparent overlay |
| `top-bar` | Top sticky background | Top navigation bar |
| `promotion-fair` | Light theme floating container | Promotion pages (light) |
| `promotion-deep` | Dark theme floating container | Promotion pages (dark) |
| `immersive` | Immersive floating container (dark) | Video / immersive view |
| `bottom-bar` | Bottom navigation bar | Bottom tab bar |
