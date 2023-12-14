# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    get 'greetings/random_greeting'
  end
  root 'root#index'
end
