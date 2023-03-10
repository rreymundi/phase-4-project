Rails.application.routes.draw do
  
    post '/signup', to: "users#create"
    get '/auth', to: "users#show"

    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"

    resources :projects, only: [:index, :create]
    resources :tasks, only: [:index, :create, :update, :destroy]

end