import { Html, Head, Main, NextScript } from 'next/document'

import { themeClass } from '@/common/style/theme.css'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=optional'
          rel='stylesheet'
        />
      </Head>
      <body className={themeClass}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
