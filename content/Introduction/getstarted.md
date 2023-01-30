---
title: "サイト作成からGithub pagesへの公開までのメモ"
date: 2022-10-23T06:52:32+09:00
draft: false
---

# Github側の準備
- リポジトリのディレクトリに .nojekyll を配置。(jekyllをoff)
- Setting > Pagesで/docsをGithub Pagesのディレクトリとして指定。

# hugoでのWebページ作成
1. `hugo new site sitename`でサイトを作成
2. `cd sitename`でサイトのディレクトリへ
3. `hugo new theme themename`でテーマのテンプレートがtheme/themenameに作成される。
4. index.htmlなどのファイルが空の状態で生成されるので、中身を記述する。
5. `hugo new posts/xxx.md`でコンテンツを新規作成し、中身を記述する。
6. `hugo -D`でビルド。

# config.toml
```toml
baseURL = 'https://username.github.io/repositoryname'
theme = 'themename'
publishdir =  'docs'
```
