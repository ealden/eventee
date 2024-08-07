require 'rails_helper'

RSpec.describe 'Api::Events', type: :request do
  describe 'GET /api/events' do
    it 'returns all events' do
      Event.create summary: 'Event 1', starts_at: '2024-06-14 14:00:00 UTC', ends_at: '2024-06-14 15:00:00 UTC'
      Event.create summary: 'Event 2', starts_at: '2024-06-14 15:00:00 UTC', ends_at: '2024-06-14 16:00:00 UTC'
      Event.create summary: 'Event 3', starts_at: '2024-06-14 17:00:00 UTC', ends_at: '2024-06-14 18:00:00 UTC'

      get '/api/events'

      expect(response).to have_http_status :ok
      expect(response.json).to eql 'api/events/get_response'.json
    end
  end

  describe 'POST /api/events' do
    it 'creates a new event' do
      event = {
        summary: 'New Event',
        starts_at: '2024-07-02T15:00:00.000Z',
        ends_at: '2024-07-02T18:00:00.000Z'
      }

      post '/api/events', params: event

      expect(response).to have_http_status :created
      expect(response.json).to eql 'api/events/post_response'.json

      expect(Event.count).to eql 1
    end
  end
end
