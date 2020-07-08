# README

## アプリ概要  
簡易版アプリチャットです。グループ間でユーザー同士がメッセージや画像を投稿できます。  
プログラミングスクールで作成した成果物となります。
　　
　　
## users テーブル 

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|
|email|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users


## groups テーブル 

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users

## messages テーブル 

|Column|Type|Options|
|------|----|-------|
|text|text|
|image|string|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user




