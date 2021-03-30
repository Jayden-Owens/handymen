price_range = (50..500).to_a
hours_range = (1..100).to_a
rating_range = (1..5).to_a

5.times do
  handymen = Handyman.create(
    name: Faker::FunnyName.two_word_name,
    specialty: Faker::Movies::HarryPotter.location 
  )
  3.times do
    service = Service.create(
      service_type: Faker::Games::Pokemon.move,
      price: price_range.sample,
      hours: hours_range.sample,
      handyman_id: handymen.id
    )
    5.times do
      Comment.create(
        title: Faker::TvShows::MichaelScott.quote,
        body: Faker::ChuckNorris.fact,
        rating: rating_range.sample,
        service_id: service.id
      )
    end
  end
end

puts "Data Seeded"
