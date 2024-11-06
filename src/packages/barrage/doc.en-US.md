# Barrage

It is used for the rotation display of words and phrases, which is suitable for video or other similar needs.

## Import

```tsx
import { Barrage } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## Barrage

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| list | Barrage list data | `Array<string>` | `[]` |
| interval | The time interval between the occurrence of each barrage in the visual area | `number` | `500` |
| duration | Rolling time of each barrage | `number` | `3000` |
| rows | The number of bullet screen lines is displayed in several lines | `number` | `1` |
| gapY | Vertical distance of barrage | `number` | `10` |
| loop | Loop play | `boolean` | `true` |

### Ref

| Event | Description | Arguments |
| --- | --- | --- |
| add | Add data | `(word: string) => void` |
