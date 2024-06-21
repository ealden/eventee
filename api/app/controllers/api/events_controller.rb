class Api::EventsController < ApiController
  def index
    render json: Event.all
  end
end
