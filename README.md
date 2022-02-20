# component-builder/react

Reactコンポーネントに関するファイルをCLIで生成するライブラリ。必要なファイルなどを手動で追加するのが手間なので作った。

近いうちに生成時のコード挿入もやろうと思っている。

## Usage

`component-builder componentName filePath`

以下のように省略してscriptsに記述すると楽になる。

```json
  "scripts": {
    "cb": "component-builder"
  },
```

`npm run cb componentName filePath`

`yarn cb componentName filePath`

### filePathを省略

後述するconfigファイルに`rootDir`を記述している場合は省略可能。

## config

`component-builder.json`をルートに作成、オプションを記述。

### rootDir

生成するファイルの共通パスを設定。

```json
{
  "rootDir": "src/components/"
}
```

### outExtensions

生成するファイルの拡張子を指定。

```Json
{
  "outExtensions": [
  "index",
  "presenter",
  "types",
  "stories",
  "test",
  ]
}
```
#### index

`index.tsx`ファイルを生成。

#### presenter

Container/Presenter構成を想定し、`index.tsx`と`presenter.tsx`を生成する。

#### types

コンポーネントに対する型定義ファイル、`componentName.types.ts`を生成する。

#### stories

Storybookで使用する`componentName.stories.tsx`を生成する。

#### test

テストライブラリで使用する`componentName.test.tsx`を生成する。

### 追加予定の案
- `.js, .jsx`拡張子対応（現状はtsxのみ）
- コードが記述された状態でファイル生成
- クラスコンポーネント、関数コンポーネントをconfigで選べる
- プリセット機能（生成するファイルのプリセットをconfigで設定し、それぞれ出力できるようにする）
- 他ライブラリと連携（ESLint、prettierなど）
