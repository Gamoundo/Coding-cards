class UserCardSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :att_val, :def_val, :description, :card
  has_one :user
end
