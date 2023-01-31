---
title: "GitHub Pagesで公開する"
date: 2023-01-31T17:10:19+09:00
draft: false
---
## Hugo側の設定
configファイルに、publishdir = 'docs' を記載する。  
この設定により、`hugo -D`コマンドで生成されたhtmlファイル等は、「/docs」に保存される。  

## GitHub側の設定
- リポジトリのディレクトリに、.nojekyll ファイルを配置する。中身はブランク。
- リポジトリの Setting > Pages の Build and deployment > Branch で、フォルダを「/docs」に設定する。  
  この設定により、GitHub Pagesは「/docs」内のファイルから構築される。


