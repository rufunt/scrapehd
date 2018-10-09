class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.text :url
      t.references :post, foreign_key: true

      t.timestamps
    end
  end
end
