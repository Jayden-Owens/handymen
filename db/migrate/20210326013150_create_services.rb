class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :type
      t.float :price
      t.float :hours
      t.belongs_to :handymen, null: false, foreign_key: true

      t.timestamps
    end
  end
end
