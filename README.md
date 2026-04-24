# Portrait Interview Web App

指定の13ステップ聞き取りフローをブラウザで実行するシンプルなWebアプリです。

## 使い方（ローカル）

1. `index.html` をブラウザで開く。
2. STEP1〜STEP13の一覧から、各項目を選択・自由入力する。
3. 「入力まとめを作成」を押す。
4. `【入力まとめ】` が表示される。

## 仕様

- 開始キーワード入力は不要。
- 1ステップずつの対話形式ではなく、全STEPを一覧表示して入力する方式。
- STEP13終了後相当のまとめを表示（プロンプト生成はしない）。

## GitHub Pages 公開

このリポジトリには GitHub Pages 自動デプロイ用のワークフローを追加済みです。

- ワークフロー: `.github/workflows/deploy-pages.yml`
- デプロイ対象: `_site/`（`index.html`, `app.js`, `styles.css`, `.nojekyll`）

公開URL形式:

- `https://<GitHubユーザー名>.github.io/<リポジトリ名>/`

例（リポジトリ名が `Codex` の場合）:

- `https://<GitHubユーザー名>.github.io/Codex/`

## 公開されないときのチェック

- PRでは Build のみ実行し、Deploy は実行しません（権限不足による失敗を回避）。
1. **Settings → Pages** で `Source = GitHub Actions` になっているか。
2. **Settings → Actions → General → Workflow permissions** が `Read and write permissions` になっているか。
3. `main` / `master` / `work` へ push 後、Actions の Deploy ジョブが成功しているか。
4. Actions 成功後、反映まで 1〜5 分待ってからURLを再読み込みしたか。
5. URL末尾にリポジトリ名を含めているか（例: `/Codex/`）。
