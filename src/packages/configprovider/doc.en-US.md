# ConfigProvider

## Intro

Used to configure NutUI-React components globally, provide theme customization, internationalization support.

## Install

```tsx
import { ConfigProvider } from '@nutui/nutui-react';
```

## Demo

### Customize theme

NutUI-React Styles can be organized through [CSS variables](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) and by overriding these CSS variables, you can achieve effects such as customizing themes, dynamically switching themes, and so on.

#### Overrides via CSS

You can override these CSS variables directly in your code, and the styling of the Button component will change:

> MiniPrograms do not have a ':root' element, only CSS variables can be overridden in the page root element.

```css
/* After you add this style, the Primary Button turns green */
:root {
  --nutui-color-primary: green;
  --nutui-color-primary-start: green;
  --nutui-color-primary-end: green;
}
```

> @nutui/nutui-react comes with two theme files default：@nutui/nutui-react/dist/styles/theme-default.scss; dark：@nutui/nutui-react/dist/styles/theme-dark.scss; If you want to use the dark theme, you can import the dark theme file in your project.

#### Overrides via ConfigProvider

The ConfigProvider component provides the ability to override CSS variables, and you need to wrap a ConfigProvider component at the root node and pass the theme Properties to configure some theme variables.

> "ConfigProvider" component is not a virtual component, it generates a "div" tag.

:::demo

```tsx
import React from 'react';
import {
  ConfigProvider,
  Cell,
  Button,
  Rate
} from "@nutui/nutui-react";

const darkTheme = {
  nutuiBrandColor: 'green',
  nutuiBrandColorStart: 'green',
  nutuiBrandColorEnd: 'green',
}
const App = () => {
  return (
    <ConfigProvider theme={darkTheme}>
      <Cell.Group>
        <Cell>
          <Rate defaultValue={3} />
        </Cell>
        <Cell>
          <Button type="primary" size="large">
            Submit
          </Button>
        </Cell>
      </Cell.Group>
    </ConfigProvider>
  )
}

export default App;
```

#### CSS variables

NutUI-React supports the following CSS variables:

```css
:root,
page {
  --nutui-color-primary: #fa2c19;
  --nutui-color-primary-start: #ff404f;
  --nutui-color-primary-end: #fa2c19;
  --nutui-brand-link-color: #396acc;
  --nutui-brand-text-color: #ffffff;
  // The main content is colored, common words, general title content, detailed text browsing, general button text and chart guidance
  --nutui-gray-6: #1a1a1a;
  // Secondary text color, used for secondary headings, attribute indications, non-primary information guidance, etc.
  --nutui-black-9: #757575;
  // Non-operable content color for preset content, invalid content, special non-clickable buttons, component border lines, etc.
  --nutui-gray-5: #bfbfbf;
  // The base color of the page, used for the bottom of the card-style page, is always placed at the bottom of the page.
  --nutui-gray-4: #f4f4f4;
  // The background color is embedded in the card, which is used for information wrapping inside the card, and the perception is weak.
  --nutui-gray-3: #f8f8f8;
  // Card background color
  --nutui-black-2: #ffffff;
  // Page global mask, used for pop-up layers, pop-ups, full-page masks that new features lead to appear
  --nutui-gray-2: rgba(0, 0, 0, 0.7);
  // Local masks for non-full-page masking
  --nutui-gray-1: rgba(0, 0, 0, 0.4);
  // Spacer/fault-tolerant lines for structure or information segmentation
  --nutui-black-1: rgba(0, 0, 0, 0.08);
  // Image fault tolerance mask
  --nutui-gray-0: rgba(0, 0, 0, 0.02);
}

```

:::

### Internationalization

NutUI-React provides a ConfigProvider component for global configuration of internationalized copywriting. The following languages are currently supported:

*   Chinese Simplified | zh-CN
*   Chinese Traditional (Taiwan) | zh-TW
*   Uyghur | zh-UG
*   English (American) | en-US
*   Indonesian | id-ID

:::demo

```tsx
import React from 'react';
import { ConfigProvider, Textarea } from "@nutui/nutui-react";
import en from "@nutui/nutui-react/dist/locales/en-US";

const App = () => {
  return (
    <ConfigProvider locale={en}>
      <Textarea />
    </ConfigProvider>
  )
}

export default App;
```

:::

### Add language packs

If you can't find the language pack you need, you are welcome to create a new language pack based on English Language Pack and send us a pull request.

## ConfigProvider

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| locale | set the language | `BaseLang` | `zhCN` |
| theme | set the theme | `Record<string, string>` | `-` |