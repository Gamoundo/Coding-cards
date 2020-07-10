class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :att_val, :def_val, :description
end
