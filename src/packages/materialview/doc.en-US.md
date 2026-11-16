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

## Theme CSS Variables

| Variable | Default | Description |
| --- | --- | --- |
| `--nut-material-shadow-light` | `0 2PX 4PX rgba(0, 0, 0, 0.06), ...` | Light mode specular shadow |
| `--nut-material-shadow-dark` | `0 2PX 4PX rgba(0, 0, 0, 0.06), ...` | Dark mode specular shadow |
| `--nut-material-shadow-immersive` | `var(--nut-material-shadow-dark)` | Immersive scene shadow |
| `--nut-material-tint-top-solid` | `rgba(255, 255, 255, 0.65)` | `top-solid` light tint |
| `--nut-material-tint-top-solid-dark` | `rgba(20, 23, 26, 0.6)` | `top-solid` dark tint |
| `--nut-material-tint-top-plain` | `rgba(255, 255, 255, 0.05)` | `top-plain` tint |
| `--nut-material-tint-top-bar` | `rgba(255, 255, 255, 0.9)` | `top-bar` light tint |
| `--nut-material-tint-top-bar-dark` | `rgba(20, 23, 26, 0.85)` | `top-bar` dark tint |
| `--nut-material-tint-promotion-fair` | `rgba(255, 255, 255, 0.85)` | `promotion-fair` tint |
| `--nut-material-tint-promotion-deep` | `rgba(255, 255, 255, 0.2)` | `promotion-deep` tint |
| `--nut-material-tint-immersive` | `rgba(20, 23, 26, 0.6)` | `immersive` tint |
| `--nut-material-tint-bottom-bar` | `rgba(255, 255, 255, 0.8)` | `bottom-bar` light tint |
| `--nut-material-tint-bottom-bar-dark` | `rgba(20, 23, 26, 0.8)` | `bottom-bar` dark tint |
| `--nut-material-blur-default` | `3PX` | Default blur radius |
| `--nut-material-blur-top-bar` | `10PX` | Top bar blur radius |
| `--nut-material-radius-floating` | `8px` | Floating container border radius |
| `--nut-material-radius-bar` | `0px` | Sticky bar border radius |
