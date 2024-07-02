class Api::EventsController < ApiController
  def index
    render json: Event.all
  end

  def create
    event = Event.create summary: 'New Event',
                         starts_at: '2024-07-02 15:00',
                         ends_at: '2024-07-02 18:00'

    render status: :created,
           json: event
  end
end
