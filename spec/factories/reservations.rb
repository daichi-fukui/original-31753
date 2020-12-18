FactoryBot.define do
  factory :reservation do
    association :user

    start_time               {Date.tomorrow}
    create_time_id              {2}
  end
end