Rails.application.routes.draw do
  resources :comments
  resources :appointments
  resources :skills
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post '/login', to: "auth#create"  
  get '/posts', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'
  post '/posts', to: 'posts#create'
  

  patch '/posts/like/:id', to: 'posts#like'
  patch '/posts/resolve/:id', to: 'posts#resolve'
  delete '/posts/:id', to: 'posts#destroy'







end
