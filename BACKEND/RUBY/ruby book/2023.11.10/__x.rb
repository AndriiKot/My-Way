require 'json'

json = File.read('XXX.json')
p json

array = JSON.parse(json)

p array.class