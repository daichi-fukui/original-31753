# テーブル設計

## users テーブル

| Column             | Type    | Options     |
| ------------------ | ------- | ----------- |
| family_name        | string  | null: false |
| first_name         | string  | null: false |
| email              | string  | null: false |
| encrypted_password | string  | null: false |
| birthday           | date    | null: false |

### Association

- has_many :reservations

## reservations テーブル

| Column  | Type       | Options           |
| ------- | ---------- | ----------------- |
| date_id | integer    | null: false       |
| time_id | integer    | null: false       |
| user    | references | foreign_key: true |

### Association

- belongs_to :user