When 'I try to view all my events in week view' do
  @page = EventsPage.new

  @page.load

  @page.nav_week_view.click
end

Then 'I must see the following week for {string}:' do |current_week, table|
  expect(@page.week_view.current_week.text).to eql current_week
end

Then 'I must see the following week events on {string}:' do |date, table|
  pending
end
