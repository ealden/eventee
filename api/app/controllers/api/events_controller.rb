class Api::EventsController < ApiController
  def index
    render json: Event.all
  end

  def create
    event = Event.create event_params

    render status: :created,
           json: event
  end

  private

  def event_params
    params.permit :summary, :starts_at, :ends_at
  end
end
