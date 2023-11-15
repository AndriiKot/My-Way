require 'json'

json = File.read('_demo.json')
p json

array = JSON.parse(json)

p array.class 