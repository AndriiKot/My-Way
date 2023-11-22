daysprogress = File.readlines('delete_commas.txt')
days_training = 0;

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


total_hours = 0 
sort_hash = hash_technologies.sort_by {|key, value| value}

sort_hash.each do |key,value|
  puts "#{key}:      #{value}"
  total_hours += value
end

puts "Total Technologies: #{hash_technologies.size}"
puts "Total Hours: #{total_hours}"
puts "Total Days: #{days_training}"
puts "average hours per day is: #{(total_hours / days_training).round}"








