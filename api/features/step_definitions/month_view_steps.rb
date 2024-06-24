def load_month_view
  @page = EventsPage.new

  @page.load

  @page.month_view.click
end

When 'I try to view events in month view' do
  load_month_view
end

When 'I try to view events last month' do
  load_month_view

  @page.prev_period.click
end

When 'I try to view events next month' do
  load_month_view

  @page.next_period.click
end

When 'I try to view events this month' do
  load_month_view

  # We default to this month, so navigate to a different month first
  @page.prev_period.click

  @page.this_period.click
end
