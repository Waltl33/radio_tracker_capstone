class AddDateIssuedToRentedRadios < ActiveRecord::Migration[7.0]
  def change
    add_column :rented_radios, :date_issued, :string
  end
end
