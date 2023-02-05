以下の技術を検証するための Sampel プロジェクト

- next.js v13
- storybook v7 (beta)
- RTK Query
- vanilla-extract
- visx

## 始め方

### 依存パッケージの install

```
pnpm i
```

### 開発の開始

- next.js の dev server を起動
  ```
  pnpm dev
  ```
- storybook での開発
  ```
  pnpm storybook
  ```

### その他の script

- lint
  ```
  pnpm lint
  ```
- type-check
  ```
  pnpm type-check
  ```
- jest
  ```
  pnpm jest
  ```
- component test
  - 1. storybook の build
    ```
    pnpm build-storybook
    ```
  - 2. test-runner の実行
    ```
    pnpm ci-test-storybook
    ```

### deploy される branh と対応する domain

| branch  | domain                                         | note                    |
| ------- | ---------------------------------------------- | ----------------------- |
| main    | https://nextjs-with-rtkq.study.strozw.dev/     | 最新 release に対応する |
| develop | https://stg.nextjs-with-rtkq.study.strozw.dev/ | 開発中のもの            |
