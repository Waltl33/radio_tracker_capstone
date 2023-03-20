class AddRentedToRadios < ActiveRecord::Migration[7.0]
  def change
    add_column :radios, :rented, :boolean
  end
end
