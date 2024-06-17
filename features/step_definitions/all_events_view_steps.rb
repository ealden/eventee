When 'I try to view all my events' do
  @page = EventsPage.new

  @page.load

  @page.nav_all_events.click
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
