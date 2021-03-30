class CreateHandymen < ActiveRecord::Migration[6.1]
  def change
    create_table :handymen do |t|
      t.string :name
      t.string :specialty

      t.timestamps
    end
  end
end
