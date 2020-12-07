class Reservation < ApplicationRecord
  belongs_to :user

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :create_time

  validates :create_time_id, numericality: { other_than: 1 }

  validate  :date_not_before_today

  def date_not_before_today
    errors.add(:start_time, "は翌日以降の日付を選択してください") if start_time.nil? || start_time < Date.today
  end
end
