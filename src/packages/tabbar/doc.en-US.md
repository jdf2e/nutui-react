# Tabbar

Tabbar provides bottom navigation. Its standard material preserves the previous configuration and styling by default; the examples opt into the rounded frosted material board with `material="frosted"`.

## Import

```tsx
import { Tabbar } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Logo Tips

Use `dot` or `value` to show a dot, number, or text badge on an item icon; ordinary icons use the default badge position, while marketing artwork can use application styles to adjust it.

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Only Icon

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Only Text

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom

This example shows dot, number, and text badges on marketing artwork, controls the label below an image with `title(active)`, and positions image badges in `badge-demo.scss`.

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Custom Color and Size

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### With Controlled

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Click the Active Item Again

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Fixed Bottom and Back to Top

Use `fixed` to pin Tabbar to the bottom; `fixed` or `safeArea` renders the bottom safe area. The navigation height defaults to 46px with the standard material (50px in JMAPP/JRKF themes) and 52px with frosted material. The inset from `env(safe-area-inset-bottom)` can be adjusted with `--nutui-safe-area-multiple`.

The back-to-top example switches the Home icon when Home is selected and the scroll position reaches 160px, then scrolls the same container through `onActiveClick` when Home is clicked again; the caller controls `icon(active)` and scroll state without adding a Tabbar prop.

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### addonBefore Entry

Pass an image or custom node through `addonBefore`; the component provides a 52×52px positioning box with fully rounded right corners and clips content outside it by default.

The caller implements the image, appearance, and click behavior; `addonBefore` does not occupy a tab index, and clicking it does not trigger `onSwitch`.

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Frosted Glass Material

With `material="frosted"`, Tabbar uses the `MaterialView` `bottom-bar` scene for its navigation board, with 3px blur, a tint at 80% opacity, fully rounded corners, and transparent outer and safe-area backgrounds. Without this prop, the standard material keeps the full-width background, previous layout classes, and theme variables.

On H5, the `.nut-theme-dark` theme class controls the board tint, and the page background should extend beneath the safe area; the blur effect depends on browser support.

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Custom Skin Background

Providing `skinBackground` takes precedence over `material` and replaces the built-in board with custom content; Tabbar handles clipping, fully rounded corners, and item stacking, while the caller implements artwork and its positioning.

Use `icon(active)` to switch icon images based on the selected state.

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Tabbar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | The default index value of the selected label | `number` | `0` |
| value | The index value of the selected label | `number` | `-` |
| fixed | Fix Tabbar to the bottom and render the bottom safe area | `boolean` | `false` |
| activeColor | Selected item color; theme styles apply when empty | `string` | `''` |
| inactiveColor | Unselected item color; theme styles apply when empty | `string` | `''` |
| direction | Item direction; horizontal layout applies with exactly two items | `'vertical' \| 'horizontal'` | `'vertical'` |
| safeArea | Whether to enable the full screen bottom safety zone adaptation of the iphone series | `boolean` | `false` |
| material | Board material; standard preserves the previous layout, frosted uses the rounded material board | `'standard' \| 'frosted'` | `'standard'` |
| skinBackground | Custom skin board content; replaces the default material | `ReactNode` | `-` |
| addonBefore | Leading entry content; the caller provides its image and click behavior | `ReactNode` | `-` |
| onSwitch | Trigger an event when switching tabs | `(value) => void` | `-` |

## Tabbar.Item

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | the title of the tab | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| icon | Custom icon | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| value | value to show in Badge, eg number、charctor and custom content | `ReactNode` \| `((active: boolean) => ReactNode)` | `-` |
| max | when value is number, it's the max size | `number` | `99` |
| dot | Whether Badge is dotted | `boolean` | `false` |
| top | Up and down offset of Badge, support unit setting, can be set to: 5, etc. | `number` | `0` |
| right | Left and right offset of Badge, support unit setting, can be set to: 5, etc. | `number` | `0` |
| onActiveClick | Called when the currently selected item is clicked again | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider). The standard material retains the previous color, border, shadow, and height variables; content height, inset, radius, and selected background variables apply to frosted and custom skin boards.

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tabbar-height | navigation layer height | Standard `46px` (JMAPP/JRKF `50px`); frosted `52px` |
| \--nutui-tabbar-addon-before-source-size | `addonBefore` positioning box size | `52px` |
| \--nutui-tabbar-addon-before-gap | Gap between `addonBefore` and navigation board | `8px` |
| \--nutui-tabbar-addon-before-outset | `addonBefore` outward offset | `16px` |
| \--nutui-tabbar-content-height | content layer height | `44px` |
| \--nutui-tabbar-horizontal-padding | horizontal inset | `12px` |
| \--nutui-tabbar-content-padding | navigation board inner padding | `4px` |
| \--nutui-tabbar-border-radius | navigation board radius | fully rounded (follows navigation height) |
| \--nutui-tabbar-active-background | selected item background | `var(--nutui-mask-2)` |
| \--nutui-tabbar-active-border-radius | item radius | fully rounded (follows item height) |
| \--nutui-tabbar-active-background-duration | selected background slide and spring duration | `300ms` |
| \--nutui-tabbar-active-background-easing | selected background slide easing | `cubic-bezier(0.38, 0, 0.24, 1)` |
| \--nutui-tabbar-active-background-scale-easing | selected background spring easing | `cubic-bezier(0.8, 0, 0.24, 1)` |
| \--nutui-tabbar-active-color | active color | `$color-primary` |
| \--nutui-tabbar-inactive-color | default color | `$color-title` |
| \--nutui-tabbar-border-top | borderTop | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | borderBottom | `1px solid #eee` |
| \--nutui-tabbar-box-shadow | boxShadow | `none` |
| \--nutui-tabbar-text-font-size | title fontSize | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | title fontSize when icon is null | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | title fontWeight when icon is null | `$font-weight` |
| \--nutui-tabbar-text-line-height | title lineHeight | Follows the title font size |
| \--nutui-tabbar-text-margin-top | title marginTop | `4px` |

<Contribution name="Tabbar" />
