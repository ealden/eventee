class AddEventPage < SitePrism::Page
  set_url '/'

  element :nav_add_event, '#nav-add-event'

  element :message, '#message'

  element :header, '#header'

  element :summary, '#summary'
  element :starts_at, '#starts_at'
  element :ends_at, '#ends_at'

  element :submit, '#submit'

  def load
    super do |page|
      page.nav_add_event.click
    end
  end

  def add_event event
    load

    summary.set event[:summary]
    starts_at.set format_datetime_local event[:starts_at]
    ends_at.set format_datetime_local event[:ends_at]

    submit.click
  end

  private

  def format_datetime_local input
    '00' + input.gsub(' ', ',')
  end
end
