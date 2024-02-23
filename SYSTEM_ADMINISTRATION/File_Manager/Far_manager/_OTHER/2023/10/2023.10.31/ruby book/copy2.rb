daysprogress = File.readlines('delete_commas.txt')
days_training = 0
hash_technologies = Hash.new(0)


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




hash_directions = {
  'devops' => ['cmd','conemu','npm','vagrant','webpack','wsl'],
  'backend' => ['postgresql','ruby','sql'],
  'frontend' => ['css','dom','eslint','gulp','js','lodash','ts','webapi'],
  'gamedev' => [],
  'universal' => ['git','vscode'],
}
hash_directions_hours = {
  'devops' => 0,
  'backend' => 0,
  'frontend' => 0,
  'gamedev' => 0,
  'universal' => 0,
}

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


 hash_directions.each do |key_direction,value_array|
  value_array.each do |key, direction = key_direction|
    hash_directions_hours[direction] += hash_technologies[key]
  end
end

puts "  Total Technologies: #{hash_technologies.size}\n\n"

puts " " + '_' * 24;

hash_directions_hours.each do |key,value|
  # puts "  #{key.capitalize}: #{value} hours"
  puts format("|  %-14s %-4.1f h.|", key.capitalize, value)
end

# puts "\nTotal Hours: #{total_hours}"
puts " " + '-' * 24;

puts format("  %-10s   %-4.1f h.", "Total Hours ", total_hours)
# puts "Total Days: #{days_training}"
puts format("  %-12s   %-4.1f d.", "Total Days ", days_training)
# puts "average hours per day is: #{(total_hours / days_training).round}"
puts format("  %-15s %-2.1f h.", "ARG day ",(total_hours/ days_training).round)












