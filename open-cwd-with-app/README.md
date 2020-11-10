# open-cwd-with-app

## ビルド方法

1. `open-cwd-with-app.js`を任意のテキストエディタで開く
1. 変数`execPath`を任意のアプリケーションの実行可能パスに変更
1. `build.command`を実行
1. `open-cwd-with-app.app`が出力される
1. 必要に応じてファイル名を変更(`open-cwd-with-Terminal.app`など)

## 使用方法

1. Finderの画面上部のツールバーを右クリックしてコンテキストメニューを表示
1. `Customize Toolbar...` を選択
1. `open-cwd-with-app.app`をツールバーへドラッグ＆ドロップ
1. Doneを押下
1. Finderで任意のディレクトリを開き、ツールバーの`open-cwd-with-app.app`のアイコンをクリック
1. Finderで表示中のディレクトリが任意のアプリケーションで開かれる

## アイコン変更方法

1. Finderで`/Applications`を開く
1. 任意アプリケーション(\*.app)をコピー(Cmd+c)
1. `open-cwd-with-app.app`を右クリして`Get Info`を選択（Cmd+i）
1. 左上のアイコンを選択してペースト(Cmd+v)

## 任意アプリケーションの実行可能パス取得方法

1. Finderで`/Applications`を開く
1. 任意アプリケーション(\*.app)を右クリして`Show Package Content`を選択
1. Contents/MacOS/ の中から実行可能ファイルを見つけ右クリ
1. Optionキーを押下しながら、コンテキストメニューの中から`Copy "XXXX" as Pathname`を選択する
