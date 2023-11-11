require './it_areas.rb'
require 'json'


File.open('XXX.json', "w+") do |f|
    f.print(IT_Areas.keys.to_json)
end


