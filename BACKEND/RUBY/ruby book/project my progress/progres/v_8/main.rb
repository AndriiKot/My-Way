load("./it_areas.rb")

daysprogress = File.readlines('data.txt')
days_training = 0
hash_technologies = Hash.new(0)
it_areas = IT_Areas
areas_hours = Areas_hours


daysprogress.each do |line|
  date_format = false
  hours = false
  str_key = ''
  str_value = ''

    line.each_char do |chr|
      if (date_format || chr == ' ' ) then next end
      if (chr == ":") then  date_format = true; days_training += 1; next end
      if (chr == "\n") then date_format = false; next end
      if ('a'..'z').cover?(chr)
        str_key += chr; next 
      end
      if (chr == "[")
        hash_technologies[str_key] += 0
        hours = true
        next
      end
      if(hours && (chr == ('.') || (('0'..'9').cover?(chr))))
        str_value += chr
        next
      end
      if(chr == ']')
        hash_technologies[str_key] += str_value.to_f
        hours = false
        str_value = ''
        str_key = ''
        next
      end      
    end
end

total_hours = 0 
sort_hash = hash_technologies.sort_by {|key, value| value}

t = Time.now
start_t = t - (60*60*24*days_training)
puts "#{start_t.year}-#{start_t.month}-#{start_t.day} .. #{t.year}-#{t.month}-#{t.day}"
puts " " + '_' * 24;
sort_hash.each do |key,value|
  total_hours += value
  puts format("|  %-12s| %-5.1fh. |", key,value)
end
puts " " + '-' * 24;


 it_areas.each do |key_direction,value_array|
  value_array.each do |key, direction = key_direction|
    areas_hours[direction] += hash_technologies[key]
  end
end

puts "  Total Technologies: #{hash_technologies.size}\n\n"

puts " " + '_' * 24;

areas_hours.each do |key,value|
  puts format("|  %-14s %-4.1f h.|", key.capitalize, value)
end

puts " " + '-' * 24;

puts format("  %-10s   %-4.1f h.", "Total Hours ", total_hours)
puts format("  %-12s   %-4.1f d.", "Total Days ", days_training)
puts format("  %-15s %-2.1f h.", "ARG day ",(total_hours/ days_training).round)

gets
















