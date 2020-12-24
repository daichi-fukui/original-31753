class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def self.guest
    find_or_create_by!(email: 'guest@example.com') do |user|
      user.password = SecureRandom.urlsafe_base64
      user.family_name = 'ゲスト'
      user.first_name = 'ゲスト'
    end
  end

  has_many :reservations

  with_options presence: true do
    NAME_REGEX = /\A[ぁ-んァ-ン一-龥]/
    validates :family_name, format: { with: NAME_REGEX, message: 'は全角を使用してください' }
    validates :first_name, format: { with: NAME_REGEX, message: 'は全角を使用してください' }
  end
end
