Given 'I have a list of events' do
  Event.create summary: 'Event 1', starts_at: '2024-06-14 14:00:00 UTC', ends_at: '2024-06-14 15:00:00 UTC'
  Event.create summary: 'Event 2', starts_at: '2024-06-14 15:00:00 UTC', ends_at: '2024-06-14 16:00:00 UTC'
  Event.create summary: 'Event 3', starts_at: '2024-06-14 17:00:00 UTC', ends_at: '2024-06-14 18:00:00 UTC'
end

When 'I try to view all my events' do
  get api_events_path
end

Then 'I must see the following events:' do |table|
  actual = []

  json_response.each do |event|
    starts_at = DateTime.parse event[:starts_at]
    ends_at = DateTime.parse event[:ends_at]

    actual << {
      'Summary' => event[:summary],
      'Starts At' => "#{starts_at.to_fs(:db)} UTC",
      'Ends At' => "#{ends_at.to_fs(:db)} UTC"
    }
  end

  expect(actual).to eql table.hashes
end
