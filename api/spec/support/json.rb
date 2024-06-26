class String
  def json
    JSON.parse File.read("spec/assets/#{self}.json").strip, symbolize_names: true
  end
end

module ActionDispatch
  class TestResponse
    def json
      json = JSON.parse body, symbolize_names: true

      json.each do |entry|
        entry[:created_at] = 'timestamp'
        entry[:updated_at] = 'timestamp'
      end

      json
    end
  end
end
