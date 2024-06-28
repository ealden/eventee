Given 'I have this event:' do |table|
  @event = table.transpose.symbolic_hashes.last
end

When 'I try to add a new event' do
  @page = AddEventPage.new

  @page.load

  @page.summary.set @event[:summary]
  @page.starts_at.set @event[:starts_at]
  @page.ends_at.set @event[:ends_at]
end

Then 'I must now see these events:' do |table|
  expect(@page.header.text).to eql 'Add Event'
end
