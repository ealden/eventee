class String
  def json
    JSON.parse File.read("spec/assets/#{self}.json").strip, symbolize_names: true
  end
end

module ActionDispatch
  class TestResponse
    def json
      json = JSON.parse body, symbolize_names: true

      if json.is_a? Array
        json.each do |entry|
          [:created_at, :updated_at].each do |field|
            entry[field] = 'timestamp' if entry.include? field
          end
        end
      else
        [:created_at, :updated_at].each do |field|
          json[field] = 'timestamp' if json.include? field
        end
      end

      json
    end
  end
end
