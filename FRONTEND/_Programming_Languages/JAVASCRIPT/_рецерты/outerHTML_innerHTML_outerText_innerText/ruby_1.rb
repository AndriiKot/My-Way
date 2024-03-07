require 'set'

array = [].to_set
def input = gets.strip

puts "enter the color: "

loop do 
    color = input()
    break if color == ''
    array.add color
end

puts array
puts array.sort