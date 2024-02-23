require 'json'
require 'set'

arr = (File.open("all_technologies.json") do |file|
    JSON.parse(file.read.chomp)
end)

set = arr.to_set

ARGV.each do |el|
    p set.include? el
end




