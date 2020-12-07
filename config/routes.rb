Rails.application.routes.draw do
  devise_for :users
  root to: "reservations#index"
  resources :reservations
  resources :videos, only: [:index]
end
