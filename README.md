# ATENELA

個人開発の活動と順番待ちツール Ato を紹介するサイト。Next.js の静的書き出しで Cloudflare Pages に配信します。

## ローカル確認

```sh
npm ci
npm run dev
```

## 検証と静的書き出し

```sh
npm run lint
npm run build
npm run preview:static
```

出力先は `out/`。Cloudflare Pages のビルドコマンドは `npm run build`、公開ディレクトリは `out` です。

## コンテンツ

- `app/page.tsx`: 自己紹介、Ato、MFTでの利用記録、名前の由来。
- `app/globals.css`: レスポンシブレイアウト。
- `app/layout.tsx`: SEO・共有用メタデータ。
- `scripts/generate-brand-assets.ps1`: Windows / System.Drawing でアイコンとOGPを再生成。

MFTの記録は所有者から提供された内容（ジェラート試食ブース、最大約10組待ち、2日間終了まで運用）に基づきます。開催年や主催者の推薦は追加していません。

ブランド名はATENELAに変更しています。新ドメインは未指定のため、canonical・sitemapは既存の `https://atto-hub.com`、Atoへのリンクは `https://ato.atto-hub.com` です。ドメイン移行時は `app/layout.tsx`、`app/page.tsx`、`public/robots.txt`、`public/sitemap.xml` を更新してください。
