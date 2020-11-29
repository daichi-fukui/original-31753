class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.integer :date_id, null: false
      t.integer :time_id, null: false
      t.timestamps
    end
  end
end
