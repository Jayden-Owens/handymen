class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :service_type
      t.float :price
      t.float :hours
      t.belongs_to :handyman, null: false, foreign_key: true

      t.timestamps
    end
  end
end
``