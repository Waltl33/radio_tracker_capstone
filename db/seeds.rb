# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
puts "Seeding data..."
Faker::Config.locale = :en
Radio.destroy_all
RentedRadio.destroy_all
Deputy.destroy_all




Radio.create!(serial_number: "481CSM7894", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM3654", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM2564", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM1564", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM1295", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM2512", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM3697", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM4122", model: "APX6500", rented: true )
Radio.create!(serial_number: "481CSM5233", model: "APX6500", rented: true )
Radio.create!(serial_number: "481CSM9875", model: "APX6500", rented: true )
Radio.create!(serial_number: "481CSM5464", model: "APX6500", rented: true )
Radio.create!(serial_number: "481CSM7895", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM3656", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM2567", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM1566", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM1291", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM2514", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM3698", model: "APX6000", rented: true )
Radio.create!(serial_number: "481CSM4129", model: "APX6500", rented: true )
Radio.create!(serial_number: "481CSM5231", model: "APX6500", rented: true )
Radio.create!(serial_number: "481CSM9811", model: "APX6500", rented: true )
Radio.create!(serial_number: "481CSM5765", model: "APX6500", rented: true )

5.times do
    Deputy.create!(
        first_name:Faker::Name.first_name ,
        last_name:Faker::Name.last_name,
        resign: true,
        identification_number: Faker::Number.binary(digits: 4),
        location: "Courts"   

    )
end
5.times do
    Deputy.create!(
        first_name:Faker::Name.first_name ,
        last_name:Faker::Name.last_name,
        resign: false,
        identification_number: Faker::Number.binary(digits: 4),
        location: "Jail"   

    )
end

5.times do
    Deputy.create!(
        first_name:Faker::Name.first_name ,
        last_name:Faker::Name.last_name,
        resign: true,
        identification_number: Faker::Number.binary(digits: 4),
        location: "Jail"   

    )
end
5.times do
    Deputy.create!(
        first_name:Faker::Name.first_name ,
        last_name:Faker::Name.last_name,
        resign: false,
        identification_number: Faker::Number.binary(digits: 4),
        location: "Courts"   

    )
end

15.times do
    RentedRadio.create!(
        deputy_id: Deputy.all().sample().id,
        radio_id: Radio.all().sample().id,
        date_issued: Faker::Date.in_date_period(month: 12)
    )
end

puts 'Done seeding data'