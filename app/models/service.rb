class Service < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :handymen
end
