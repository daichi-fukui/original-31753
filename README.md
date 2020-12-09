## アプリケーション名
Diving school Life

## アプリケーション概要
このアプリは、教習所における**技能教習の予約を取得、管理**出来るものです。
予約はいつ取得しているかを一目で確認できるように、カレンダーを導入しています。
また、空き時間に免許試験問題や運転動画の閲覧も出来ます。

## URL
後日記載予定

## テスト用アカウント
後日記載予定

## 目指した課題解決
教習所における技能教習の予約は、対面や電話による取得方式が一般的です。
教習所に通う全ての方にとって、より便利に、より手軽に予約が取得できればと思い、本アプリを作成しました。
また、教習カリキュラム上待ち時間が発生することが多々あるので、そういった方々をターゲットに免許試験問題集と運転動画閲覧ページを用意しました。

## 洗い出した要件
後日記載予定

## 実装した機能についてのGIFと説明
後日記載予定


# テーブル設計

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
