class Api::V1::GreetingsController < ApplicationController
    def index
      @greeting = Greeting.order('Random()').limit(1)
      render json: @greeting
    end
end  