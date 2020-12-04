class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.integer :create_time_id, null: false
      t.references :user, foreign_key: true
      t.datetime :start_time
      t.timestamps
    end
  end
end
