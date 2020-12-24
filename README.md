## アプリケーション名
#### Diving school Life
![9e682e00e0978a4359eae60c7f56ce4d](https://user-images.githubusercontent.com/73151516/103076300-c1379b00-4610-11eb-88c0-278ae495a6f2.jpg)

## アプリケーション概要
このアプリは、教習所における**技能教習の予約を取得、管理**出来るものです。  
予約はいつ取得しているかを一目で確認できるように、カレンダーを導入しています。  
また、空き時間に免許試験問題や運転動画の閲覧も可能です。

## アプリケーションの利用方法

### URL
http://54.249.225.33/

### ゲスト用アカウント(閲覧用)
トップページにてゲストとしてログイン出来るようにしております  

### テスト用アカウント
メールアドレス  
sample@sample.com  
パスワード  
123456

### 具体的な利用方法
※下記の操作は、全てログイン後に行って下さい。  
①技能教習予約の取り方  
トップページから「予約を取る」をクリックすると、予約取得画面に遷移します。  
そこで、カレンダー下部から日付、時間を選択し「予約を取る」をクリックして下さい。
![d79e8e74544e90edc01155acb8ba075f](https://user-images.githubusercontent.com/73151516/102450775-8961ae00-407a-11eb-8e60-9cc76c250246.gif)

②免許試験問題を解く  
トップページから「免許試験問題集」をクリックすると、問題集画面に遷移します。  
項目を選択し、練習問題開始となります。  
③動画を閲覧する  
トップページから「動画を見る」をクリックすると、動画閲覧ページに遷移しますので、  そこから動画を選び閲覧します。

## 制作背景
教習所における技能教習の予約は、対面や電話による取得方式が一般的です。  
教習所に通う全ての方にとって、より便利に、手軽に予約が取得できればと思い、本アプリを作成しました。  
また、教習カリキュラム上待ち時間が発生することが多々ありますので、  
そういった方々をターゲットに免許試験問題集と運転動画閲覧ページを用意しました。

## 使用技術(開発環境)
### フロントエンド
HTML/CSS/SCSS/JavaScript
### バックエンド
Ruby/Ruby on Rails
### データベース
MySQL/Sequel Pro
### インフラ
AWS(EC2)/Capistrano
### Webサーバー
nginx
### アプリケーションサーバー
unicorn
### ソース管理
GitHub/GitHubDesktop
### エディタ
VSCode

## テーブル設計

## users テーブル

| Column             | Type    | Options     |
| ------------------ | ------- | ----------- |
| family_name        | string  | null: false |
| first_name         | string  | null: false |
| email              | string  | null: false |
| encrypted_password | string  | null: false |

### Association

- has_many :reservations

## reservations テーブル

| Column         | Type       | Options           |
| -------------- | ---------- | ----------------- |
| create_time_id | integer    | null: false       |
| start_time     | datetime   | null: false       |
| user           | references | foreign_key: true |

### Association

- belongs_to :user
