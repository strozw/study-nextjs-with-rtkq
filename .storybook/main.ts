import { StorybookConfig } from '@storybook/nextjs'
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default {
  'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  'framework': {
    'name': '@storybook/nextjs',
    'options': {
      fastRefresh: true,
    },
  },
  staticDirs: ['../public'],
  docs: {
    'autodocs': 'tag',
  },
  features: {
    interactionsDebugger: true,
  },
  webpackFinal: async config => {
    const customConfig = { ...config }

    if (customConfig?.module?.rules) {
      // modify css rule of storybook to exclude Vanilla Extract files
      for (let i = 0; i < Number(customConfig?.module?.rules?.length); i++) {
        const rule = customConfig?.module?.rules?.[i]

        if (
          typeof rule !== 'string' &&
          rule?.test instanceof RegExp &&
          rule?.test?.test('sample.css')
        ) {
          if (customConfig?.module?.rules[i]) {
            Object.assign(customConfig.module.rules[i], {
              exclude: /\.vanilla\.css$/i,
            })
          }
          break
        }
      }

      customConfig?.module?.rules.push({
        test: /\.vanilla\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }],
      })

      if (customConfig.plugins) {
        customConfig.plugins.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin())
      }
    }

    return customConfig
  },
} as StorybookConfig
