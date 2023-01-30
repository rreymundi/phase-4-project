Rails.application.routes.draw do
  
    post '/signup', to: "users#create"
    get '/auth', to: "users#show"

    post '/login', to: "sessions#create"
    delete '/logout', to: "sessions#destroy"

    get '/users', to: "users#index"

    get '/projects', to: "projects#index"
    post '/users/:id/projects', to: "projects#create"

    get '/tasks', to: "tasks#index"
    post '/users/:id/tasks', to: "tasks#create"

end