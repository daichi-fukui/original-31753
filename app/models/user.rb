class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :reservations

  with_options presence: true do
    NAME_REGEX = /\A[ぁ-んァ-ン一-龥]/
    validates :family_name, format: { with: NAME_REGEX, message: '全角を使用してください' }
    validates :first_name, format: { with: NAME_REGEX, message: '全角を使用してください' }
  end
end
