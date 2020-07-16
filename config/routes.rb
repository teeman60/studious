Rails.application.routes.draw do
  resources :comments
  resources :posts
  resources :appointments
  resources :skills
  # resources :engagements
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
      resources :users

      post '/login', to: "auth#create"  


end
