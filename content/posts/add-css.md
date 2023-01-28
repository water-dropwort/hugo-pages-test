---
title: "HugoのthemeにCSSファイルを追加する"
date: 2023-01-28T13:41:34+09:00
draft: false
---

1. テーマ内のstatic/cssフォルダにcssファイルを格納する。  
   例：theme-test/static/css/test.css  
   ※static/cssは(おそらく)固定で、名前を変えると読み込めない。  
2. htmlファイルで、`<href link="{{ relURL "css/test.css" }}" href="stylesheet">` を記載することで使用できる。  
   relURLに指定した値は、baseURL＠config.tomlの値と統合される。
   例：`baseURL=https://go-example.com`ならば、上記のlink属性の値は`https://go-example.com/css/test.css`となる。