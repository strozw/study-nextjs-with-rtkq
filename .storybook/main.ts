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
    'options': {},
  },
  docs: {
    'autodocs': 'tag',
  },
  webpackFinal: async config => {
    const customConfig = { ...config }

    // modify css rule of storybook to exclude Vanilla Extract files
    for (let i = 0; i < customConfig?.module?.rules.length; i++) {
      if (customConfig.module.rules[i].test.test('sample.css')) {
        customConfig.module.rules[i].exclude = /\.vanilla\.css$/i
        break
      }
    }

    customConfig.module.rules.push({
      test: /\.vanilla\.css$/i,
      use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }],
    })

    customConfig.plugins.push(new VanillaExtractPlugin(), new MiniCssExtractPlugin())

    return customConfig
  },
} as StorybookConfig
