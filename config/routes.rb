Rails.application.routes.draw do
  devise_for :users
  root to: "reservations#index"
  resources :reservations
  resources :videos, only: [:index]
  resources :learnings, only: [:index]
  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#new_guest'
  end
end
