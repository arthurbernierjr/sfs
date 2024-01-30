require('Faker')

names = []

for i in 0..200
  names.push(Faker::FunnyName.name)
end


p names
