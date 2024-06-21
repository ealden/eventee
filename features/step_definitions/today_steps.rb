When 'I try to get what today is' do
  get '/api/today'
end

Then 'I must see today as {string}' do |today|
  expected = {
    today: Date.parse(today).iso8601
  }

  expect(json_response).to eql expected
end
