class CreateRadios < ActiveRecord::Migration[7.0]
  def change
    create_table :radios do |t|
      t.string :serial_number
      t.string :model

      t.timestamps
    end
  end
end
