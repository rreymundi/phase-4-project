Rails.application.routes.draw do
  
    post '/signup', to: "users#create"
    get '/auth', to: "users#show"

    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"

    resources :users, only: [:show] do
        resources :tasks, only: [:index, :show]
        resources :projects, only: [:index]
    end

    resources :projects, only: [:index, :show]

end