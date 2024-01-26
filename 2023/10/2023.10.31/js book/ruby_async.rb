require "async"
INTERVAL = 0.5
MAX_VALUE = 10

counter = 0
timer = nil

event = -> {
if counter == MAX_VALUE || counter > MAX_VALUE
puts 'The End'
timer.cancel
return
end

puts({ counter: counter, date: Time.now })

counter += 1
}

puts 'Begin'
timer = Async do
loop do
event.call
sleep INTERVAL
end
end

