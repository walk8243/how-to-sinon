# How to SinonJS

Sinon.JSを使ったテストの書き方

## テストケース

それぞれのテストケースでは、既に使用するクラス自体のテストは完了しているものとする。

### Case 1

- 内容
  - 1つの関数の中で、クラスのインスタンス化とメソッドの実行の両方を行っている。
- テスト方法
  - 事前にインスタンス化したものを準備する。
  - クラス自体をスタブして、事前に準備したものを返すようにする。
  - インスタンス化したもののメソッドをスタブする。
  - テスト対象の関数のInとOutを検証する。
  - スタブしたものの実行回数を検証する。
  - スタブしたものの実行順序を検証する。
  - スタブしたもののInの部分を検証する。

### Case 2

- 内容
  - privateとprotectedを修飾しているメソッドを使用しているメソッドのテストを実行する。
- テスト方法
  - テストケースの度にインスタンス化する。
  - privateとprotectedを修飾しているメソッドをスタブする。
  - テスト対象の関数のInとOutを検証する。
  - スタブしたものの実行回数を検証する。
  - スタブしたもののInの部分を検証する。

### Case 3

- 内容
  - privateが修飾されているフィールドとそのGetter/Setterのテストを実行する。
- テスト方法
  - テストケースの度にインスタンス化する。
  - フィールドが初期値であることを検証する。
  - Setterを実行後にフィールドの変更を検証する。
  - Getterでフィールドの取得を検証する。
