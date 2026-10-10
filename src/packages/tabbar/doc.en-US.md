# Tabbar

Common bottom-navigation scenarios. The navigation board keeps a 12px inset on both sides, 4px inner padding, and a 16px radius. The component shell remains transparent.

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

When `fixed` or `safeArea` is enabled, the bottom inset uses the system `env(safe-area-inset-bottom)` value. The total height is 52px plus the device inset; it is not hard-coded to 69px or 74px.

This extends the fixed bottom demo. The demo page passes its scroll position to `demo9`; after 160px (an example threshold), the selected Home item shows a back-to-top icon. Clicking Home from another item selects it without scrolling. Clicking the already selected Home item scrolls the same page container smoothly to the top. The caller combines `icon(active)`, `onActiveClick`, and page scroll state; no new Tabbar prop is needed. “Home” is the demo label.

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Agent Entry

Pass an image or custom node through `agent`. The component supplies only the 52×52px positioning box; the caller supplies the image, appearance, and click behavior. The Agent does not take a tab index or trigger `onSwitch`. This demo uses the 132×132px transparent PNG exported from design node `1545:72`, centered over the source box with its shadow. Clicking logs to the console only.

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Frosted Glass Material

By default, Tabbar uses the `MaterialView` `bottom-bar` preset for its 52px navigation board: 3px blur and an 80% light or dark tint. The visible board has a 16px radius. `MaterialView` follows the system theme. The outer layer and SafeArea remain transparent; extend the page background under the safe area. The demo shows an Agent and a translucent board over a color image. Check the actual appearance in each target runtime supported by `MaterialView`.

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### Custom Skin Background

When `skinBackground` is provided, its content replaces the default `MaterialView` board. Tabbar handles clipping, the 16px radius, and item stacking. The artwork, selected icons, and their positioning belong to the demo. `icon(active)` switches images with the selection state.

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

## Tabbar

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| defaultValue | The default index value of the selected label | `number` | `0` |
| value | The index value of the selected label | `number` | `-` |
| fixed | Whether it is fixed at the bottom of the page | `boolean` | `false` |
| activeColor | icon active color | `string` | `#0073ff` |
| inactiveColor | Icon inactive color | `string` | `#7d7e80` |
| safeArea | Whether to enable the full screen bottom safety zone adaptation of the iphone series | `boolean` | `false` |
| skinBackground | Custom skin board content; replaces the default material | `ReactNode` | `-` |
| agent | Separate Agent entry content; the caller provides its image and click behavior | `ReactNode` | `-` |
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
| onActiveClick | When item is focused, you can add your callback when you click it again | `() => void` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-tabbar-height | navigation layer height | `52px` |
| \--nutui-tabbar-agent-source-size | Agent positioning box size | `52px` |
| \--nutui-tabbar-agent-gap | Gap between Agent and navigation board | `8px` |
| \--nutui-tabbar-agent-outset | Agent outward offset | `16px` |
| \--nutui-tabbar-content-height | content layer height | `44px` |
| \--nutui-tabbar-horizontal-padding | horizontal inset | `12px` |
| \--nutui-tabbar-content-padding | navigation board inner padding | `4px` |
| \--nutui-tabbar-border-radius | navigation board radius | `16px` |
| \--nutui-tabbar-active-background | selected item background | `#F0F2F7` |
| \--nutui-tabbar-active-border-radius | selected item radius | `12px` |
| \--nutui-tabbar-active-color | active color | `$color-primary` |
| \--nutui-tabbar-inactive-color | default color | `$color-title` |
| \--nutui-tabbar-border-top | borderTop | `1px solid #eee` |
| \--nutui-tabbar-border-bottom | borderBottom | `1px solid #eee` |
| \--nutui-tabbar-text-font-size | title fontSize | `$font-size-xxs` |
| \--nutui-tabbar-text-large-font-size | title fontSize when icon is null | `$font-size-l` |
| \--nutui-tabbar-text-large-font-weight | title fontWeight when icon is null | `$font-weight` |
| \--nutui-tabbar-text-line-height | title lineHeight | `initial` |
| \--nutui-tabbar-text-margin-top | title marginTop | `4px` |

<Contribution name="Tabbar" />
