class CreateRentedRadios < ActiveRecord::Migration[7.0]
  def change
    create_table :rented_radios do |t|
      t.integer :deputy_id
      t.integer :radio_id

      t.timestamps
    end
  end
end
