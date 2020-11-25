Rails.application.routes.draw do
  get 'reservations/index'
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "reservations#index"
end
