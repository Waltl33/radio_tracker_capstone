class RadioSerializer < ActiveModel::Serializer
  attributes :id, :serial_number, :model
  has_many :deputies, through: :rented_radios
end
