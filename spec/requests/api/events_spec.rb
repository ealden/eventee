require 'rails_helper'

RSpec.describe 'Api::Events', type: :request do
  describe 'GET /api/events' do
    it 'must return all events' do
      Event.create summary: 'Event 1', starts_at: '2024-06-14 14:00:00 UTC', ends_at: '2024-06-14 15:00:00 UTC'
      Event.create summary: 'Event 2', starts_at: '2024-06-14 15:00:00 UTC', ends_at: '2024-06-14 16:00:00 UTC'
      Event.create summary: 'Event 3', starts_at: '2024-06-14 17:00:00 UTC', ends_at: '2024-06-14 18:00:00 UTC'

      get '/api/events'

      expect(response).to have_http_status :ok
      expect(response.json).to eql 'api/events/get_response'.json
    end
  end
end
