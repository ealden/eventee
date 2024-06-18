def load_month_view
  @page = EventsPage.new

  @page.load

  @page.nav_month_view.click
end

When 'I try to view all my events in month view' do
  load_month_view
end

When 'I try to view all my events in the previous month' do
  load_month_view

  @page.month_view.prev_month.click
end

When 'I try to view all my events in the next month' do
  load_month_view

  @page.month_view.next_month.click
end

When 'I try to view all my events this month' do
  load_month_view

  # We default to this month, so navigate to a different month first
  @page.month_view.prev_month.click

  @page.month_view.this_month.click
end

Then 'I must see the following month for {string}:' do |current_period, table|
  expect(@page.current_period.text).to eql current_period

  expected = table.raw.drop(1).flatten.reject(&:blank?)

  actual = @page.days.map(&:text)

  expect(actual).to eql expected
end

Then 'I must see the following month events on {string}:' do |date, table|
  expected = table.hashes

  actual = @page.events_on(date).collect do |event|
    {
      'Summary' => event.summary.text,
      'Starts At' => event.starts_at.text
    }
  end

  expect(actual).to eql expected
end
