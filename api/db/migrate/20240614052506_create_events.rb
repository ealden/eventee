class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.string :summary
      t.datetime :starts_at
      t.datetime :ends_at

      t.timestamps
    end
  end
end
