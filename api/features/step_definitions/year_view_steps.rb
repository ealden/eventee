def load_year_view
  @page = EventsPage.new

  @page.load

  @page.year_view.click
end

When 'I try to view events in year view' do
  load_year_view
end

When 'I try to view events last year' do
  load_year_view

  @page.prev_period.click
end

When 'I try to view events this year' do
  load_year_view

  # We default to this year, so navigate to a different year first
  @page.prev_period.click

  @page.this_period.click
end

When 'I try to view events next year' do
  load_year_view

  @page.next_period.click
end

Then 'I must see this calendar for month {int}:' do |month, table|
  expected = table.raw.drop(1).flatten

  actual = @page.days_of_month[month].map(&:text)

  expect(actual).to eql expected
end

Then 'I must see these days have events:' do |table|
  expected = table.raw.drop(1).flatten

  actual = @page.days_with_events.map(&:text)

  expect(actual).to eql expected
end

Then 'I must not see days with events' do
  expect(@page.days_with_events).to be_empty
end
