Given 'I have these existing events:' do |table|
  table.hashes.each do |event|
    Event.create summary: event['Summary'],
                 starts_at: event['Starts At'],
                 ends_at: event['Ends At']
  end
end

When 'I try to view all my events' do
  @page = EventsPage.new

  @page.load

  @page.nav_all_events.click
end

When 'I try to view all my events in month view' do
  @page = EventsPage.new

  @page.load

  @page.nav_month_view.click
end

Then 'I must see the following events:' do |table|
  expected = table.hashes

  actual = @page.all_events.events.collect do |event|
    {
      'Summary' => event.summary.text,
      'Starts At' => event.starts_at.text,
      'Ends At' => event.ends_at.text
    }
  end

  expect(actual).to eql expected
end

Then 'I must see the following calendar for {string}:' do |current_month, table|
  expect(@page.month_view.current_month.text).to eql current_month

  expected = table.raw.drop(1).flatten.reject(&:blank?)

  actual = @page.month_view.days.map(&:text)

  expect(actual).to eql expected
end

Then 'I must see the following events on {string}:' do |date, table|
  expected = table.hashes

  actual = @page.month_view.events_on(date).collect do |event|
    {
      'Summary' => event.summary.text,
      'Starts At' => event.starts_at.text
    }
  end

  expect(actual).to eql expected
end
