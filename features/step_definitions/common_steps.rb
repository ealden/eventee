Given 'I have these existing events:' do |table|
  table.hashes.each do |event|
    Event.create summary: event['Summary'],
                 starts_at: event['Starts At'],
                 ends_at: event['Ends At']
  end
end

Then 'I must see the following calendar for {string}:' do |current_period, table|
  expect(@page.current_period.text).to eql current_period

  expected = table.raw.drop(1).flatten.reject(&:blank?)

  actual = @page.days.map(&:text)

  expect(actual).to eql expected
end
