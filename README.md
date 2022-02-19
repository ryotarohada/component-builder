# boilerplate_tsnode

Node.js + TypeScript の開発用テンプレート

## 環境変数について

dotenv を使用、`src/lib/env/`に記述している

### 環境変数を設定する際の手順

- `.env`ファイルをルートに作成、任意の内容を記述
- 型情報を`src/types/global.d.ts`に記述する
