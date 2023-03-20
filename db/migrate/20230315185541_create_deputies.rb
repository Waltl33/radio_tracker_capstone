class CreateDeputies < ActiveRecord::Migration[7.0]
  def change
    create_table :deputies do |t|
      t.string :first_name
      t.string :last_name
      t.string :identification_number
      t.boolean :resign
      t.string :location

      t.timestamps
    end
  end
end
