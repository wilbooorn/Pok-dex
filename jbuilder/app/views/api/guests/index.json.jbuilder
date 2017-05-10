# @guests.map{ |guest| json.partial! 'guest', guest: guest }

json.array! @guests do |guest|
  json.partial! guest
end
