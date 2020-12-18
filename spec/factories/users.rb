FactoryBot.define do
  factory :user do
    family_name              {"福井"}
    first_name               {"大地"}
    email                 {Faker::Internet.free_email}
    password              {Faker::Internet.password(min_length: 6)}
    password_confirmation {password}
  end
end