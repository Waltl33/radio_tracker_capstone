class Deputy < ApplicationRecord
    has_many :rented_radios, dependent: :destroy
    has_many :radios, through: :rented_radios

    # validates :first_name, :last_name, :identification_number, :resign, :location, :presence => true
    # validates :identification_number, length: { is: 4 }
    # validates :identification_number, uniqueness: true
    # # validate :one_rented_radio

 

end
