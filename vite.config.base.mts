import { join, resolve } from 'path'
// @ts-ignore
import atImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import rehypeHighlight from 'rehype-highlight'
import type { UserConfig } from 'vite'

const __dirname = new URL('.', import.meta.url).pathname.replace(/\/$/, '')

/**
 * 根据项目 ID 生成 SCSS additionalData 注入字符串。
 * 默认主题注入 variables.scss，其余主题注入对应 variables-{id}.scss。
 */
export function buildScssAdditionalData(projectID = '') {
  if (projectID) {
    return `@import '@/styles/variables-${projectID}.scss';\n@import "@/sites/assets/styles/variables.scss";\n`
  }
  return `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";\n`
}

/** 6 条 lottie JSON 路径别名，开发/demo 环境指向 src 源文件 */
export const lottieAliases = [
  {
    find: '@nutui/nutui-react/dist/es/lottie/animation/light/loading.json',
    replacement: resolve(__dirname, './src/packages/lottie/animation/light/loading.json'),
  },
  {
    find: '@nutui/nutui-react/dist/es/lottie/animation/light/global.json',
    replacement: resolve(__dirname, './src/packages/lottie/animation/light/global.json'),
  },
  {
    find: '@nutui/nutui-react/dist/es/lottie/animation/light/pulltorefresh.json',
    replacement: resolve(__dirname, './src/packages/lottie/animation/light/pulltorefresh.json'),
  },
  {
    find: '@nutui/nutui-react/dist/es/lottie/animation/dark/loading.json',
    replacement: resolve(__dirname, './src/packages/lottie/animation/dark/loading.json'),
  },
  {
    find: '@nutui/nutui-react/dist/es/lottie/animation/dark/global.json',
    replacement: resolve(__dirname, './src/packages/lottie/animation/dark/global.json'),
  },
  {
    find: '@nutui/nutui-react/dist/es/lottie/animation/dark/pulltorefresh.json',
    replacement: resolve(__dirname, './src/packages/lottie/animation/dark/pulltorefresh.json'),
  },
]

/** locale 别名：将 dist 路径重定向到 src */
export const localeAliases = [
  {
    find: '@nutui/nutui-react/dist/es/locales/en-US',
    replacement: resolve(__dirname, './src/locales/en-US.ts'),
  },
  {
    find: '@nutui/nutui-react-taro/dist/es/locales/en-US',
    replacement: resolve(__dirname, './src/locales/en-US.ts'),
  },
]

/** 包源码别名：将 @nutui/* 指向 src 下的聚合入口 */
export const packageAliases = [
  { find: '@', replacement: resolve(__dirname, './src') },
  {
    find: '@nutui/nutui-react',
    replacement: resolve(__dirname, './src/packages/nutui.react.ts'),
  },
  {
    find: '@nutui/nutui-react-taro',
    replacement: resolve(__dirname, './src/packages/nutui.react.taro.ts'),
  },
]

/** autoprefixer 浏览器目标（demo / theme 生产构建共用） */
export const autoprefixerBrowsers = [
  '> 0.5%',
  'last 2 versions',
  'ie > 11',
  'iOS >= 10',
  'Android >= 5',
]

/**
 * 生成各配置共用的 css.preprocessorOptions。
 * @param projectID          主题 ID，影响 SCSS 变量注入
 * @param withAutoprefixer   是否加入 autoprefixer（生产 demo/theme 构建需要，dev/site 不需要）
 * @param silenceDeprecations 是否抑制 sass @import 废弃警告（dev 传 false 保持警告可见）
 */
export function buildCssOptions(
  projectID = '',
  withAutoprefixer = false,
  silenceDeprecations = true,
): UserConfig['css'] {
  return {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: buildScssAdditionalData(projectID),
        ...(silenceDeprecations
          ? { silenceDeprecations: ['import', 'global-builtin'] }
          : {}),
      },
      postcss: {
        plugins: [
          atImport({ path: join(__dirname, 'src') }),
          ...(withAutoprefixer
            ? [autoprefixer({ overrideBrowserslist: autoprefixerBrowsers })]
            : []),
        ],
      },
    },
  }
}

/**
 * 生成文档站共用的 MDX rollup 插件配置。
 * vite.config.mts / vite.config.site.mts / vite.config.site.taro.mts 三处共用。
 */
export async function buildMdxPlugin() {
  const mdx = await import('@mdx-js/rollup')
  const remarkGfm = await import('remark-gfm')
  const remarkDirective = await import('remark-directive')
  return {
    enforce: 'pre' as const,
    ...mdx.default({
      providerImportSource: '@mdx-js/react',
      mdExtensions: [],
      mdxExtensions: ['.md'],
      remarkPlugins: [remarkGfm.default, remarkDirective.default],
      rehypePlugins: [rehypeHighlight],
    }),
  }
}
