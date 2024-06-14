Given 'I have a list of events' do
  Event.create summary: 'Event 1', starts_at: '2024-06-14 14:00:00 UTC', ends_at: '2024-06-14 15:00:00 UTC'
  Event.create summary: 'Event 2', starts_at: '2024-06-14 15:00:00 UTC', ends_at: '2024-06-14 16:00:00 UTC'
  Event.create summary: 'Event 3', starts_at: '2024-06-14 17:00:00 UTC', ends_at: '2024-06-14 18:00:00 UTC'
end

When 'I try to view all my events' do
  @page = EventsPage.new

  @page.load
end

Then 'I must see the following events:' do |table|
  actual = []

  @page.events.each do |event|
    actual << {
      'Summary' => event.summary.text,
      'Starts At' => event.starts_at.text,
      'Ends At' => event.ends_at.text
    }
  end

  expect(actual).to eql table.hashes
end
