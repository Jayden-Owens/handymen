class Handyman < ApplicationRecord
  has_many :services, dependent: :destroy
  has_many :comments, through: :services
end
