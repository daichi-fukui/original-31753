class Reservation < ApplicationRecord
  belongs_to :user

  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :create_time

  validates :create_time_id, numericality: { other_than: 1 }
end
