Given 'I have a list of events' do
  Event.create summary: 'Event 1', starts_at: '2024-06-14 14:00:00 UTC', ends_at: '2024-06-14 15:00:00 UTC'
  Event.create summary: 'Event 2', starts_at: '2024-06-14 15:00:00 UTC', ends_at: '2024-06-14 16:00:00 UTC'
  Event.create summary: 'Event 3', starts_at: '2024-06-14 17:00:00 UTC', ends_at: '2024-06-14 18:00:00 UTC'
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
  actual = []

  @page.all_events.events.each do |event|
    actual << {
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

  expected.each_with_index do |day, i|
    expect(@page.month_view.month_days[i].text).to eql day
  end
end

Then 'I must see the following events on {string}:' do |date, table|
  expected = table.hashes
  actual = []

  @page.month_view.events.each do |event|
    actual << {
      'Summary' => event.summary.text,
      'Starts At' => event.starts_at.text
    }
  end

  expect(actual).to eql expected
end
