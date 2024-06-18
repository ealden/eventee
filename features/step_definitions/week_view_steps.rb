def load_week_view
  @page = EventsPage.new

  @page.load

  @page.nav_week_view.click
end

When 'I try to view all my events in week view' do
  load_week_view
end

When 'I try to view all my events in the previous week' do
  load_week_view

  @page.week_view.prev_week.click
end

When 'I try to view all my events in the next week' do
  load_week_view

  @page.week_view.next_week.click
end

When 'I try to view all my events this week' do
  load_week_view

  # We default to this week, so navigate to a different week first
  @page.week_view.prev_week.click

  @page.week_view.this_week.click
end

Then 'I must see the following week for {string}:' do |current_period, table|
  expect(@page.current_period.text).to eql current_period

  expected = table.raw.drop(1).flatten

  actual = @page.days.map(&:text)

  expect(actual).to eql expected
end

Then 'I must see the following week events on {string}:' do |date, table|
  expected = table.hashes

  actual = @page.events_on(date).collect do |event|
    {
      'Starts At' => event.starts_at.text,
      'Summary' => event.summary.text
    }
  end

  expect(actual).to eql expected
end

Then 'I must see {int} events this week' do |count|
  expect(@page.events).to have_attributes count: count
end

Then 'I must not see any events this week' do
  expect(@page.events).to be_empty
end
