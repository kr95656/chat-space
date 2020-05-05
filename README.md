# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## users テーブル 

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|string|null: false|
|email|string|null: false, unique: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :messages
- has_many :groups


## groups テーブル 

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

### Association
- has_many :users
- has_many :messages


## messages テーブル 

|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :users
- has_many :groups


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groups_messagesテーブル

|Column|Type|Options|
|------|----|-------|
|message_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :message



