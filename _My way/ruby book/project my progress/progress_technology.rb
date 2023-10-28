daysprogress = File.readlines('delete_commas.txt')
days_training = 0;

hash_technologies = Hash.new(0)

daysprogress.each do |line|
date_format = false
hours = false
str_key = ''
str_value = ''
    line.each_char do |chr|
      if (date_format || ' ' ) then next end
      if (chr == "(") then date_format = true end
      if (chr == "\n") then date_format = false; next end
      if ('a'..'z' === chr) then str_key += chr; next end
      if (chr == "[")
        hash_technologies[str_key] += 0
        str_key = ''
        hours = true
      end
      if (hours and chr != "]") then str_value += chr; next end
      if (chr == "]")
         hash_technologies[str_key] += str_value.to_f
         str_value = ''
         hours = false
         next
      end
    end
end



p hash_technologies
puts "Total: #{hash_technologies.size}"







