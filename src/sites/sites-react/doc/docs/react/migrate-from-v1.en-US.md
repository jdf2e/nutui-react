# Upgrading from v1 to v2

This document will help you upgrade from NutUI React `1.x` to NutUI React `2.x` version.

## Upgrade Steps

1. H5 Install NutUI React version 2.x

```shell
npm install @nutui/nutui-react
```

2. Taro installs NutUI React version 2.x

```shell
npm install @nutui/nutui-react-taro
```

3. Handling incompatible updates
   There are some incompatible updates from NutUI React 1.x to NutUI React 2.x. You need to read the incompatible updates carefully and deal with them in turn.
   You can manually check your code against the list below to make changes, or we provide a codemod cli tool @nutui/nutui-react-codemod to help you upgrade to v2 quickly. Please commit your local code changes before running codemod cli.
4. Theme variables are renamed:
   For example, primary-color is renamed to color-primary; note that if you are using a custom theme, especially if you are using the ConfigProvider component, you are not using `nutuiBrandColor`, remember to rename it to `nutuiColorPrimary`.

## Compatibility Updates

1. Component style handling
   Added support for importing css files on demand, while retaining the ability to import scss files on demand. On-demand css import can be realized by babel-import-plugin plugin:
   The H5 configuration is as follows:

```json
// Webpack .babelrc or babel.config.js configuration
plugins: [
  [
    “import”.
    {
      libraryName: “@nutui/nutui-react”, libraryDirectory: “dist/esm”, {
      libraryDirectory: “dist/esm”, {
      style: 'css',
      camel2DashComponentName: false,
    }.
    “nutui-react”.
  ]
]
```

Taro is configured as follows:

```json
// Configured in Webpack .babelrc or babel.config.js
plugins: [
  [
    “import”.
    {
      libraryName: “@nutui/nutui-react-taro”, libraryDirectory: “dist/esm”, {
      libraryDirectory: “dist/esm”, {
      style: 'css',
      camel2DashComponentName: false,
    }.
    “nutui-react-taro”.
  ]
]
```

2. better type exporting and adding `JSDoc` annotations to types
3. Adjustment of component categorization
   In terms of component classification, we have reviewed the 1.x classification based on the information structure from the interaction dimension, together with the interaction design side, and subclassed and reclassified them, with the goal of more closely matching the distribution of interaction scenarios and making it easy to find components. The main distribution is:

- Basic components, remove the `Popup` component, and subdivide `Popup` into operation feedback-guidance tips section;
- Layout components, remain unchanged;
- Navigation components: move paging related components `Pagination` and `Indicator` to the display component (to consider the light operation of paging on mobile); move `Menu` menu to the subclass of data entry class-selector (to consider that `Menu` is mainly used as a filter);

Translated with DeepL.com (free version)
