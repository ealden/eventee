require 'rails_helper'

RSpec.describe 'Api::Today', type: :request do
  describe 'GET /api/today' do
    it 'returns date today' do
      travel_to Date.parse('2024-07-05')

      get '/api/today'

      expect(response).to have_http_status :ok
      expect(response.json).to eql 'api/today/get_response'.json
    end
  end
end
