Given 'I have a list of events' do
  Event.create summary: 'Event 1', starts_at: '2024-06-14 14:00:00 UTC', ends_at: '2024-06-14 15:00:00 UTC'
  Event.create summary: 'Event 2', starts_at: '2024-06-14 15:00:00 UTC', ends_at: '2024-06-14 16:00:00 UTC'
  Event.create summary: 'Event 3', starts_at: '2024-06-14 17:00:00 UTC', ends_at: '2024-06-14 18:00:00 UTC'
end

When 'I try to view all my events' do
  @events = Event.all
end

Then 'I must see the following events:' do |table|
  table.hashes.each_with_index do |row, i|
    event = @events[i]

    expect(event.summary).to eql row['Summary']
    expect(event.starts_at.to_formatted_s).to eql row['Starts At']
    expect(event.ends_at.to_formatted_s).to eql row['Ends At']
  end
end
