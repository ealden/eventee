When 'I try to view events in year view' do
  @page = EventsPage.new

  @page.load

  @page.year_view.click
end

Then 'I must see this calendar for month {int}:' do |month, table|
  expected = table.raw.drop(1).flatten

  actual = @page.days_of_month[month].map(&:text)

  expect(actual).to eql expected
end
