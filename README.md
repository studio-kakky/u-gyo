遊漁船リストのWebアプリケーション「U魚」のリポジトリです。
ソースコード及び遊漁船のリストは@studio-kakkyが管理しています。

## 開発環境の立ち上げ
開発はNext.jsにて行っています。

### 依存関係の準備
```bash
npm i
```
### データ生成
```bash
npm run generate:ships
```

### 開発プレビュー
```bash
npm run dev
```

[http://localhost:3500](http://localhost:3500) をブラウザで立ち上げてください。

## 遊漁船データ 
遊漁船のデータは sub-packages/sources/ 以下に件ごとにフォルダ分けされ、遊漁船ごとに1つのjsonファイルで管理されています。
遊漁船追加、情報修正のご依頼はPullRequestでいただけると幸いです。

### データ生成
遊漁船のデータからアプリケーション用のデータの生成は
```bash
npm run generate:ships
```

でおこないます。
