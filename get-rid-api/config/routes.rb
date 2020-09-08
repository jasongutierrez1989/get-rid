Rails.application.routes.draw do

  namespace :api do
    resources :sellers do
      resources :posts
    end
  end
end
