# @wavy/react

Reactコンポーネントに関するファイルをCLIで生成するライブラリ。必要なファイルなどを手動で追加するのが手間なので作った。

生成するファイルは以下の拡張子の種類をカスタマイズして設定できる。

- index.tsx
- presenter.tsx
- ComponentName.test.tsx
- ComponentName.stories.tsx
- ComponentName.types.ts

今後はコンポーネントの記述、test、storiesファイルへの自動コード生成もやろうと思っている。

## Usage

`wavy componentName filePath`
`wavy componentName filePath`

## config

`.wavyrc`をルートに作成、json形式でオプションを記述。

### rootDir

生成するファイルの共通パスを設定

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
  "stories",
  "test",
  "types",
  "presenter",
  ]
}
```
