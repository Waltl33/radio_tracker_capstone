class ErrorSerializer < ActiveModel::Serializer
  attributes :id
  def self.serialize errors
    errors.map{|key,value| "#{key} #{value}"}
  end
end
