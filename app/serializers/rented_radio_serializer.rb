class RentedRadioSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :deputy
  belongs_to :radio
end
