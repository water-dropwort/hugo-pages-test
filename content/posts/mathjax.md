---
title: "HugoでMathjaxを試す"
date: 2022-10-23T15:32:55+09:00
draft: false
---

# 使用方法
htmlファイル(例えばヘッダの情報を記載するhtml)に、  
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```
を記載する。  
マークダウン上では
- 新しい行から記述する場合は`$$`と`$$`で挟んだ領域にtexを記述する。  
- インラインで記述したい場合は`\\(`と`\\)`で挟んだ領域にtexを記述する。(`$`で挟んだ場合はうまく動作しなかった)


# 動作確認
ポアソン分布の定義は
$$ P(y|\lambda) = \frac{\lambda^{y}e^{-\lambda}}{y!} $$
である。  
上記式の\\(y\\)は事象の発生回数、\\(\lambda\\)は平均あるいは分散である。  
\\(\boldsymbol{x}\\)を説明変数のベクトル、\\(\boldsymbol{\beta}\\)をパラメータのベクトルとして、  
\\(\lambda = \exp {\boldsymbol{x}^T\boldsymbol{\beta}}\\)とすると、リンク関数を\\(\ln x\\) としたポアソン回帰モデルになる。
