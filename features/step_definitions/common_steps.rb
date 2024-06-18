Given 'I have these existing events:' do |table|
  table.hashes.each do |event|
    Event.create summary: event['Summary'],
                 starts_at: event['Starts At'],
                 ends_at: event['Ends At']
  end
end

Then 'I must see this calendar for {string}:' do |current_period, table|
  expect(@page.current_period.text).to eql current_period

  expected = table.raw.drop(1).flatten.reject(&:blank?)

  actual = @page.days.map(&:text)

  expect(actual).to eql expected
end

Then 'I must see these events on {string}:' do |date, table|
  expected = table.hashes

  actual = @page.events_on(date).collect do |event|
    {
      'Summary' => event.summary.text,
      'Starts At' => event.starts_at.text
    }
  end

  expect(actual).to eql expected
end

Then 'I must see {int} event(s)' do |count|
  expect(@page.events).to have_attributes count: count
end

Then 'I must not see any event(s)' do
  expect(@page.events).to be_empty
end
