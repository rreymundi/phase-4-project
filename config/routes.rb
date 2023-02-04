Rails.application.routes.draw do
  
    post '/signup', to: "users#create"
    get '/auth', to: "users#show"

    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"

    resources :users, only: [:show, :index] do
        resources :tasks, only: [:index, :show]
    end

   resources :projects, only: [:index, :create, :update, :destroy]

end