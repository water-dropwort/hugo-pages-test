---
title: "サイト作成からビルドまで"
date: 2023-01-31T17:32:12+09:00
draft: false
---
## 手順
1. `hugo new site sitename`でサイトを作成
2. `cd sitename`でサイトのディレクトリへ
3. `hugo new theme themename`でテーマのテンプレートが sitename/themes/themename に作成される。
4. index.htmlなどのファイルが空の状態で生成されるので、中身を記述する。
5. `hugo new posts/xxx.md`でコンテンツを新規作成し、中身を記述する。  
   このコマンドで、sitename/content/posts/xxx.md が作成される。
6. `hugo -D`でビルド。  
   config.toml の publishdir に指定されたフォルダに、htmlファイルが作成される。
