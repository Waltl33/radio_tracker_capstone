# config/routes.rb
Rails.application.routes.draw do
  resources :rented_radios
  resources :radios
  resources :deputies
  resources :users
  # route to test your configuration
get '/hello', to: 'application#hello_world'
post "/login", to: "sessions#create" #creates a new session
post "/signup", to: "users#create"
delete '/logout', to: 'sessions#destroy'
get '/authorized', to: 'users#show'
end