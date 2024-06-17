Given 'I have these existing events:' do |table|
  table.hashes.each do |event|
    Event.create summary: event['Summary'],
                 starts_at: event['Starts At'],
                 ends_at: event['Ends At']
  end
end
