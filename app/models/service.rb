class Service < ApplicationRecord
  belongs_to :handyman
  has_many :comments, dependent: :destroy
end
