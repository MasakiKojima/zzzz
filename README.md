# web-starter-kit

## URL

**production** : <https://www.example.com>  
**staging** : <https://devweb.jp>

## Account

### Web Server

| host | id  | pw  | path |
| :--- | :-- | :-- | :--- |
| -    | -   | -   | -    |

### DB Server

| host | id  | pw  | name |
| :--- | :-- | :-- | :--- |
| -    | -   | -   | -    |

---

## Get Started

### 準備

任意のディレクトリに展開し、展開したディレクトリで以下のコマンドを実行

```node
npm run start
```

#### `npm run start` で行われるタスク

- `public/assets` 内の `img` フォルダのシンボリックリンクを生成
- `git init`
- `npm i`

---

### 開発タスクの起動

```node
npm run watch
```

#### `npm run watch` で行われるタスク

- PHP ビルトインサーバーの起動
- SCSS のコンパイル（非圧縮＆ソースマップ生成）
- JavaScript のコンパイル（非圧縮＆ソースマップ生成）
- Lint 実行
- Browsersync の起動

---

### ビルドタスクの起動

```node
npm run build
```

#### `npm run build` で行われるタスク

- SCSS のコンパイル（圧縮）
- JavaScript のコンパイル（圧縮）

---

### コミット時の動作

- SCSS を Prettier で整形
- JS を Prettier で整形
- JPEG を圧縮
- PNG を圧縮
- SVG を圧縮

---

## Constitution

```text
src/ - コンパイル前のデータを格納するソースフォルダ
  ┣ scss/ - .scssを格納するフォルダ（デフォルトではpublic/assets/cssにstyle.cssが生成される）
  ┣ js/ - .jsを格納すると、webpackで圧縮されたjsが生成される（デフォルトではpublic/assets/jsにbuild.jsとicons.jsが生成される）
  ┗ svg/ - .svgを格納すると、svgoで圧縮されたsvgスプライトがJS内に生成される
public/ - ドキュメントルート（htmlやphpを格納するフォルダ）
  ┗ assets/
      ┣ css/ - CSSが生成されるフォルダ
      ┣ img/ - 画像を格納するフォルダ
      ┣ js/ - JSが生成されるフォルダ
      ┗ modules/ - インクルードするモジュールを格納するフォルダ
.github - guthubのIssuesやPull requestsのテンプレートファイル
.vscode - VS CODEのタスク・拡張機能ファイル
.browserslistrc - Autoprefixerの対象ブラウザを設定
.editorconfig - インデントや改行コードなどエディターの設定ファイル
.eslintrc - eslintの設定ファイル
.gitignore - gitで管理しないファイルを設定
.htmlhintrc - htmlhintの設定ファイル
.huskyrc - husky設定ファイル
.lintstagedrc - lint-stagedの設定ファイル
.npmrc - fontawesomeのライセンス情報を記述
.prettierrc - prettierの設定ファイル
.router.php - PHPビルトインサーバーの設定ファイル
.stylelintrc - stylelintの設定ファイル
.svgorc - svgoの設定ファイル
package.json - npmパッケージの設定ファイル
package-lock.json - 依存パッケージのバージョン固定
*.code-workspace - VS CODEの設定ファイル
webpack.mix.js - laravel mixの設定ファイル
```

## Liblary

- [Starteeer.js](https://masakikojima.github.io/Starteeer.js/)
- [Hamburgeeer.js](https://masakikojima.github.io/Hamburgeeer.js/)
- [Scroooll.js](https://masakikojima.github.io/Scroooll.js/)
- [Mooodal.js](https://masakikojima.github.io/Mooodal.js/)
- [Accooordion.js](https://masakikojima.github.io/Accooordion.js/)

## Sample

- [\_carousel.js](https://gist.github.com/MasakiKojima/242f057afd820f9c890238240768050a)
- [\_scrollmagic.js](https://gist.github.com/MasakiKojima/c7e9df193ba182ba14ea71a3ec504382)
- [\_sticky-sidebar.js](https://gist.github.com/MasakiKojima/20416ac904a8c2bdc995ea24a5e928ab)
- [\_map.js](https://gist.github.com/MasakiKojima/f869379df7831fe33e65117831db2c2a)
