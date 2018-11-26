Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :auctions, only: [ :index, :show, :create, :destroy ] do
        resources :bids, only: [ :destroy ]
      end
      resource :sessions, only: [ :create, :destroy ]
      resources :users, only: [] do
        # /api/v1/users/current
        get :current, on: :collection
          # /api/v1/users/:question_id/current <-- default
          # /api/v1/users/:id/current <-- "on: :member"
      end
    end
    # match "*not_found", via: :all, to: "application#not_found"
  end
end
