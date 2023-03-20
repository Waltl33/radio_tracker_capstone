class DeputySerializer < ActiveModel::Serializer
  attributes  :id, :first_name, :last_name, :identification_number, :resign, :location
  has_many :radios
end
