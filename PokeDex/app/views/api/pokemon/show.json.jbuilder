json.id @pokemon.id
json.name @pokemon.name
json.attack @pokemon.attack
json.defense @pokemon.defense
json.image_url asset_path(@pokemon.image_url)
json.moves @pokemon.moves
json.items do
  json.array! @pokemon.items do |item|
    json.id item.id
    json.name item.name
    json.pokemon_id item.pokemon_id
    json.price item.price
    json.happiness item.happiness
    json.image_url item.image_url
  end
end
