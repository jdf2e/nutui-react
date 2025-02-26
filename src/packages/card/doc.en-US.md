# Card

Used to display product pictures, prices and other information.

## Import

```tsx
import { Card, Price, Tag } from '@nutui/nutui-react'
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Custom prolist

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Price after custom tag

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom Content

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Customize bottom right content

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Hide price and shop

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

## Card

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| src | Left thumb image | `string` | `-` |
| title | Title | `string` | `-` |
| price | Price | `string` | `-` |
| vipPrice | vip-price | `string` | `-` |
| shopDescription | shop-description | `string` | `-` |
| delivery | delivery | `string` | `-` |
| shopName | shop-name | `string` | `-` |
| description | Custom product introduction | `ReactNode` | `-` |
| priceTag | Custom content behind the price | `ReactNode` | `-` |
| tag | Custom shop introduction | `ReactNode` | `-` |
| extra | Customize bottom right content | `ReactNode` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-card-border-radius | The size of the rounded corners of the card picture and card | `4px` |

## Contribution

### Issues

> View more [Issues](https://api.github.com/repos/jdf2e/nutui-react/issues?q=is%3Aissue+state%3Aclosed+label%3ACard)

### Component Logs

- ✨ feat(card): add card hide price and shop usage ([#2292](https://github.com/jdf2e/nutui-react/pull/2292)) @wenlingang `v2.6.8`
- 🐛 fix(calendarcard): 直接抛出ondayclick ([#2150](https://github.com/jdf2e/nutui-react/pull/2150)) @oasis-cloud `v2.5.2`
- 💡 🏡 chore(calendarcard): demo 拆解与规范 ([#2026](https://github.com/jdf2e/nutui-react/pull/2026)) @eiinu `v2.5.0`
- 🐛 fix(calendarcard): 修复受控模式 ([#2063](https://github.com/jdf2e/nutui-react/pull/2063)) @eiinu `v2.4.2`
- 🐛 fix(Card): demo拆解与规范 ([#2072](https://github.com/jdf2e/nutui-react/pull/2072)) @joyfully-W `v2.4.2`

> View more [Releases](https://api.github.com/repos/jdf2e/nutui-react/releases?q=card&expanded=true)
