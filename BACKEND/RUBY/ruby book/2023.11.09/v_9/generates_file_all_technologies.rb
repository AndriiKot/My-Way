require 'set'
require 'json'
load('./it_areas.rb')

all_technologies = [].to_set

test = 0
IT_Areas.each do |key,value|
    test += value.size
    all_technologies |= value.to_set
end

raise if test != all_technologies.size


json =  all_technologies.to_a.to_json

File.open('all_technologies.json',"w+") do |file|
    file.puts(json)
end




