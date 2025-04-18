# Official theme

## introduce

NutUI provides multiple sets of official `UI` themes by default, while allowing new themes to be customized to a certain extent to meet the diverse visual needs of the business.

####

| theme description | scss file name |
| --- | --- |
| Jingdong APP 10.0 theme (default) | `variables.scss` |
| Jingdong JMAPP Theme | `variables-jmapp.scss ` |

## How to use

It is important to note that when configuring the theme, you also need to import the global class files in the entry file to load some global logic and styles for NutUI React:

| theme description | scss file name |
| --- | --- |
| JD APP Theme (Light Mode) | `@nutui/nutui-react-taro/dist/styles/themes/default.css` |
| JD APP Theme (Dark Mode) | `@nutui/nutui-react-taro/dist/styles/themes/dark.css` |
| JD JMAPP Theme | `@nutui/nutui-react-taro/dist/styles/themes/jmapp.css` |
| JD JRKF Theme | `@nutui/nutui-react-taro/dist/styles/themes/jrkf.css` |

Currently, only the default theme provides support for dark mode.
