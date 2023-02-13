Rails.application.routes.draw do
  
    post '/signup', to: "users#create"
    get '/auth', to: "users#show"

    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"

    resources :users, only: [:show]
    resources :projects, only: [:index, :create, :update, :destroy]
    resources :tasks, only: [:index, :show, :create, :update, :destroy]

end