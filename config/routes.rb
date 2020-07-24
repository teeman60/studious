Rails.application.routes.draw do
  resources :comments
  # resources :posts
  resources :appointments
  resources :skills
  # resources :engagements
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users

  post '/login', to: "auth#create"  
  # update '/resolve', to: "posts#resolve"
  # update '/like', to: "posts#like"
  get '/posts', to: 'posts#index'
  get '/posts/:id', to: 'posts#show'

  post '/posts', to: 'posts#create'

  patch '/posts/like/:id', to: 'posts#like'
  patch '/posts/resolve/:id', to: 'posts#resolve'






end
