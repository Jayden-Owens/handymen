class Handymen < ApplicationRecord
    has_many :services, dependent: :destroy
end
