def load_week_view
  @page = EventsPage.new

  @page.load

  @page.week_view.click
end

When 'I try to view events in week view' do
  load_week_view
end

When 'I try to view events last week' do
  load_week_view

  @page.prev_period.click
end

When 'I try to view events next week' do
  load_week_view

  @page.next_period.click
end

When 'I try to view events this week' do
  load_week_view

  # We default to this week, so navigate to a different week first
  @page.prev_period.click

  @page.this_period.click
end
