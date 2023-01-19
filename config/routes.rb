Rails.application.routes.draw do
  
    get '/users', to: "users#index"
    get '/auth', to: "users#show"
    post '/signup', to: "users#create"
    delete '/users', to: "users#destroy"

    get '/sessions', to: "sessions#index"
    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"


end
