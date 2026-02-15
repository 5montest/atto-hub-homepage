# homepage (Cloudflare Pages)

このディレクトリは `atto-hub.com` のコーポレートサイトです。
Cloudflare Pages への静的配信を前提にしています。

## 1. ローカル確認

```bash
npm install
npm run lint
npm run build
```

`build` 成功後に `out/` が生成されます。

静的出力をローカル確認する場合:

```bash
npm run preview:static
```

## 2. GitHub に push

このディレクトリは独立リポジトリで運用する想定です。

```bash
git init
git add .
git commit -m "chore: prepare cloudflare pages deployment"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## 3. Cloudflare Pages 設定

Cloudflare Dashboard -> `Workers & Pages` -> `Create application` -> `Pages` -> `Connect to Git` で対象リポジトリを選択し、以下を設定:

- Framework preset: `Next.js` (or `None`)
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: `/`

保存して初回デプロイを実行します。

## 4. カスタムドメイン接続

`Custom domains` で希望ドメイン（例: `www.atto-hub.com`）を追加し、Cloudflare 側の案内に従って DNS を設定します。

## 5. デプロイ後チェック

- トップページ表示
- モバイル表示
- OGP表示（X/LINE/Facebookのデバッガで再取得）
- 404ページ挙動

## メモ

- このプロジェクトは `next.config.ts` で `output: "export"` を設定済みです。
- `ato` 本体（Firebase）とは分離して運用してください。
